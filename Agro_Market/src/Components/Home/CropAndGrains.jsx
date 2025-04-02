import React from "react";
import { cropsAndGrains } from "../../constant";

const CropsAndGrains = () => {
    return (
      <div className="container mx-auto my-20 px-4 py-6">
        <h1 className="text-3xl font-bold text-green-700 mb-4">Crops & Grains</h1>
        <p className="text-gray-600 mb-6">
          Freshly harvested crops and grains, sourced directly from farmers.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cropsAndGrains.map((crop) => (
            <div
              key={crop.id}
              className="rounded-lg overflow-hidden shadow-md p-4"
            >
              <img
                src={crop.image}
                alt={crop.name}
                className="w-full h-48 object-cover rounded-md"
              />
              <h2 className="text-lg font-semibold mt-2">{crop.name}</h2>
              <p className="text-sm text-gray-600">{crop.location}</p>
              <p className="text-green-700 font-bold">
                ₹{crop.price} / {crop.unit}
              </p>
              <p className="text-sm text-gray-500">
                Farmer: <span className="font-medium">{crop.farmer}</span>
              </p>
              <button className="mt-3 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 w-full">
                Buy Now
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default CropsAndGrains;
  