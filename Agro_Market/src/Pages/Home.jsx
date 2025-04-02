import React from "react";
import "/src/index.css";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import { Footer, Navbar } from "../Components/Home/Navbar";
import "../index.css";
import { useEffect, useCallback } from "react";
import { useLocation } from "react-router-dom";
import {
  Bot,
  Search,
  Tractor,
  Wheat,
  Egg,
  Leaf,
  ChevronRight,
  TrendingUp,
  ShoppingCart,
  Store,
  Truck,
  DollarSign,
  Star,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react";
import { TbMessageChatbotFilled } from "react-icons/tb";
import Login from "../Components/Home/Login";
import { useState } from "react";
import RegisterFarmer from "../Components/Home/RegisterFarmer";
import RegisterBuyer from "../Components/Home/RegisterBuyer";
import { RxFontRoman } from "react-icons/rx";
import ForFarmers from "../Components/Home/ForFarmers";
import ForBuyers from "../Components/Home/ForBuyers";
import ShopNow from "../Components/Home/ShopNow";
import SellNow from "../Components/Home/SellNow";
import CropsAndGrains from "../Components/Home/CropAndGrains";
import Dairy from "../Components/Home/Dairy";
import OrganicProducts from "../Components/Home/OrganicProducts";
import MarketPrice from "../Components/Home/MarketPrice";
import Rent from "../Components/Home/Rent";
import { FeaturedFarmers, FeaturedProducts } from "../Components/Home/Featured";
import ChatPage from "../Components/Home/ChatPage";
import { LiveMarket, State } from "../Components/Home/LiveMarket";
import Hero from "../Components/Home/Hero";
import Chatbot from "../Components/Home/Chatbot";

const Home = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [registerFarmer, setIsRegisterFarmer] = useState(false);
  const [registerBuyer, setIsRegisterBuyer] = useState(false);
  const [forFarmers, setForFarmers] = useState(false);
  const [forBuyers, setForBuyers] = useState(false);
  const [shopNow, setShopNow] = useState(false);
  const [sellNow, setSellNow] = useState(false);
  const [openCrops, setOpenCrops] = useState(false);
  const [isdairy, setIsDairy] = useState(false);
  const [isOrganic, setIsOrganic] = useState(false);
  const [isMarketPrice, setIsMarketPrice] = useState(false);
  const [isRent, setIsRent] = useState(false);
  const [openChat, isOpenChat] = useState(false);
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  // Clean up all states when going home
  const resetAllStates = () => {
    setForFarmers(false);
    setForBuyers(false);
    setShopNow(false);
    setSellNow(false);
    setOpenCrops(false);
    setIsDairy(false);
    setIsOrganic(false);
    setIsMarketPrice(false);
    setIsRent(false);
  };

  const categories = [
    { icon: <Wheat className="h-6 w-6" />, name: "Crops & Grains" },
    { icon: <Egg className="h-6 w-6" />, name: "Dairy & Poultry" },
    { icon: <Leaf className="h-6 w-6" />, name: "Organic Products" },
    { icon: <TrendingUp className="h-6 w-6" />, name: "Market Prices" },
    { icon: <Tractor className="h-6 w-6" />, name: "Rent" },
  ];

  const location = useLocation();

  useEffect(() => {
    // Reset all states when route changes to home
    if (location.pathname === "/") {
      setForFarmers(false);
      setForBuyers(false);
      setShopNow(false);
      setSellNow(false);
    }
  }, [location.pathname]);

  const handleCategoryClick = useCallback((category) => {
    if (category.name === "Crops & Grains") {
      setOpenCrops(true);
    } else if (category.name === "Dairy & Poultry") {
      setIsDairy(true);
    } else if (category.name === "Organic Products") {
      setIsOrganic(true);
    } else if (category.name === "Market Prices") {
      setIsMarketPrice(true);
    } else if (category.name === "Rent") {
      setIsRent(true);
    }
  }, []);

  const navigate = useNavigate();
  return (
    <>
      <Navbar
        onLogin={() => setIsLogin(true)}
        onRegisterFarmer={() => setIsRegisterFarmer(true)}
        onRegisterBuyer={() => setIsRegisterBuyer(true)}
        onForFarmers={() => setForFarmers(true)}
        onForBuyers={() => setForBuyers(true)}
        isAuthenticated={isAuthenticated}
        setIsAuthenticated={setIsAuthenticated}
      />

      {isLogin ? (
        <Login setIsAuthenticated={setIsAuthenticated} onClick={() => setIsLogin(false)}/>
      ) : registerFarmer ? (
        <RegisterFarmer onClick={() => setIsRegisterFarmer(false)}/>
      ) : registerBuyer ? (
        <RegisterBuyer onClick={() => setIsRegisterBuyer(false)}/>
      ) : forFarmers ? (
        <ForFarmers onClick={() => setForFarmers(false)} />
      ) : forBuyers ? (
        <ForBuyers onClick={() => setForBuyers(false)} />
      ) : shopNow ? (
        <ShopNow onClick={() => setShopNow(false)} />
      ) : sellNow ? (
        <SellNow onClick={() => setSellNow(false)} />
      ) : openCrops ? (
        <CropsAndGrains onClick={() => setOpenCrops(false)} />
      ) : isdairy ? (
        <Dairy onClick={() => setIsDairy(false)} />
      ) : isOrganic ? (
        <OrganicProducts onClick={() => setIsOrganic(false)} />
      ) : isMarketPrice ? (
        <MarketPrice onClick={() => setIsMarketPrice(false)} />
      ) : isRent ? (
        <Rent
          onClick={(e) => {
            e.preventDefault();
            setIsRent(false);
          }}
        />
      ) : openChat ? (
        <ChatPage onCloseChat={() => isOpenChat(false)} />
      ) : (
        <>
          <div className="min-h-screen container">
            {/* Hero Section */}
            <Hero setSellNow={setSellNow} setShopNow={setShopNow} />

            {/* Categories Section */}
            <div className="container mx-auto px-4 py-16">
              <h2 className="text-3xl font-bold mb-8">Browse Categories</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                {categories.map((category, index) => (
                  <div
                    key={index}
                    className={`bg-white rounded-xl shadow-sm border p-6 hover:shadow-md transition-shadow cursor-pointer ${
                      openCrops && category.name === "Crops & Grains"
                        ? "border-green-500"
                        : ""
                    }`}
                    onClick={() => handleCategoryClick(category)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        {category.icon}
                        <span className="ml-3 text-lg font-medium">
                          {category.name}
                        </span>
                      </div>
                      <ChevronRight className="h-5 w-5 text-gray-400" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Featured Farmers */}
            <FeaturedFarmers onClick={() => isOpenChat(true)} />

            {/* Live Market Prices */}
            <LiveMarket />

            {/* Featured Products */}
            <FeaturedProducts />

            {/* Stats Section */}
            <State />

            {/* Testimonials */}
            <div className="py-16">
              <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-12 text-center">
                  What People Say
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                    {
                      name: "Rajesh Kumar",
                      role: "Farmer",
                      text: "Selling directly to buyers increased my profits by 40%!",
                    },
                    {
                      name: "Priya Singh",
                      role: "Customer",
                      text: "The best platform for organic & fresh produce!",
                    },
                    {
                      name: "Amit Patel",
                      role: "Farmer",
                      text: "AgroDirect has transformed how I sell my products.",
                    },
                  ].map((testimonial, index) => (
                    <div
                      key={index}
                      className="bg-white p-6 rounded-xl shadow-sm"
                    >
                      <div className="flex items-center mb-4">
                        <Star className="h-5 w-5 text-yellow-400" />
                        <Star className="h-5 w-5 text-yellow-400" />
                        <Star className="h-5 w-5 text-yellow-400" />
                        <Star className="h-5 w-5 text-yellow-400" />
                        <Star className="h-5 w-5 text-yellow-400" />
                      </div>
                      <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
                      <div className="flex items-center">
                        <div className="bg-green-100 w-10 h-10 rounded-full flex items-center justify-center text-green-600 font-bold">
                          {testimonial.name[0]}
                        </div>
                        <div className="ml-3">
                          <p className="font-semibold">{testimonial.name}</p>
                          <p className="text-sm text-gray-600">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
     {/* Floating Chatbot Icon */}
{!isChatbotOpen && (
  <button
    onClick={() => setIsChatbotOpen(true)}
    className="fixed bottom-6 right-6 bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 hover:bg-green-700 flex items-center justify-center z-50"
  >
    <TbMessageChatbotFilled className="h-6 w-6" />
  </button>
)}

      {isChatbotOpen && <Chatbot onClose={() => setIsChatbotOpen(false)} />}

      <Footer />
    </>
  );
};

export default Home;
