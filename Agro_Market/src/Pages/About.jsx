import React from "react";
import {
  Search,
  Leaf,
  TrendingUp,
  ShoppingCart,
  Store,
  Truck,
  DollarSign,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react";
import { useState } from "react";
import { Navbar, Footer } from "../Components/Home/Navbar";
const About = () => {
  
  const mission = [
    "✅ Offering farmers a fair and transparent marketplace",
    "✅ Providing consumers with fresh, chemical-free, and locally sourced produce",
    "✅ Reducing post-harvest losses and ensuring sustainable farming practices",
  ];
  return (
    <>
        <Navbar />
      
      <div className="container  px-4 py-6">
        <div className=" max-w-4xl mx-auto">
          {/* Farmer and Consumers */}
          <div className="flex flex-col text-lg font-semibold text-center py-5">
            <h1 className="text-3xl font-bold my-6 uppercase">
              Bridging the Gap Between Farmers and Consumers
            </h1>
            <p className="py-2">
              At Agro Market, we believe in empowering farmers and ensuring
              consumers get fresh, high-quality produce at fair prices. Our
              platform directly connects farmers with buyers, eliminating
              middlemen and reducing unnecessary costs.
            </p>
          </div>

          {/* Our Mission */}
          <div className="flex flex-col text-lg font-semibold py-5">
            <h1 className="text-3xl font-bold text-center my-6 uppercase pt-2">
              Our Mission
            </h1>
            <p>We aim to revolutionize the agricultural supply chain by:</p>
            <ul className="list-disc pl-5 mt-2">
              {mission.map((m, index) => (
                <li key={index} className="py-1">
                  {m}
                </li>
              ))}
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="py-5">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-4 text-center uppercase">
                Why Choose AgroDirect?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    icon: <DollarSign className="h-8 w-8" />,
                    title: "No Middlemen",
                    desc: "Farmers get full profit",
                  },
                  {
                    icon: <Leaf className="h-8 w-8" />,
                    title: "Fresh & Organic",
                    desc: "Directly sourced from farms",
                  },
                  {
                    icon: <TrendingUp className="h-8 w-8" />,
                    title: "Fair Prices",
                    desc: "Buyers pay less, farmers earn more",
                  },
                  {
                    icon: <Truck className="h-8 w-8" />,
                    title: "Fast Delivery",
                    desc: "Track orders in real-time",
                  },
                ].map((benefit, index) => (
                  <div key={index} className="text-center p-6">
                    <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600">{benefit.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* How It Works */}
          <div className=" px-4 py-2">
            <h2 className="text-3xl font-bold mb-12 text-center uppercase">
              How It Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* For Buyers */}
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <h3 className="text-3xl font-semibold mb-6">For Buyers</h3>
                <div className="space-y-6">
                  {[
                    {
                      step: "1",
                      title: "Search & Select Products",
                      icon: <Search className="h-6 w-6" />,
                    },
                    {
                      step: "2",
                      title: "Place Order & Pay Securely",
                      icon: <ShoppingCart className="h-6 w-6" />,
                    },
                    {
                      step: "3",
                      title: "Get Direct Delivery",
                      icon: <Truck className="h-6 w-6" />,
                    },
                  ].map((step, index) => (
                    <div key={index} className="flex items-center">
                      <div className="bg-green-100 w-10 h-10 rounded-full flex items-center justify-center text-green-600 font-bold mr-4">
                        {step.step}
                      </div>
                      <div className="flex items-center">
                        {step.icon}
                        <span className="ml-2">{step.title}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* For Farmers */}
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <h3 className="text-3xl font-semibold mb-6">For Farmers</h3>
                <div className="space-y-6">
                  {[
                    {
                      step: "1",
                      title: "Create Your Store",
                      icon: <Store className="h-6 w-6" />,
                    },
                    {
                      step: "2",
                      title: "List Your Products",
                      icon: <Leaf className="h-6 w-6" />,
                    },
                    {
                      step: "3",
                      title: "Receive Orders & Earn",
                      icon: <DollarSign className="h-6 w-6" />,
                    },
                  ].map((step, index) => (
                    <div key={index} className="flex items-center">
                      <div className="bg-green-100 w-10 h-10 rounded-full flex items-center justify-center text-green-600 font-bold mr-4">
                        {step.step}
                      </div>
                      <div className="flex items-center">
                        {step.icon}
                        <span className="ml-2">{step.title}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Our Focus and Experience */}
          <div className="flex flex-col font-medium text-lg mb-8">
            <h1 className="text-3xl font-bold text-center my-6 uppercase pt-3">
              Our Focus & Experience
            </h1>
            <p>
              Agri Marketplace is a group of experts who leverage their
              knowledge & experience in Farming, Industry Procurement, Digital
              Business, and Disruptive Innovation. We aim at redistributing
              value through the agriculture supply chain, requiring agility,
              reliability, and transparency in all our operations and services.
            </p>
          </div>

          {/* KYC Section */}
          <div className="flex flex-col font-medium text-lg mb-8">
            <h1 className="text-3xl font-bold text-center my-6 uppercase pt-3">
              Know-Your-Customer
            </h1>
            <p>
              Know-Your-Customer (KYC) is the process we use to verify the
              identity and origin of finance of users in our digital
              marketplace, preventing money laundering and ensuring a
              trustworthy network of agricultural buyers and sellers.
            </p>

            <div className="flex flex-col md:flex-row justify-center gap-6 py-6">
              <div className="w-full md:w-1/2 p-6 bg-gray-50 rounded-lg shadow-md">
                <h2 className="text-xl font-bold uppercase pb-2 text-green-600">
                  KYC for Sellers
                </h2>
                <p>
                  Seller accounts are verified by Agro Market and our partners.
                  They review the company's registration document, proof of ID,
                  residence, and proof of company IBAN issued by the seller's
                  bank.
                </p>
              </div>
              <div className="w-full md:w-1/2 p-6 bg-gray-50 rounded-lg shadow-md">
                <h2 className="text-xl font-bold uppercase pb-2 text-green-600">
                  KYC for Buyers
                </h2>
                <p>
                  Buyer accounts are verified similarly to sellers but are only
                  mandatory if the buyer wants to withdraw funds from their Agro
                  Market wallet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default About;
