import React from "react";
import { useState } from "react";
import {
  Search,
  Tractor,
  Star,
  MapPin,
  Leaf,
  MessageSquare,
  Phone,
  ChevronRight,
  SlidersHorizontal,
  Filter,
  Award,
  ThumbsUp,
  Users,
} from "lucide-react";
import { Navbar, Footer } from "../Components/Home/Navbar";
import FarmerProfile from "../Components/Farmers/FarmerProfile";
import {farmers} from "../constant"
function Farmers() {
  const [selectedFarmer, setSelectedFarmer] = useState(null);
  const [openProfile, setIsOpenProfile] = useState(false);

 
  return (
    <>
     <Navbar />
    {openProfile ? (
      <FarmerProfile/>
    ):(
    <>
     
      <div className="container my-10">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="w-full md:w-1/4 space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Filters</h2>
              <div className="space-y-4">
                <div>
                  <label className="text-gray-700 font-medium">Location</label>
                  <select className="mt-1 p-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500">
                    <option>All Locations</option>
                    <option>Maharashtra</option>
                    <option>Punjab</option>
                    <option>Gujarat</option>
                    <option>Karnataka</option>
                  </select>
                </div>

                <div>
                  <label className="text-gray-700 font-medium">
                    Product Type
                  </label>
                  <select className="mt-1 p-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500">
                    <option>All Products</option>
                    <option>Vegetables</option>
                    <option>Fruits</option>
                    <option>Grains</option>
                    <option>Dairy</option>
                  </select>
                </div>

                <div>
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      className="rounded text-green-600 focus:ring-green-500"
                    />
                    <span className="text-gray-700">Organic Farmers Only</span>
                  </label>
                </div>

                <div>
                  <label className="text-gray-700 font-medium">Rating</label>
                  <select className="mt-1 p-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500">
                    <option>All Ratings</option>
                    <option>4.5+ Stars</option>
                    <option>4.0+ Stars</option>
                    <option>3.5+ Stars</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="w-full md:w-3/4">
            {/* Sort Bar */}
            <div className="bg-white p-4 rounded-xl shadow-sm mb-6 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <SlidersHorizontal className="h-5 w-5 text-gray-500" />
                <span className="text-gray-700">Sort by:</span>
                <select className="border-0 text-gray-500 focus:ring-0">
                  <option>Top Rated</option>
                  <option>Most Active</option>
                  <option>Experience</option>
                  <option>Location</option>
                </select>
              </div>
              <span className="text-gray-500">{farmers.length} farmers</span>
            </div>

            {/* Farmers Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {farmers.map((farmer) => (
                <div
                  key={farmer.id}
                  className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="relative h-48">
                    <img
                      src={farmer.image}
                      alt={farmer.name}
                      className="w-full h-full object-cover"
                    />
                    {farmer.organic && (
                      <span className="absolute top-4 right-4 bg-green-100 text-green-600 text-xs px-2 py-1 rounded-full flex items-center">
                        <Leaf className="h-3 w-3 mr-1" />
                        Organic Farmer
                      </span>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-semibold">{farmer.name}</h3>
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < Math.floor(farmer.rating)
                                ? "text-yellow-400 fill-current"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                        <span className="ml-2 text-sm text-gray-600">
                          ({farmer.reviews})
                        </span>
                      </div>
                    </div>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-gray-600">
                        <MapPin className="h-4 w-4 mr-2" />
                        {farmer.location}
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Award className="h-4 w-4 mr-2" />
                        {farmer.experience} experience
                      </div>
                    </div>
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-gray-700 mb-2">
                        Available Products:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {farmer.products.map((product, index) => (
                          <span
                            key={index}
                            className="bg-gray-100 text-gray-600 text-sm px-3 py-1 rounded-full"
                          >
                            {product}
                          </span>
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm mb-4">{farmer.bio}</p>
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-sm">
                        <span className="text-green-600 font-semibold">
                          {farmer.activeOrders}
                        </span>
                        <span className="text-gray-600"> active orders</span>
                      </div>
                      <div className="text-sm">
                        <span className="text-green-600 font-semibold">
                          {farmer.totalSales}
                        </span>
                        <span className="text-gray-600"> total sales</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <button className="flex-1 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 flex items-center justify-center">
                        <MessageSquare className="h-4 w-4 mr-2" />
                        Message
                      </button>
                      <button className="flex-1 bg-white text-green-600 px-4 py-2 rounded-lg border border-green-600 hover:bg-green-50 flex items-center justify-center" onClick={() => setIsOpenProfile(true)}>
                        View Profile
                      </button>
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
     <Footer />
    </>
  );
}

export default Farmers;
