import React from "react";
import { DollarSign, Tag, Plus, Truck } from "lucide-react";

const Pricing = ({ formData, updateFormData, formErrors, setFormErrors }) => {
  const unitOptions = [
    { id: "kg", name: "Kilogram (kg)" },
    { id: "g", name: "Gram (g)" },
    { id: "l", name: "Liter (l)" },
    { id: "ml", name: "Milliliter (ml)" },
    { id: "piece", name: "Piece" },
    { id: "dozen", name: "Dozen" },
    { id: "box", name: "Box" },
    { id: "bundle", name: "Bundle" },
  ];

  const handleDeliveryChange = (option) => {
    const newOptions = formData.deliveryOptions.includes(option)
      ? formData.deliveryOptions.filter((o) => o !== option)
      : [...formData.deliveryOptions, option];

    updateFormData("deliveryOptions", newOptions);
    setFormErrors({ ...formErrors, deliveryOptions: "" });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Pricing & Availability
      </h2>

      {/* Pricing */}
      <div className="mb-6">
        <label className="block text-gray-700 font-medium mb-2">
          Pricing <span className="text-red-500">*</span>
        </label>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="price" className="block text-sm text-gray-600 mb-1">
              Price (₹) <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <DollarSign className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />

              <input
                type="text" // Using "text" type for full control
                inputMode="numeric" // Shows numeric keyboard on mobile
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
                placeholder="0"
                value={formData.price ?? ""}
                onChange={(e) => {
                  // Remove all non-digit characters and leading zeros
                  const cleanValue = e.target.value
                    .replace(/[^0-9]/g, "")
                    .replace(/^0+/, "");
                  updateFormData("price", cleanValue || "0"); // Default to "0" if empty
                  setFormErrors({ ...formErrors, price: "" });
                }}
                onBlur={(e) => {
                  // Format the value on blur (e.g., "0050" → "50")
                  if (e.target.value) {
                    updateFormData(
                      "price",
                      parseInt(e.target.value || 0, 10).toString()
                    );
                  }
                }}
                required
              />
            </div>
            {formErrors.price && (
              <p className="text-red-500 text-sm mt-1">{formErrors.price}</p>
            )}
          </div>
          <div>
            <label htmlFor="unit" className="block text-sm text-gray-600 mb-1">
              Unit <span className="text-red-500">*</span>
            </label>
            <select
              id="unit"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
              value={formData.unit || ""}
              onChange={(e) => {
                updateFormData("unit", e.target.value);
                setFormErrors({ ...formErrors, unit: "" });
              }}
              required
            >
              <option value="">Select unit</option>
              {unitOptions.map((unit) => (
                <option key={unit.id} value={unit.id}>
                  {unit.name}
                </option>
              ))}
            </select>
            {formErrors.unit && (
              <p className="text-red-500 text-sm mt-1">{formErrors.unit}</p>
            )}
          </div>
        </div>
      </div>

      {/* Minimum Order */}
      <div className="mb-6">
        <label
          htmlFor="minOrder"
          className="block text-gray-700 font-medium mb-2"
        >
          Minimum Order Quantity
        </label>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <input
              type="number"
              id="minOrder"
              min="1"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
              placeholder="1"
              value={formData.minOrder || ""}
              onChange={(e) => updateFormData("minOrder", e.target.value)}
            />
          </div>
          <div className="flex items-center text-gray-600">
            units (leave blank for no minimum)
          </div>
        </div>
      </div>

      {/* Available Quantity */}
      <div className="mb-6">
        <label
          htmlFor="availableQuantity"
          className="block text-gray-700 font-medium mb-2"
        >
          Available Quantity <span className="text-red-500">*</span>
        </label>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <input
              type="text" // Changed from "number" to "text"
              inputMode="numeric" // Shows numeric keyboard on mobile
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
              placeholder="100"
              value={formData.availableQuantity ?? ""}
              onChange={(e) => {
                // Only allow whole numbers (remove any non-digit characters)
                const value = e.target.value.replace(/\D/g, "");
                updateFormData("availableQuantity", value);
                setFormErrors({ ...formErrors, availableQuantity: "" });
              }}
              required
            />
          </div>
          <div className="flex items-center text-gray-600">
            units available for sale
          </div>
        </div>
        {formErrors.availableQuantity && (
          <p className="text-red-500 text-sm mt-1">
            {formErrors.availableQuantity}
          </p>
        )}
      </div>

      {/* Bulk Pricing */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <label className="text-gray-700 font-medium">
            Bulk Pricing (Optional)
          </label>
          <button
            type="button"
            className="text-green-600 text-sm flex items-center hover:text-green-700"
          >
            <Plus className="h-4 w-4 mr-1" />
            Add Tier
          </button>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="text-sm text-gray-600">
            Offer discounted prices for bulk purchases to attract larger orders.
          </p>
          <div className="mt-3">
            <div className="grid grid-cols-3 gap-4 mb-2">
              <div>
                <label className="block text-xs text-gray-500">
                  Quantity (From)
                </label>
              </div>
              <div>
                <label className="block text-xs text-gray-500">Price (₹)</label>
              </div>
              <div>
                <label className="block text-xs text-gray-500">
                  Discount (%)
                </label>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 items-center">
              <div>
                <input
                  type="number"
                  min="2"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
                  placeholder="10"
                />
              </div>
              <div>
                <input
                  type="number"
                  min="0"
                  step="0.01"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
                  placeholder="55.00"
                />
              </div>
              <div className="flex items-center">
                <input
                  type="number"
                  min="0"
                  max="100"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
                  placeholder="8"
                />
                <span className="ml-2 text-gray-600">%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Delivery Options */}
      <div className="mb-6">
        <label className="block text-gray-700 font-medium mb-2">
          Delivery Options <span className="text-red-500">*</span>
        </label>
        <div className="space-y-3">
          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              checked={formData.deliveryOptions.includes("pickup")}
              onChange={() => handleDeliveryChange("pickup")}
              className="rounded text-green-600 focus:ring-green-500"
            />
            <div>
              <span className="text-gray-700">Pickup from Farm</span>
              <p className="text-xs text-gray-500">
                Buyers can collect directly from your location
              </p>
            </div>
          </label>
          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              checked={formData.deliveryOptions.includes("local")}
              onChange={() => handleDeliveryChange("local")}
              className="rounded text-green-600 focus:ring-green-500"
            />
            <div>
              <span className="text-gray-700">Local Delivery</span>
              <p className="text-xs text-gray-500">
                You'll deliver within your local area
              </p>
            </div>
          </label>
          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              checked={formData.deliveryOptions.includes("shipping")}
              onChange={() => handleDeliveryChange("shipping")}
              className="rounded text-green-600 focus:ring-green-500"
            />
            <div>
              <span className="text-gray-700">Shipping</span>
              <p className="text-xs text-gray-500">
                You'll ship to buyers outside your local area
              </p>
            </div>
          </label>
        </div>
        {formData.deliveryOptions.length === 0 &&
          formErrors.deliveryOptions && (
            <p className="text-red-500 text-sm mt-1">
              {formErrors.deliveryOptions}
            </p>
          )}
      </div>

      {/* Availability Period */}
      <div className="mb-6">
        <label className="block text-gray-700 font-medium mb-2">
          Availability Period
        </label>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="availableFrom"
              className="block text-sm text-gray-600 mb-1"
            >
              Available From
            </label>
            <input
              type="date"
              id="availableFrom"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
              value={formData.availableFrom || ""}
              onChange={(e) => updateFormData("availableFrom", e.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="availableTo"
              className="block text-sm text-gray-600 mb-1"
            >
              Available Until
            </label>
            <input
              type="date"
              id="availableTo"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
              value={formData.availableTo || ""}
              onChange={(e) => updateFormData("availableTo", e.target.value)}
            />
          </div>
        </div>
        <p className="text-xs text-gray-500 mt-2">
          Leave blank if continuously available
        </p>
      </div>
    </div>
  );
};

export default Pricing;
