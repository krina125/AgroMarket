const express = require("express");
const Product = require("../models/Product"); // Ensure you have this model
const router = express.Router();

// @route   POST /api/products
// @desc    Add new product
router.post("/", async(req, res) => {
    try {
        const product = new Product(req.body); // Creating a new product with request data
        await product.save();
        res.status(201).json({ message: "Product added successfully", product });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;


// Fetch All Products (Optional)
router.get("/", async(req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ msg: "Server error" });
    }
});

module.exports = router;