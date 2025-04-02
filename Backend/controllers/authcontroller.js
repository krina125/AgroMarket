// const User = require("../models/User");
// const sendEmail = require("../config/email");
// const axios = require("axios");

// const generateAIEmailContent = async(name) => {
//     try {
//         const response = await axios.post(
//             "https://api.openai.com/v1/chat/completions", {
//                 model: "gpt-4",
//                 messages: [{ role: "system", content: `Write a welcome email for ${name}.` }],
//             }, {
//                 headers: { Authorization: `Bearer ${process.env.OPENAI_API_KEY}` },
//             }
//         );
//         return response.data.choices[0].message.content;
//     } catch (error) {
//         console.error("AI Email Generation Error:", error);
//         return `Hi ${name}, welcome to our platform!`;
//     }
// };

// const registerUser = async(req, res) => {
//     const { name, email, password } = req.body;

//     try {
//         let user = await User.findOne({ email });
//         if (user) return res.status(400).json({ message: "User already exists" });

//         user = new User({ name, email, password });
//         await user.save();

//         // Generate AI email content
//         const emailContent = await generateAIEmailContent(name);

//         // Send Welcome Email
//         await sendEmail(email, "Welcome to Our Platform!", emailContent);

//         res.status(201).json({ message: "User registered & email sent!" });
//     } catch (error) {
//         res.status(500).json({ error: "Registration failed" });
//     }
// };

// module.exports = { registerUser };