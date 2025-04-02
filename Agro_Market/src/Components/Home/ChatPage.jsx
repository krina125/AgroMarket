import React, { useState, useEffect, useRef } from "react";
import { ArrowLeft, SendHorizonal } from "lucide-react";

function ChatPage({ onCloseChat }) {
  const [messages, setMessages] = useState([
    { sender: "farmer", text: "Hello! How can I help you today?" },
  ]);
  const [newMessage, setNewMessage] = useState("");
  const messagesEndRef = useRef(null);

  // Auto-scroll
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (newMessage.trim() !== "") {
      setMessages([...messages, { sender: "user", text: newMessage }]);
      setNewMessage("");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      {/* Chat Box */}
      <div className="flex flex-col w-full max-w-md h-[80vh] bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="flex items-center p-4 bg-green-600 text-white">
          <button onClick={onCloseChat} className="flex items-center hover:text-gray-300">
            <ArrowLeft className="mr-2" /> Back
          </button>
          <h1 className="text-lg font-semibold mx-auto">Chat with Farmer</h1>
        </div>

        {/* Messages */}
        <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex mb-2 ${
                msg.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`px-4 py-2 rounded-2xl text-sm ${
                  msg.sender === "user"
                    ? "bg-green-500 text-white rounded-br-none"
                    : "bg-gray-200 text-gray-800 rounded-bl-none"
                } max-w-[70%]`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 bg-white border-t flex items-center">
          <input
            type="text"
            className="flex-grow border rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            placeholder="Type a message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter") handleSend();
            }}
          />
          <button
            className="ml-3 bg-green-600 text-white p-2 rounded-full hover:bg-green-700 transition"
            onClick={handleSend}
          >
            <SendHorizonal className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChatPage;
