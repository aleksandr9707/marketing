const express = require('express');
const router = express.Router();
const Contact = require('../../models/Contact'); 

router.post('/', async (req, res) => {
    try {
        const formData = req.body;
        console.log('Received form data:', formData); // Add this line
        const newContact = new Contact(formData);
        await newContact.save();
        console.log('Contact saved:', newContact); // Add this line
        res.status(201).json({ success: true, message: 'Contact saved' });
    } catch (error) {
        console.error('Error saving contact:', error);
        res.status(500).json({ success: false, message: 'Error saving contact' });
    }
});


module.exports = router;