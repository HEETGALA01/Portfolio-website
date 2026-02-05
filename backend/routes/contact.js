import express from 'express';
import nodemailer from 'nodemailer';
import { body, validationResult } from 'express-validator';

const router = express.Router();

// Email transporter configuration
const createTransporter = () => {
  return nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE || 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });
};

// Validation rules
const contactValidation = [
  body('name').trim().isLength({ min: 2 }).withMessage('Name must be at least 2 characters'),
  body('email').isEmail().normalizeEmail().withMessage('Invalid email address'),
  body('subject').trim().isLength({ min: 3 }).withMessage('Subject must be at least 3 characters'),
  body('message').trim().isLength({ min: 10 }).withMessage('Message must be at least 10 characters'),
];

// POST /api/contact - Send contact form email
router.post('/', contactValidation, async (req, res) => {
  try {
    // Validate input
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array()
      });
    }

    const { name, email, subject, message } = req.body;

    // Check if email credentials are configured
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
      console.log('📧 Email received (Email service not configured):', { name, email, subject });
      return res.status(200).json({
        success: true,
        message: 'Message received! (Demo mode - email service not configured)'
      });
    }

    // Create email transporter
    const transporter = createTransporter();

    // Email to owner
    const mailToOwner = {
      from: `"Portfolio Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #f5f5f5;">
          <div style="background: linear-gradient(135deg, #0ea5e9, #8b5cf6); padding: 30px; border-radius: 10px 10px 0 0;">
            <h2 style="color: white; margin: 0;">New Contact Form Submission</h2>
          </div>
          <div style="background: white; padding: 30px; border-radius: 0 0 10px 10px;">
            <h3 style="color: #333; margin-top: 0;">From: ${name}</h3>
            <p style="color: #666; margin: 10px 0;"><strong>Email:</strong> ${email}</p>
            <p style="color: #666; margin: 10px 0;"><strong>Subject:</strong> ${subject}</p>
            <div style="margin-top: 20px; padding: 20px; background: #f9f9f9; border-left: 4px solid #0ea5e9; border-radius: 4px;">
              <p style="color: #333; line-height: 1.6; margin: 0;">${message}</p>
            </div>
            <p style="color: #999; font-size: 12px; margin-top: 30px; text-align: center;">
              This email was sent from your portfolio contact form
            </p>
          </div>
        </div>
      `
    };

    // Auto-reply to sender
    const mailToSender = {
      from: `"${process.env.OWNER_NAME || 'Portfolio'}" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `Thank you for contacting me!`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #f5f5f5;">
          <div style="background: linear-gradient(135deg, #0ea5e9, #8b5cf6); padding: 30px; border-radius: 10px 10px 0 0;">
            <h2 style="color: white; margin: 0;">Thank You for Reaching Out!</h2>
          </div>
          <div style="background: white; padding: 30px; border-radius: 0 0 10px 10px;">
            <p style="color: #333; line-height: 1.6;">Hi ${name},</p>
            <p style="color: #333; line-height: 1.6;">
              Thank you for your message! I've received your inquiry and will get back to you as soon as possible.
            </p>
            <p style="color: #333; line-height: 1.6;">
              In the meantime, feel free to check out my portfolio and connect with me on social media.
            </p>
            <div style="margin: 30px 0; padding: 20px; background: #f9f9f9; border-radius: 4px;">
              <p style="color: #666; margin: 0;"><strong>Your Message:</strong></p>
              <p style="color: #333; line-height: 1.6; margin-top: 10px;">${message}</p>
            </div>
            <p style="color: #333; line-height: 1.6;">
              Best regards,<br>
              <strong>${process.env.OWNER_NAME || 'Heet'}</strong>
            </p>
            <p style="color: #999; font-size: 12px; margin-top: 30px; text-align: center; border-top: 1px solid #eee; padding-top: 20px;">
              This is an automated response. Please do not reply to this email.
            </p>
          </div>
        </div>
      `
    };

    // Send emails
    await transporter.sendMail(mailToOwner);
    await transporter.sendMail(mailToSender);

    res.status(200).json({
      success: true,
      message: 'Message sent successfully! I\'ll get back to you soon.'
    });
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to send message. Please try again later.',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

export default router;
