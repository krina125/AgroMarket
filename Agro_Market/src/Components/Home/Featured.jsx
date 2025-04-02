import React from "react";
import { HomeFarmer, HomeProducts } from "../../constant";
import { MessageSquare } from "lucide-react";
import { useNavigate } from "react-router-dom"; 


export const FeaturedFarmers = ({ onClick }) => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Featured Farmers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {HomeFarmer.map((farmer, index) => (
            <div
              key={farmer.id || index}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <img
                src={farmer.image}
                alt="Farmer"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Green Valley Farm
                </h3>
                <p className="text-gray-600 mb-4">
                  {farmer.products.join(", ")} • {farmer.rating} ⭐
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-green-600 font-medium">
                    20+ Products
                  </span>
                  <button
                    className="flex items-center text-green-600 hover:text-green-700"
                    onClick={(e) => {
                      e.preventDefault();
                      onClick();
                    }}
                  >
                    <MessageSquare className="h-4 w-4 mr-1" />
                    Chat Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const FeaturedProducts = () => {
    const navigate = useNavigate(); 
  return (
    <>
      <div className=" px-4 py-16 bg-gray-100">
        <h2 className="text-3xl font-bold mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {HomeProducts.map((product, index) => (
            <div
              key={product.id || index}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-2">📍 {product.location}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-green-600">
                    {product.price}/{product.unit}
                  </span>
                  <button
                    className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
                    onClick={() => navigate(`/product/${product.id}`)}
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};