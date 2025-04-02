import React from "react";
import { Camera, X, Info, Calendar, Image as ImageIcon } from "lucide-react";

const AddDetails = ({ formData, updateFormData, formErrors, setFormErrors }) => {
  const productCategories = [
    { id: 'vegetables', name: 'Vegetables' },
    { id: 'fruits', name: 'Fruits' },
    { id: 'dairy', name: 'Dairy Products' },
    { id: 'grains', name: 'Grains & Pulses' },
    { id: 'spices', name: 'Spices' },
    { id: 'honey', name: 'Honey & Bee Products' },
    { id: 'poultry', name: 'Poultry & Eggs' },
    { id: 'other', name: 'Other Farm Products' }
  ];

  const handleImageUpload = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const newImages = [...formData.images];
      
      for (let i = 0; i < e.target.files.length; i++) {
        if (newImages.length < 5) {
          const imageUrl = URL.createObjectURL(e.target.files[i]);
          newImages.push(imageUrl);
        }
      }
      
      updateFormData('images', newImages);
      setFormErrors({ ...formErrors, images: '' });
    }
  };
  
  const removeImage = (index) => {
    const newImages = [...formData.images];
    newImages.splice(index, 1);
    updateFormData('images', newImages);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Product Details</h2>

      {/* Product Images */}
      <div className="mb-6">
        <label className="block text-gray-700 font-medium mb-2">
          Product Images <span className="text-red-500">*</span>
        </label>
        <div className="grid grid-cols-5 gap-4">
          {formData.images.map((image, index) => (
            <div
              key={index}
              className="relative h-24 bg-gray-100 rounded-lg overflow-hidden"
            >
              <img
                src={image}
                alt={`Product ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                onClick={() => removeImage(index)}
              >
                <X className="h-3 w-3" />
              </button>
            </div>
          ))}

          {formData.images.length < 5 && (
            <label className="h-24 bg-gray-100 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:bg-gray-200">
              <Camera className="h-6 w-6 text-gray-500 mb-1" />
              <span className="text-xs text-gray-500">Add Photo</span>
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageUpload}
                multiple
              />
            </label>
          )}
        </div>
        <p className="text-xs text-gray-500 mt-2">
          Upload up to 5 high-quality images of your product (Max 5MB each)
        </p>
        {formErrors.images && (
          <p className="text-red-500 text-sm mt-1">{formErrors.images}</p>
        )}
      </div>

      {/* Product Name */}
      <div className="mb-6">
        <label
          htmlFor="productName"
          className="block text-gray-700 font-medium mb-2"
        >
          Product Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="productName"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
          placeholder="e.g., Organic Tomatoes"
          value={formData.productName || ''}
          onChange={(e) => updateFormData('productName', e.target.value)}
          required
        />
      </div>

      {/* Product Category */}
      <div className="mb-6">
        <label
          htmlFor="productCategory"
          className="block text-gray-700 font-medium mb-2"
        >
          Product Category <span className="text-red-500">*</span>
        </label>
        <select
          id="productCategory"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
          value={formData.productType || ''}
          onChange={(e) => {
            updateFormData('productType', e.target.value);
            setFormErrors({ ...formErrors, productType: "" });
          }}
          required
        >
          <option value="">Select a category</option>
          {productCategories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
        {formErrors.productType && (
          <p className="text-red-500 text-sm mt-1">{formErrors.productType}</p>
        )}
      </div>

      {/* Organic Certification */}
      <div className="mb-6">
        <div className="flex items-center">
          <label htmlFor="isOrganic" className="text-gray-700 font-medium mr-4">
            Is this product organic?
          </label>
          <div className="relative inline-block w-10 mr-2 align-middle select-none">
            <input
              type="checkbox"
              id="isOrganic"
              checked={formData.isOrganic || false}
              onChange={() => updateFormData('isOrganic', !formData.isOrganic)}
              className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
            />
            <label
              htmlFor="isOrganic"
              className={`toggle-label block overflow-hidden h-6 rounded-full cursor-pointer ${
                formData.isOrganic ? "bg-green-500" : "bg-gray-300"
              }`}
            ></label>
          </div>
          <span
            className={`text-sm ${
              formData.isOrganic ? "text-green-600" : "text-gray-500"
            }`}
          >
            {formData.isOrganic ? "Yes" : "No"}
          </span>
        </div>
        {formData.isOrganic && (
          <div className="mt-3 bg-green-50 p-3 rounded-lg">
            <div className="flex items-start">
              <Info className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
              <div>
                <p className="text-sm text-green-800">
                  If your product is certified organic, please be prepared to
                  provide certification details in the next step.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Product Description */}
      <div className="mb-6">
        <label
          htmlFor="productDescription"
          className="block text-gray-700 font-medium mb-2"
        >
          Product Description <span className="text-red-500">*</span>
        </label>
        <textarea
          id="productDescription"
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
          placeholder="Describe your product in detail. Include information about quality, growing methods, taste, etc."
          value={formData.productDescription || ''}
          onChange={(e) => updateFormData('productDescription', e.target.value)}
          required
        ></textarea>
        <p className="text-xs text-gray-500 mt-2">Minimum 50 characters</p>
      </div>

      {/* Harvesting Details */}
      <div className="mb-6">
        <label
          htmlFor="harvestDate"
          className="block text-gray-700 font-medium mb-2"
        >
          Harvest Date
        </label>
        <div className="flex items-center">
          <Calendar className="h-5 w-5 text-gray-400 mr-2" />
          <input
            type="date"
            id="harvestDate"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
            value={formData.harvestDate || ''}
            onChange={(e) => updateFormData('harvestDate', e.target.value)}
          />
        </div>
        <p className="text-xs text-gray-500 mt-2">
          When was this product harvested? (Leave blank for continuous harvest)
        </p>
      </div>
    </div>
  );
};

export default AddDetails;