const express = require("express");
const Order = require("../models/Order");

const router = express.Router();

router.post("/place-order", async(req, res) => {
    console.log("Received place-order request");
    try {
        const { orderId, userId, items, totalAmount, discount, finalAmount, paymentStatus } = req.body;

        const newOrder = new Order({
            orderId,
            userId,
            items,
            totalAmount,
            discount,
            finalAmount,
            paymentStatus,
        });

        await newOrder.save();
        res.status(201).json({ success: true, message: "Order placed successfully!", order: newOrder });
    } catch (error) {
        console.error("Order placement error:", error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
});


router.get("/:orderId", async(req, res) => {
    try {
        const order = await Order.findOne({ orderId: req.params.orderId });
        if (!order) {
            return res.status(404).json({ success: false, message: "Order not found" });
        }
        res.json({ success: true, order });
    } catch (error) {
        console.error("Error fetching order:", error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
});

module.exports = router;