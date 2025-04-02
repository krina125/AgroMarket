import React from 'react'
import { FaSeedling, FaTruck, FaHandshake, FaWarehouse, FaShoppingBasket, FaClipboardCheck, FaChartLine, FaUsers, FaMoneyBillWave } from "react-icons/fa";
import { Navbar, Footer } from "../Components/Home/Navbar";

const services = [
    {
      icon: <FaSeedling className="text-green-600 text-5xl mb-3" />,
      title: "Direct Farmer-to-Consumer Sales",
      description: "Eliminating middlemen to ensure fair prices for farmers and fresh produce for consumers.",
    },
    {
      icon: <FaTruck className="text-green-600 text-5xl mb-3" />,
      title: "Efficient Logistics & Delivery",
      description: "Seamless farm-to-home delivery ensuring fresh and organic produce reaches consumers faster.",
    },
    {
      icon: <FaHandshake className="text-green-600 text-5xl mb-3" />,
      title: "Fair Trade & Pricing",
      description: "Providing farmers with the best market rates and fair compensation for their hard work.",
    },
    {
      icon: <FaWarehouse className="text-green-600 text-5xl mb-3" />,
      title: "Smart Storage Solutions",
      description: "Reducing post-harvest losses with modern storage facilities and cold chain logistics.",
    },
    {
      icon: <FaShoppingBasket className="text-green-600 text-5xl mb-3" />,
      title: "E-Marketplace for Agro Products",
      description: "Empowering farmers to list and sell their products online with ease.",
    },
    {
        icon: <FaChartLine className="text-green-600 text-5xl mb-3" />,
        title: "Real-Time Price Discovery",
        description: "With our smart pricing tool, farmers can access real-time market rates for their produce."  
    },
    {
        icon: < FaClipboardCheck  className="text-green-600 text-5xl mb-3" />,
        title: "Quality Assurance & Standardization",
        description: "Empowering farmers to list and sell their products online with ease.",  
    },
    {
        icon: <FaUsers className="text-green-600 text-5xl mb-3" />,
        title: "Community & Networking",
        description: "Join a community of farmers, and buyers. Share knowledge, and learn from industry experts through our platform.",  
    },
    {
        icon: <FaMoneyBillWave  className="text-green-600 text-5xl mb-3" />,
        title: "Financial Assistance & Digital Payments",
        description: "We provide secure digital payment solutions, reducing cash dependency.",  
    },
  ];

function Services() {

    
  return (
   <>
   <Navbar/>
      <div className='container text-center bg-white'>
        <div className=" max-w-6xl mx-auto py-10">
            <h2 className="text-4xl font-bold text-green-600 mb-6">Our Services</h2>
            <p className="text-black mb-8">
              We bridge the gap between farmers and consumers through innovative agricultural solutions.
            </p>
    
            <div className="grid md:grid-cols-3 gap-8 px-6">
              {services.map((service, index) => (
                <div key={index} className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300">
                  <div className="flex justify-center">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-black mt-3">{service.title}</h3>
                  <p className="text-gray-600 mt-2">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      <Footer/>
   </>
  )
}

export default Services