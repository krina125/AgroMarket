const mongoose = require("mongoose");

const BuyerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    location: { type: String, required: true },
    businessType: { type: String, required: true },
    password: { type: String, required: true }, // Hashed password
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Buyer", BuyerSchema);