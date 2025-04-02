const express = require("express");
const router = express.Router();

router.post("/mock-payment", (req, res) => {
    const { amount, currency } = req.body;

    // Generate a random order ID (Example: ORD123456)
    const orderId = "ORD" + Math.floor(100000 + Math.random() * 900000);

    // Simulating payment processing delay
    setTimeout(() => {
        res.json({
            success: true,
            message: "Payment successful!",
            orderId,
            amount,
            currency
        });
    }, 2000);
});

module.exports = router;