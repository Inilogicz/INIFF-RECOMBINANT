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

// --- Your Brand Colors from your Tailwind Config ---
const brandColors = {
  primary: '#008080',      // ir-primary (Teal)
  secondary: '#3B3B58',    // ir-secondary (Dark Blue/Purple)
  dark: '#1a202c',         // ir-dark
  light: '#f7fafc',        // ir-light (Email Background)
  surface: '#ffffff',      // White for the content card
};

// --- Logger, Middleware, Rate Limiter (No changes here) ---
const logger = winston.createLogger({/* ... your logger config ... */});
if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({ format: winston.format.simple() }));
}
app.use(cors());
app.use(express.json());
const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 20, standardHeaders: true, legacyHeaders: false });
app.use('/api/send-email', limiter);

// --- Validation Rules (No changes here) ---
const emailValidationRules = [
  body('name').trim().notEmpty().withMessage('Name is required.').escape(),
  body('email').isEmail().withMessage('Please provide a valid email address.').normalizeEmail(),
  body('message').trim().isLength({ min: 10 }).withMessage('Message must be at least 10 characters long.').escape(),
];

// --- The API Endpoint with the NEW Email Template ---
app.post('/api/send-email', emailValidationRules, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, email, message } = req.body;

  try {
    const { data, error } = await resend.emails.send({
      from: `INIFF RECOMBINANT <${process.env.MAIL_FROM_DOMAIN}>`,
      to: process.env.MAIL_TO,
      reply_to: email,
      subject: `New Website Message from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <link rel="preconnect" href="https://fonts.googleapis.com">
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap" rel="stylesheet">
          <style>
            body { font-family: 'Poppins', Arial, sans-serif; }
          </style>
        </head>
        <body style="margin: 0; padding: 0; background-color: ${brandColors.light}; font-family: 'Poppins', Arial, sans-serif;">
          <table border="0" cellpadding="0" cellspacing="0" width="100%">
            <tr>
              <td style="padding: 40px 10px;">
                <table align="center" border="0" cellpadding="0" cellspacing="0" width="600" style="border-collapse: collapse; background-color: ${brandColors.surface}; border-radius: 12px; box-shadow: 0 10px 25px rgba(0,0,0,0.1);">
                  
                  <!-- Header with Logo -->
                  <tr>
                    <td align="center" style="background-color: ${brandColors.secondary}; padding: 30px; border-top-left-radius: 12px; border-top-right-radius: 12px;">
                      <!-- You can replace 'h1' with your actual logo URL -->
                      <h1 style="color: #ffffff; margin: 0; font-family: 'Poppins', sans-serif; font-size: 28px; font-weight: 700;">
                        iR
                      </h1>
                    </td>
                  </tr>

                  <!-- Main Content -->
                  <tr>
                    <td style="padding: 40px 30px;">
                      <h2 style="color: ${brandColors.dark}; font-family: 'Poppins', sans-serif; font-size: 22px; margin: 0 0 20px 0;">New Contact Form Submission</h2>
                      <p style="color: #555555; font-size: 16px; line-height: 1.6; margin: 0 0 30px 0;">You've received a new message from the website contact form.</p>
                      
                      <table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;">
                        <tr>
                          <td style="padding: 12px 0; border-bottom: 1px solid #eeeeee; font-weight: 500; color: ${brandColors.secondary};">Name:</td>
                          <td style="padding: 12px 0; border-bottom: 1px solid #eeeeee; color: ${brandColors.dark};">${name}</td>
                        </tr>
                        <tr>
                          <td style="padding: 12px 0; border-bottom: 1px solid #eeeeee; font-weight: 500; color: ${brandColors.secondary};">Email:</td>
                          <td style="padding: 12px 0; border-bottom: 1px solid #eeeeee;">
                            <a href="mailto:${email}" style="color: ${brandColors.primary}; text-decoration: none; font-weight: 500;">${email}</a>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 12px 0; vertical-align: top; font-weight: 500; color: ${brandColors.secondary};">Message:</td>
                          <td style="padding: 12px 0;">
                            <p style="color: ${brandColors.dark}; margin: 0; line-height: 1.7;">${message}</p>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  <!-- Footer -->
                  <tr>
                    <td style="background-color: ${brandColors.light}; padding: 20px 30px; text-align: center; border-bottom-left-radius: 12px; border-bottom-right-radius: 12px;">
                      <p style="color: #999999; font-size: 12px; margin: 0;">This is an automated notification from iniffrecombinant.com</p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
    });

    if (error) {
      logger.error('Resend API Error:', { error });
      return res.status(400).json({ error: 'Failed to send email.' });
    }
    
    res.status(200).json({ message: 'Email sent successfully!', data });

  } catch (exception) {
    logger.error('Server Exception:', { exception });
    res.status(500).json({ error: 'An internal server error occurred.' });
  }
});

app.listen(PORT, () => {
  logger.info(`Server is running on port ${PORT}`);
});