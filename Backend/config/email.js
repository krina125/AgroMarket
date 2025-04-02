// const nodemailer = require("nodemailer");

// const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS, // Use App Password if using Gmail
//     },
// });

// const sendEmail = async(to, subject, text) => {
//     try {
//         await transporter.sendMail({
//             from: process.env.EMAIL_USER,
//             to,
//             subject,
//             text,
//         });
//         console.log("Email sent successfully!");
//     } catch (error) {
//         console.error("Email sending error:", error);
//     }
// };

// module.exports = sendEmail;