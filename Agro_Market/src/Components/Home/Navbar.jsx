import React from "react";
import {
  Search,
  Tractor,
  Wheat,
  Egg,
  Leaf,
  ChevronRight,
  TrendingUp,
  MessageSquare,
  ShoppingCart,
  Store,
  Truck,
  DollarSign,
  Star,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

export const Navbar = ({
  onLogin,
  onRegisterFarmer,
  onRegisterBuyer,
  onForFarmers,
  onForBuyers,
  setForBuyers,
  setForFarmers,
  setShopNow,
  setSellNow,
  forFarmers,
  forBuyers,
  shopNow,
  sellNow,
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleGoHome = (e) => {
    if (forFarmers || forBuyers || shopNow || sellNow) {
      e.preventDefault();
      setForFarmers(false);
      setForBuyers(false);
      setShopNow(false);
      setSellNow(false);
    }
  };

  return (
    <>
      <nav className="flex items-center justify-between sticky top-0 left-0 w-full bg-white shadow-md z-50 px-6 py-4">
        {/* Logo */}
        <div>
          <img
            src="/images/logo.png"
            alt="Logo"
            className="h-12 w-auto md:h-16 max-w-[100px] object-contain"
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
          <NavLink to="/" onClick={handleGoHome} className="text-black hover:text-green-600">
            Home
          </NavLink>
          <NavLink to="/about" className="text-black hover:text-green-600">
            About Us
          </NavLink>
          <NavLink to="/contact" className="text-black hover:text-green-600">
            Contact Us
          </NavLink>
          <NavLink to="/services" className="text-black hover:text-green-600">
            Services
          </NavLink>
          <NavLink to="/farmers" className="text-black hover:text-green-600">
            Farmers
          </NavLink>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <button onClick={onForFarmers} className="text-black px-2 py-1 rounded hover:text-green-400 bg-white cursor-pointer">
            For Farmers
          </button>
          <button onClick={onForBuyers} className="text-black px-2 py-1 rounded hover:text-green-400 bg-white cursor-pointer">
            For Buyers
          </button>
          <button className="text-black px-4 py-2 cursor-pointer hover:text-green-600" onClick={onLogin}>
            Sign In
          </button>

          {/* Register Dropdown */}
          <div className="relative">
            <button
              className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              Register
            </button>
            {dropdownOpen && (
              <div
                className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <button className="block px-4 py-2 w-full text-black hover:bg-gray-100" onClick={onRegisterFarmer}>
                  As a Farmer
                </button>
                <button className="block px-4 py-2 w-full text-black hover:bg-gray-100" onClick={onRegisterBuyer}>
                  As a Buyer
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-black text-2xl">
            {mobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md flex flex-col items-center py-4 space-y-4">
          <NavLink to="/" onClick={handleGoHome} className="text-black hover:text-green-600">
            Home
          </NavLink>
          <NavLink to="/about" className="text-black hover:text-green-600">
            About Us
          </NavLink>
          <NavLink to="/contact" className="text-black hover:text-green-600">
            Contact Us
          </NavLink>
          <NavLink to="/services" className="text-black hover:text-green-600">
            Services
          </NavLink>
          <NavLink to="/farmers" className="text-black hover:text-green-600">
            Farmers
          </NavLink>

          <button onClick={onForFarmers} className="text-black px-2 py-1 rounded hover:text-green-400 bg-white cursor-pointer">
            For Farmers
          </button>
          <button onClick={onForBuyers} className="text-black px-2 py-1 rounded hover:text-green-400 bg-white cursor-pointer">
            For Buyers
          </button>
          <button className="text-black px-4 py-2 cursor-pointer hover:text-green-600" onClick={onLogin}>
            Sign In
          </button>

          {/* Register Dropdown in Mobile */}
          <div className="relative">
            <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600" onClick={() => setDropdownOpen(!dropdownOpen)}>
              Register
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg">
                <button className="block px-4 py-2 w-full text-black hover:bg-gray-100" onClick={onRegisterFarmer}>
                  As a Farmer
                </button>
                <button className="block px-4 py-2 w-full text-black hover:bg-gray-100" onClick={onRegisterBuyer}>
                  As a Buyer
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};
export const Navbar1 = ({
  setIsLogin,
  onLogin,
  onRegisterFarmer,
  onRegisterBuyer,
  onForFarmers,
  onForBuyers,
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <>
      <nav className="flex items-center justify-between sticky top-0 left-0 w-full bg-white shadow-md z-50 px-6">
        <div className="flex items-center">
          <img src="/images/logo.png" alt="Logo" className="h-18 w-auto" />
        </div>
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-6 mr-10">
            <NavLink
              to="/"
              onClick={() => {
                // Reset all states when going home
                setForFarmers(false);
                setForBuyers(false);
                // Add other state resets as needed
              }}
              className="text-black hover:text-green-600"
            >
              Home
            </NavLink>
            <NavLink to="/about" className="text-black hover:text-black">
              About Us
            </NavLink>
            <NavLink to="/contact" className="text-black hover:text-green-600">
              Contact Us
            </NavLink>
            <NavLink to="/services" className="text-black hover:text-green-600">
              Services
            </NavLink>
            <NavLink
              to="/farmers"
              className="text-black hover:text-green-600 mr-30"
            >
              Farmers
            </NavLink>
          </div>

          <button
            type=""
            onClick={onForFarmers}
            className="text-black px-1 py-1 rounded hover:text-green-400 bg-white cursor-pointer"
          >
            For Farmers
          </button>
          <button
            onClick={onForBuyers}
            className="text-black px-1 py-1 rounded hover:text-green-400 bg-white cursor-pointer"
          >
            For Buyers
          </button>
        </div>
      </nav>
    </>
  );
};

export const Footer = () => {
  return (
    <>
      {/* Footer */}
      <footer className="bg-green-600 text-white py-5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <img
                  src="/images/amlogo.png"
                  alt="Logo"
                  className="h-20 w-auto"
                />
              </div>
              <p>
                Connecting farmers directly with buyers for a better
                agricultural future.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 cursor-pointer uppercase">
                Quick Links
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className=" hover:text-black">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className=" hover:text-black">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className=" hover:text-black">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#" className=" hover:text-black">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 cursor-pointer uppercase">
                Contact Us
              </h3>
              <ul className="space-y-2">
                <li>support@agrodirect.com</li>
                <li>+91 123 456 7890</li>
                <li>WhatsApp Support</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 cursor-pointer uppercase">
                Legal
              </h3>
              <ul className="space-y-2 ">
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
                <li>Cookies Policy</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 cursor-pointer uppercase">
                Follow Us
              </h3>
              <div className="flex space-x-4">
                <a href="#" className=" hover:text-black">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className=" hover:text-black">
                  <Twitter className="h-6 w-6" />
                </a>
                <a href="#" className=" hover:text-black">
                  <Instagram className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-white mt-8 pt-8 text-center">
            <p>© 2025 AgroMarket. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};
