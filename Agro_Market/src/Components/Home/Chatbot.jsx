import React, { useState, useEffect, useRef } from "react";
import { X, Send} from "lucide-react";
import { TbMessageChatbotFilled } from "react-icons/tb";

const staticReplies = {
  "hello": "Hello! How can I assist you today?",
  "hi": "Hi there! What can I do for you?",
  "how are you": "I'm just a bot, but I'm doing great! 😊",
  "what is your name": "I'm AgroBot, your virtual assistant! 🤖",
  "bye": "Goodbye! Have a great day! 🌿",
  "help": "Sure! You can ask me about our marketplace, bidding, or delivery tracking."
};

const Chatbot = ({ onClose }) => {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi! 👋 I'm AgroBot. How can I assist you today?" },
  ]);
  const [newMessage, setNewMessage] = useState("");
  const messagesEndRef = useRef(null);

  // Auto-scroll to latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (newMessage.trim() !== "") {
      const userMsg = { sender: "user", text: newMessage };
      setMessages([...messages, userMsg]);
      setNewMessage("");

      // Get bot response (case-insensitive)
      const lowerCaseMsg = newMessage.toLowerCase();
      const botReply = staticReplies[lowerCaseMsg] || "I'm processing your query...";

      // Mock AI reply after 1 sec
      setTimeout(() => {
        setMessages((prev) => [...prev, { sender: "bot", text: botReply }]);
      }, 1000);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 h-[550px] w-80 bg-white rounded-xl shadow-xl flex flex-col z-50">
      {/* Header */}
      <div className="flex items-center p-4 bg-green-600 text-white shadow-md rounded-t-xl">
        <h1 className="text-base font-semibold mx-auto flex items-center">
          <TbMessageChatbotFilled className="h-5 w-5 mr-2 text-white" />
          AgroBot
        </h1>
        <X className="h-5 w-5 cursor-pointer" onClick={onClose} />
      </div>

      {/* Messages */}
      <div className="flex-1 px-3 py-2 overflow-y-auto w-full space-y-2 bg-transparent">
        {messages.map((msg, index) => (
          <div key={index} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
            <div className={`px-3 py-2 rounded-lg ${msg.sender === "user" ? "bg-green-500 text-white" : "bg-gray-100 text-gray-800"} max-w-[75%] text-sm`}>
              {msg.text}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-3 bg-white flex items-center w-full border-t rounded-b-xl">
        <input
          type="text"
          className="flex-grow border rounded-lg p-2 focus:outline-none text-sm"
          placeholder="Ask me anything..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSend();
          }}
        />
        <button
          className="ml-2 bg-green-600 text-white p-2 rounded-lg flex items-center hover:bg-green-700 transition"
          onClick={handleSend}
        >
          <Send className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
