import React from "react";
import { useState } from "react";
import { Navbar, Footer } from "../Components/Home/Navbar";
import axios from "axios";
function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post("http://localhost:5000/api/contact", formData);
  
      if (response.status === 201) {
        alert("Message Sent! We will get back to you soon.");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("An error occurred. Please try again later.");
    }
  };
  return (
    <>
      <Navbar />
      <div className="container bg-white">
        <div className="flex flex-col items-center justify-center min-h-screen  p-6 py-10">
          <div className="bg-white shadow-lg rounded-lg p-8 max-w-2xl w-full">
            <h2 className="text-3xl font-bold text-green-600 mb-6 text-center">
              Contact Us
            </h2>
            <p className="text-gray-600 text-center mb-4">
              Have questions? We'd love to hear from you!
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-black font-medium">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="block text-black font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="block text-black font-medium">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 h-32"
                  placeholder="Write your message here..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 text-white p-2 rounded-lg hover:bg-green-600 transition"
              >
                Send Message
              </button>
            </form>

            {/* Contact Details */}
            <div className="mt-6 text-center">
              <p className="text-black font-medium">
                📍 Address: Agro Market, Ahmedabad
              </p>
              <p className="text-black font-medium">
                ✉️ Email: support@agromarket.com
              </p>
              <p className="text-black font-medium">
                📞 Phone: +91 98765 43210
              </p>
            </div>

            {/* Google Map (Optional) */}
            <div className="mt-6">
              <iframe
                title="Google Map"
                className="w-full h-64 rounded-lg mb-2"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14700.835906094663!2d72.5713625122135!3d23.022505829395683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84f4a9edc60b%3A0x1b1fdd4d0c0b5e3e!2sAhmedabad%2C%20Gujarat%2C%20India!5e0!3m2!1sen!2sin!4v1675766894376!5m2!1sen!2sin"
                loading="lazy"
              ></iframe>
              <p>
                Our office is open Monday - Friday, 9 AM - 6 PM. Walk-ins are
                welcome!
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
