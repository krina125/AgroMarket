import React from "react";
import {
  AlertCircle,
  Image as ImageIcon,
  Tag,
  Truck,
  Leaf,
  MapPin,
  BarChart,
  Calendar
} from "lucide-react";

const Review = ({ formData }) => {
  const getCategoryName = (id) => {
    const categories = {
      vegetables: "Vegetables",
      fruits: "Fruits",
      dairy: "Dairy Products",
      grains: "Grains & Pulses",
      spices: "Spices",
      honey: "Honey & Bee Products",
      poultry: "Poultry & Eggs",
      other: "Other Farm Products"
    };
    return categories[id] || id;
  };

  const formatDeliveryOptions = (options) => {
    if (!options || options.length === 0) return "Not specified";
    return options.map(option => {
      switch(option) {
        case 'pickup': return 'Pickup from Farm';
        case 'local': return 'Local Delivery';
        case 'shipping': return 'Shipping';
        default: return option;
      }
    }).join(", ");
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Review & Submit</h2>

      <div className="bg-gray-50 p-6 rounded-lg mb-6">
        <div className="flex items-start">
          <AlertCircle className="h-5 w-5 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
          <p className="text-sm text-gray-700">
            Please review your product listing carefully before submitting. Once
            submitted, your listing will be reviewed by our team before being
            published on the marketplace.
          </p>
        </div>
      </div>

      <div className="space-y-6">
        {/* Product Preview */}
        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <div className="bg-gray-800 text-white px-4 py-2 text-sm font-medium">
            Product Preview
          </div>
          <div className="p-4">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-full md:w-1/3">
                {formData.images?.length > 0 ? (
                  <img 
                    src={formData.images[0]} 
                    alt="Product preview" 
                    className="w-full h-48 object-cover rounded-lg"
                  />
                ) : (
                  <div className="w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center">
                    <ImageIcon className="h-12 w-12 text-gray-400" />
                  </div>
                )}
                <div className="flex mt-2 gap-2">
                  {formData.images?.slice(1, 4).map((image, index) => (
                    <div key={index} className="w-1/3 h-16">
                      <img 
                        src={image} 
                        alt={`Product ${index + 2}`} 
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                  ))}
                  {formData.images?.length > 4 && (
                    <div className="w-1/3 h-16 bg-gray-800 rounded-lg flex items-center justify-center text-white">
                      +{formData.images.length - 4}
                    </div>
                  )}
                </div>
              </div>
              <div className="w-full md:w-2/3">
                <h3 className="text-xl font-semibold mb-2">
                  {formData.productName || "Product Name"}
                </h3>
                
                <div className="flex items-center text-gray-600 text-sm mb-3">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>Your Farm Location</span>
                </div>
                
                <div className="flex items-center mb-3">
                  <span className="text-green-600 font-bold text-xl mr-2">
                    ₹{formData.price || "0.00"}/{formData.unit || "unit"}
                  </span>
                  {formData.isOrganic && (
                    <span className="bg-green-100 text-green-600 text-xs px-2 py-1 rounded-full flex items-center">
                      <Leaf className="h-3 w-3 mr-1" />
                      Organic
                    </span>
                  )}
                </div>
                
                <p className="text-gray-600 text-sm mb-4">
                  {formData.productDescription || "Product description not provided"}
                </p>
                
                <div className="space-y-2 text-sm">
                  <div className="flex items-center text-gray-600">
                    <Tag className="h-4 w-4 mr-2" />
                    <span>Category: {getCategoryName(formData.productType) || "Not specified"}</span>
                  </div>
                  
                  {formData.harvestDate && (
                    <div className="flex items-center text-gray-600">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>Harvest Date: {new Date(formData.harvestDate).toLocaleDateString()}</span>
                    </div>
                  )}
                  
                  <div className="flex items-center text-gray-600">
                    <Truck className="h-4 w-4 mr-2" />
                    <span>Delivery: {formatDeliveryOptions(formData.deliveryOptions)}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-600">
                    <BarChart className="h-4 w-4 mr-2" />
                    <span>Available Quantity: {formData.availableQuantity || "0"} {formData.unit || "units"}</span>
                  </div>
                  
                  {formData.minOrder && (
                    <div className="flex items-center text-gray-600">
                      <Tag className="h-4 w-4 mr-2" />
                      <span>Minimum Order: {formData.minOrder} {formData.unit || "units"}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Terms & Conditions */}
        <div className="mb-6">
          <label className="flex items-start space-x-3">
            <input
              type="checkbox"
              className="rounded text-green-600 focus:ring-green-500 mt-1"
              required
            />
            <div>
              <span className="text-gray-700">
                I agree to the Terms & Conditions
              </span>
              <p className="text-xs text-gray-500">
                By submitting this listing, I confirm that all information
                provided is accurate and I agree to AgroDirect's{" "}
                <a href="#" className="text-green-600 hover:underline">
                  Seller Terms
                </a>{" "}
                and{" "}
                <a href="#" className="text-green-600 hover:underline">
                  Community Guidelines
                </a>
                .
              </p>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Review;