const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const Buyer = require("../models/Buyer");
const sendWelcomeEmail = require("../emailService");
// @route   POST /api/auth/register
// @desc    Register a new user using phone number
// @access  Public
router.post('/register', async(req, res) => {
    console.log('Received registration data:', req.body);

    const { name, phone, password, location, farmType, email } = req.body;

    if (!name || !phone || !password || !email || !location || !farmType) {
        console.log("Missing fields:", { name, phone, password, location, farmType, email });
        return res.status(400).json({ msg: 'All fields are required' });
    }

    try {
        let user = await User.findOne({ phone });
        if (user) {
            console.log("User already exists with phone:", phone);
            return res.status(409).json({ msg: 'User already exists with this phone number' });
        }

        user = new User({
            name,
            phone,
            email,
            password,
            location,
            farmType,
        });

        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);

        await user.save();
        console.log("User registered successfully:", user.phone);
        // Send Welcome Email
        const emailResponse = await sendWelcomeEmail(email, name);

        res.status(201).json({ msg: 'User registered successfully' });
    } catch (err) {
        console.error("Server error:", err.message);
        res.status(500).json({ msg: 'Server error' });
    }
});

// @route   POST /api/auth/login
// @desc    Authenticate user using phone number & password
// @access  Public
router.post('/login', async(req, res) => {
    const { phone, password } = req.body;

    if (!phone || !password) {
        return res.status(400).json({ msg: 'Phone number and password are required' });
    }

    try {
        let user = await User.findOne({ phone });
        if (!user) {
            return res.status(400).json({ msg: 'Invalid phone number or password' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ msg: 'Invalid phone number or password' });
        }

        const payload = {
            user: {
                id: user.id,
                phone: user.phone,
                name: user.name
            },
        };

        jwt.sign(
            payload,
            process.env.JWT_SECRET, { expiresIn: '1h' },
            (err, token) => {
                if (err) throw err;
                res.json({ token, msg: 'Login successful', user: { name: user.name, phone: user.phone } });
            }
        );
    } catch (err) {
        console.error("Login error:", err.message);
        res.status(500).json({ msg: 'Server error' });
    }
});

router.post("/register-buyer", async(req, res) => {
    console.log("Received Buyer Registration Data:", req.body); // Debugging log

    const { name, email, phone, location, businessType, password } = req.body;

    // Check if all required fields are present
    if (!name || !email || !phone || !location || !businessType || !password) {
        console.log("Missing fields:", { name, email, phone, location, businessType, password }); // Debugging log
        return res.status(400).json({ msg: "All fields are required" });
    }

    try {
        // Check if buyer already exists
        let buyer = await Buyer.findOne({ email });
        if (buyer) {
            console.log("Buyer already exists:", email); // Debugging log
            return res.status(409).json({ msg: "Buyer already exists" });
        }

        // Create new buyer instance
        buyer = new Buyer({
            name,
            email,
            phone,
            location,
            businessType,
            password, // Will be hashed below
        });

        // Hash the password before saving
        const salt = await bcrypt.genSalt(10);
        buyer.password = await bcrypt.hash(password, salt);

        // Save buyer to database
        await buyer.save();
        console.log("Buyer registered successfully:", buyer.email); // Debugging log

        res.status(201).json({ msg: "Buyer registered successfully" });
    } catch (err) {
        console.error("Server error:", err.message);
        res.status(500).json({ msg: "Server error" });
    }
});

module.exports = router;