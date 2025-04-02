const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");

// Route to handle contact form submission
router.post("/", async(req, res) => {
    try {
        const { name, email, message } = req.body;

        // Create a new contact message
        const newMessage = new Contact({
            name,
            email,
            message,
        });

        await newMessage.save(); // Save to MongoDB
        res.status(201).json({ success: true, message: "Message sent successfully" });
    } catch (error) {
        res.status(500).json({ success: false, message: "Error saving message", error });
    }
});

module.exports = router;