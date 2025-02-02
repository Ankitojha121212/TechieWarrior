// const express = require('express');
// const contact = require('../models/contact');

// const router = express.Router();

// router.post('/api/contact', async (req, res) => {
//     try {
//         const { name, email, message, subject } = req.body;

//         // Validation
//         if (!name || !email || !message || !subject) {
//             return res.status(400).json({ error: 'All fields are required' });
//         }

//         // Save to database
//         const newContact = new Contact({ name, email, message, subject });
//         await newContact.save();

//         res.status(201).json({ message: 'Thank you for contacting us! We will get back to you shortly.' });
//     } catch (error) {
//         console.error('Error saving contact:', error);
//         res.status(500).json({ error: 'An error occurred while processing your request.' });
//     }
// });

// module.exports = router;
