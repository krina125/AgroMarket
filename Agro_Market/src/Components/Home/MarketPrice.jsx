import React from 'react'
import { useState } from "react";
import { marketPrices } from '../../constant';
const MarketPrice = () => {
    const [search, setSearch] = useState("");

    const filteredPrices = marketPrices.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );

    
  return (
    <>
    <div className='my-20'>
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Market Prices</h1>

      <input
        type="text"
        placeholder="Search for a crop..."
        className="w-full border p-2 mb-4 rounded-md"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-3 text-left">Crop</th>
              <th className="border p-3 text-left">Category</th>
              <th className="border p-3 text-left">Price (₹)</th>
              <th className="border p-3 text-left">Unit</th>
              <th className="border p-3 text-left">Location</th>
            </tr>
          </thead>
          <tbody>
            {filteredPrices.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="border p-3">{item.name}</td>
                <td className="border p-3">{item.category}</td>
                <td className="border p-3">₹{item.price}</td>
                <td className="border p-3">{item.unit}</td>
                <td className="border p-3">{item.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
    </>
  )
}

export default MarketPrice