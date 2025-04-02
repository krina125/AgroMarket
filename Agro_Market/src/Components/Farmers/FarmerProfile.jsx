import React from 'react';

const FarmerProfile = () => {
  const farmer = {
    name: 'John Doe',
    location: 'Springfield, USA',
    farmName: 'Doe Family Farms',
    farmSize: '150 acres',
    crops: ['Corn', 'Wheat', 'Soybeans'],
    profileImage: 'https://via.placeholder.com/150',
    bio: 'John has been farming for over 20 years, specializing in sustainable agriculture practices.',
    contact: {
      phone: '(555) 123-4567',
      email: 'john.doe@example.com',
    },
  };

  return (
    <div className="max-w-4xl mx-auto my-30 p-6 bg-white shadow-md rounded-lg">
      <div className="flex flex-col md:flex-row items-center md:items-start">
        <img
          src={farmer.profileImage}
          alt={`${farmer.name}'s profile`}
          className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover border-4 border-green-500"
        />
        <div className="md:ml-6 mt-4 md:mt-0 text-center md:text-left">
          <h2 className="text-2xl font-bold text-gray-800">{farmer.name}</h2>
          <p className="text-gray-600">{farmer.farmName}</p>
          <p className="text-gray-600">{farmer.location}</p>
          <p className="mt-2 text-gray-700">{farmer.bio}</p>
        </div>
      </div>
      <div className="mt-6">
        <h3 className="text-xl font-semibold text-gray-800">Farm Details</h3>
        <p className="text-gray-700">Farm Size: {farmer.farmSize}</p>
        <p className="text-gray-700">Crops:</p>
        <ul className="list-disc list-inside text-gray-700">
          {farmer.crops.map((crop, index) => (
            <li key={index}>{crop}</li>
          ))}
        </ul>
      </div>
      <div className="mt-6">
        <h3 className="text-xl font-semibold text-gray-800">Contact Information</h3>
        <p className="text-gray-700">Phone: {farmer.contact.phone}</p>
        <p className="text-gray-700">Email: {farmer.contact.email}</p>
      </div>
    </div>
  );
};

export default FarmerProfile;
