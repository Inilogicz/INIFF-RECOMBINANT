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
const INTEREST_OPTIONS = [
  'Laboratory Equipment',
  'Laboratory Consumables',
  'Reagents & Kits',
  'Genomics Solutions',
  'Bioinformatics',
  'Laboratory Setup',
  'Training',
  'Consultancy',
  'Other',
];

const TIMELINE_OPTIONS = [
  'Immediately',
  'Within 1 month',
  '1–3 months',
  'Just making an enquiry',
];

const emailValidationRules = [
  body('fullName').trim().notEmpty().withMessage('Full name is required.').escape(),
  body('company').trim().notEmpty().withMessage('Company / Institution is required.').escape(),
  body('email').isEmail().withMessage('Please provide a valid email address.').normalizeEmail(),
  body('phone').optional({ checkFalsy: true }).trim().escape(),
  body('location').trim().notEmpty().withMessage('Location is required.').escape(),
  body('interests')
    .isArray({ min: 1 }).withMessage('Select at least one area of interest.')
    .custom((interests) => interests.every((i) => INTEREST_OPTIONS.includes(i)))
    .withMessage('Invalid interest selection.'),
  body('productService').trim().notEmpty().withMessage('Product / Service Required is required.').escape(),
  body('requirement').optional({ checkFalsy: true }).trim().escape(),
  body('timeline').optional({ checkFalsy: true }).trim().isIn(TIMELINE_OPTIONS).withMessage('Invalid timeline selection.'),
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
  const {
    fullName,
    company,
    email,
    phone,
    location,
    interests,
    productService,
    requirement,
    timeline,
  } = req.body;

  const row = (label, value) => value
    ? `<tr><td style="padding:8px 12px;font-weight:600;color:#0f3d3e;vertical-align:top;white-space:nowrap;">${label}</td><td style="padding:8px 12px;color:#333;">${value}</td></tr>`
    : '';

  const html = `
    <div style="font-family:Arial,Helvetica,sans-serif;max-width:600px;margin:0 auto;">
      <h2 style="color:#0f3d3e;">New Product & Service Enquiry</h2>
      <table style="width:100%;border-collapse:collapse;">
        ${row('Full Name', fullName)}
        ${row('Company / Institution', company)}
        ${row('Email', email)}
        ${row('Phone / WhatsApp', phone)}
        ${row('Location', location)}
        ${row('Interested In', interests.join(', '))}
        ${row('Product / Service Required', productService)}
        ${row('Requirement Details', requirement)}
        ${row('How Soon?', timeline)}
      </table>
    </div>
  `;

  try {
    const { data, error } = await resend.emails.send({
      from: `Website Enquiry <${process.env.MAIL_FROM_DOMAIN}>`,
      to: process.env.MAIL_TO,
      reply_to: email, // Set the user's email as the reply-to address
      subject: `New Enquiry from ${fullName} (${company})`,
      html,
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