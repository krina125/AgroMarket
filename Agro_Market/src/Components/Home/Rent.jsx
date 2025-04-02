import React from 'react'
import { rentProducts } from '../../constant';
import { useState } from 'react';
const Rent = () => {
  const [search, setSearch] = useState("");

  const filteredProducts = rentProducts.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
    <div className="container mx-auto my-30 px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Rent Agricultural Equipment & Land</h1>

      <input
        type="text"
        placeholder="Search for rental products..."
        className="w-full border p-2 mb-4 rounded-md"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md p-4">
            <img src={product.image} alt={product.name} className="w-full h-60 object-cover rounded-md mb-4" />
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-gray-600">{product.category} • {product.location}</p>
            <p className="text-green-600 font-bold mt-2">₹{product.price} {product.unit}</p>
            <button className="bg-green-600 text-white px-4 py-2 rounded-lg mt-3 hover:bg-green-700 w-full">
              Rent Now
            </button>
          </div>
        ))}
      </div>
    </div>

    </>
  )
}

export default Rent