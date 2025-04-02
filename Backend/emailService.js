const nodemailer = require("nodemailer");

// Configure the transporter
const transporter = nodemailer.createTransport({
    service: "gmail", // Use "gmail" or your email provider
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: process.env.EMAIL_USER, // Your email
        pass: process.env.EMAIL_PASS, // Your app password (if using Gmail)
    },
});

// Function to send email
const sendWelcomeEmail = async(toEmail, userName) => {
    try {
        const info = await transporter.sendMail({
            from: `"Agro Market 🌱" <${process.env.EMAIL_USER}>`,
            to: toEmail,
            subject: "Welcome to Agro Market!",
            html: `
                <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6;">
                    <h2 style="color: #000000;">Hello ${userName},</h2>
                    
                    <p>We're thrilled to welcome you to <b>Agro Market</b> – the ultimate platform connecting farmers directly with buyers! 🌍🚜</p>

                    <h3 style="color: #28a745;">What You Can Do:</h3>
                    <ul>
                        <li>🚀 <b>Sell your crops directly</b> without middlemen</li>
                        <li>📈 <b>Get the best prices</b> from verified buyers</li>
                        <li>🛒 <b>Buy farming essentials</b> at competitive rates</li>
                        <li>📍 <b>Track deliveries</b> with GPS integration</li>
                    </ul>

                    <p>To get started, visit your dashboard:</p>
                    <p><a href="https://agromarket.com" style="background: #28a745; color: white; padding: 10px 15px; text-decoration: none; border-radius: 5px;">Go to Dashboard</a></p>

                    <hr>
                    <p>If you have any questions, feel free to reach out to our support team at <b>support@agromarket.com</b>.</p>

                    <p>🌱 <i>Happy farming and trading!</i> 🚜</p>

                    <p>Best regards,<br><b>Agro Market Team</b></p>
                </div>
            `,
        });

        console.log("Email sent:", info.messageId);
        return { success: true, message: "Email sent successfully" };
    } catch (error) {
        console.error("Error sending email:", error);
        return { success: false, message: "Failed to send email", error };
    }
};

module.exports = sendWelcomeEmail;