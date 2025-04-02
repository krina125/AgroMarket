import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Search, ShoppingCart, Store } from "lucide-react";

const heroTexts = [
  "Buy Fresh, Direct from Farmers!🌾",
  "Meet Our Trusted Farmers 🌾",
  "Fresh Harvest, Fair Prices 🍎",
];

const Hero = ({ setSellNow, setShopNow }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % heroTexts.length);
    }, 3000); // Change text every 3 seconds
    return () => clearInterval(interval);
  }, []);

  const sentence = heroTexts[index].split(" "); // Split into words

  return (
    <div
      className="relative h-[600px] bg-cover bg-center"
      style={{
        backgroundImage:
          'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80")',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent flex items-center justify-center">
        <div className="max-w-3xl text-center">
          {/* Word-by-word animation */}
          <motion.h1
            className="text-5xl font-bold text-white mb-6 flex flex-wrap justify-center"
            key={index} // Helps Framer Motion detect text changes
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={{
              visible: { transition: { staggerChildren: 0.15 } },
              hidden: {},
              exit: { opacity: 0 },
            }}
          >
            {sentence.map((word, i) => (
              <motion.span
                key={i}
                className="mr-2"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
                }}
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          <p className="text-xl text-gray-200 mb-8">
            Connect with local farmers, get fresh products at fair prices.
          </p>

          <div className="relative mb-8">
            <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search by product, location, or farmer name..."
              className="w-full pl-12 pr-3 py-3 rounded-lg text-lg text-white bg-gray-800/60"
            />
          </div>
          <div className="flex justify-center space-x-4 mt-6">
            {/* Shop Now Button (Green) */}
            <button
              onClick={() => setShopNow(true)}
              className="px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <ShoppingCart className="w-5 h-5 text-white" />
              Shop Now
            </button>

            {/* Sell Now Button (White) */}
            <button
              onClick={() => setSellNow(true)}
              className="px-6 py-3 bg-white text-green-600 border hover:bg-green-50 font-semibold rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <Store className="w-5 h-5 text-green-600" />
              Sell Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
