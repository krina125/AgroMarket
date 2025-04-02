const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');
require("dotenv").config();

// Import route files
const authRoutes = require('./routes/auth');
const productRoutes = require("./routes/Products");
const contactRoutes = require("./routes/contactRoutes");
const paymentRoutes = require("./routes/paymentRoutes");
const placeOrder = require("./routes/orders")
dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI || "mongodb://localhost:27017/agro-market")
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.error(err));

// Define Routes using variables
app.use('/api/auth', authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api", paymentRoutes);
app.use("/api", placeOrder);


// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));