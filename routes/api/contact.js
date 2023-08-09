const express = require('express');
const router = express.Router();
const Contact = require('../../models/Contact.jsx'); // Import the Contact model
const nodemailer = require('nodemailer'); // Import nodemailer
// Import your Gmail API module here (assuming you have it integrated)
const gmailApi = require('../../gmailApi.js');

const transporter = nodemailer.createTransport({
  service: 'Gmail', 
  auth: {
    user: process.env.EMAIL_USER, // Use environment variables
    pass: process.env.EMAIL_PASSWORD,
  },
});

router.post('/', async (req, res) => {
  try {
    const formData = req.body; // Form data sent from the frontend

    // Create a new Contact instance using the model
    const newContact = new Contact({
      name: formData.name,
      number: formData.number,
      email: formData.email,
      message: formData.message,
    });

    // Save the new contact to the database
    await newContact.save();

    // Use the gmailApi module to send the email (assuming you have Gmail API integrated)
    const emailResponse = await gmailApi.sendEmail({
      to: formData.email,
      subject: 'Subject of the email',
      text: `Message: ${formData.message}`,
    });

    console.log('Email sent:', emailResponse);

    res.status(201).json({ success: true, message: 'Form data saved and email sent' });
  } catch (error) {
    console.error('Error saving form data:', error);
    res.status(500).json({ success: false, message: 'Error saving form data' });
  }
});

module.exports = router;
