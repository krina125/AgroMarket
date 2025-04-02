const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    orderId: String,
    userId: mongoose.Schema.Types.ObjectId, // Reference to the user placing the order
    items: [{
        name: String,
        price: Number,
        quantity: Number,
        image: String,
    }, ],
    totalAmount: Number,
    discount: Number,
    finalAmount: Number,
    paymentStatus: String, // "pending", "successful", "failed"
    status: { type: String, default: "confirmed" }, // Initial status
    orderDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Order", orderSchema);