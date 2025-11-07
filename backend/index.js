const express = require('express');
const { Resend } = require('resend');
const cors = require('cors');
const dotenv = require('dotenv');
const { body, validationResult } = require('express-validator');
const rateLimit = require('express-rate-limit');
const winston = require('winston');

// --- Configuration ---
dotenv.config();
const PORT = process.env.PORT || 3001;
const app = express();
const resend = new Resend(process.env.RESEND_API_KEY);

// --- Logging Setup (Production Ready) ---
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    // Write all logs with importance level of `error` or less to `error.log`
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    // Write all logs with importance level of `info` or less to `combined.log`
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});

// If we're not in production, then log to the `console`
if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple(),
  }));
}

// --- Security Middleware ---
app.use(cors()); // Enable CORS for all origins (adjust for production if needed)
app.use(express.json());

// Rate Limiting: a maximum of 20 requests per 15 minutes per IP
const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 20, 
	standardHeaders: true,
	legacyHeaders: false,
    message: 'Too many requests from this IP, please try again after 15 minutes',
});

// Apply the rate limiting middleware to our API endpoint
app.use('/api/send-email', limiter);


// --- Validation Rules ---
const emailValidationRules = [
  // name must be a non-empty string and sanitized
  body('name').trim().notEmpty().withMessage('Name is required.').escape(),
  // email must be a valid email format
  body('email').isEmail().withMessage('Please provide a valid email address.').normalizeEmail(),
  // message must be at least 10 chars long and sanitized
  body('message').trim().isLength({ min: 10 }).withMessage('Message must be at least 10 characters long.').escape(),
];

// --- The API Endpoint ---
app.post('/api/send-email', emailValidationRules, async (req, res) => {
  // 1. Check for validation errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    logger.warn('Validation error.', { errors: errors.array() });
    return res.status(400).json({ errors: errors.array() });
  }

  // 2. Destructure sanitized data
  const { name, email, message } = req.body;

  try {
    const { data, error } = await resend.emails.send({
      from: `Website Contact <${process.env.MAIL_FROM_DOMAIN}>`,
      to: process.env.MAIL_TO,
      reply_to: email, // Set the user's email as the reply-to address
      subject: `New Message from ${name}`,
      // The HTML template remains the same
      html: `... your beautiful HTML email template ...`
    });

    if (error) {
      logger.error('Resend API Error:', { error });
      return res.status(400).json({ error: 'Failed to send email.' });
    }
    
    logger.info(`Email sent successfully from ${email}`, { emailId: data.id });
    res.status(200).json({ message: 'Email sent successfully!', data });

  } catch (exception) {
    logger.error('Server Exception:', { exception });
    res.status(500).json({ error: 'An internal server error occurred.' });
  }
});

app.listen(PORT, () => {
  logger.info(`Server is running on port ${PORT}`);
});