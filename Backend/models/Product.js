const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    images: { type: [String], required: true }, // Array of image URLs
    productType: { type: String, required: true },
    isOrganic: { type: Boolean, default: false },
    productName: { type: String, required: true },
    productDescription: { type: String },
    harvestDate: { type: Date },
    price: { type: Number, required: true },
    unit: { type: String, required: true }, // Example: KG, Litre, etc.
    minOrder: { type: Number },
    availableQuantity: { type: Number, required: true },
    deliveryOptions: { type: [String] }, // Example: ["Pickup", "Home Delivery"]
}, { timestamps: true });

module.exports = mongoose.model("Product", ProductSchema);