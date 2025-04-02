import React from 'react'
import { organicProducts } from '../../constant';
import { Star } from "lucide-react";

const OrganicProducts = () => {
  return (
    <>
   <div className="container mx-auto px-4 my-20 py-8">
      <h1 className="text-3xl font-bold mb-6">Organic Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {organicProducts.map((product) => (
          <div key={product.id} className="bg-white border rounded-lg shadow-sm hover:shadow-md transition p-4">
            <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-md" />
            <h2 className="text-lg font-semibold mt-3">{product.name}</h2>
            <p className="text-gray-600">₹{product.price} / {product.unit}</p>
            <div className="flex items-center mt-2">
              <Star className="h-5 w-5 text-yellow-500" />
              <span className="ml-1 text-gray-700 font-medium">{product.rating}</span>
              <span className="ml-2 text-gray-500 text-sm">({product.reviews} reviews)</span>
            </div>
            <p className="text-gray-600 mt-2">By {product.farmer} - {product.location}</p>
            <button
              className="mt-4 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 w-full"
              onClick={() => navigate(`/product/${product.id}`)}
            >
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>

    </>
  )
}

export default OrganicProducts;