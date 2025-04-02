import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Tractor,
  Upload,
  Camera,
  X,
  Plus,
  HelpCircle,
  Info,
  CheckCircle,
  AlertCircle,
  MapPin,
  Calendar,
  Truck,
  DollarSign,
  Leaf,
  Tag,
  FileText,
  Image as ImageIcon,
  BarChart,
} from "lucide-react";
import AddDetails from "../SellNow/AddDetails";
import Review from "../SellNow/Review";
import Pricing from "../SellNow/Pricing";
import axios from "axios";

const SellNow = ({onClick}) => {
  const [activeStep, setActiveStep] = useState(1);
  const [formData, setFormData] = useState({
    images: [],
    productType: "",
    isOrganic: false,
    productName: "",
    productDescription: "",
    harvestDate: "",
    price: "",
    unit: "",
    minOrder: "",
    availableQuantity: "",
    deliveryOptions: []
  });
  const [formErrors, setFormErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  const updateFormData = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const validateStep = (step) => {
    const errors = {};
  
    if (step === 1) {
      if (formData.images.length === 0) {
        errors.images = "Please upload at least one product image";
      }
      if (!formData.productType) {
        errors.productType = "Please select a product category";
      }
    }
  
    // Add validation for step 2 if needed
    if (step === 2) {
      if (!formData.price) {
        errors.price = "Please enter a price";
      }
      if (!formData.unit) {
        errors.unit = "Please select a unit";
      }
      if (!formData.availableQuantity) {
        errors.availableQuantity = "Please enter available quantity";
      }
    }
  
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(activeStep)) {
      setActiveStep(activeStep + 1);
    }
  };

  const prevStep = () => {
    setActiveStep(activeStep - 1);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (validateStep(activeStep)) {
      try {
        const response = await axios.post(
          "http://localhost:5000/api/products", // Backend API URL
          formData
        );
  
        console.log("Response:", response.data);
        setFormSubmitted(true);
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    }
  };

const resetForm = () => {
  setFormSubmitted(false);
  setActiveStep(1);
  setFormData({
    images: [],
    productType: "",
    isOrganic: false,
    productName: "",
    productDescription: "",
    harvestDate: "",
    price: "",
    unit: "",
    minOrder: "",
    availableQuantity: "",
    deliveryOptions: []
  });
};

  return (
    <>
      <div className="min-h-screen">
    
        {/* Hero Banner */}
        <div
          className="relative h-[250px] bg-cover bg-center"
          style={{
            backgroundImage:
              'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80&w=1470")',
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center max-w-4xl px-4">
              <h1 className="text-4xl font-bold text-white mb-4">
                Sell Your Farm Products
              </h1>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                List your products and connect directly with buyers for better
                prices
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          {/* Steps Progress */}
          <div className="mb-8">
            <div className="flex items-center justify-between max-w-3xl mx-auto">
              {[1, 2, 3].map((step) => (
                <div key={step} className="flex flex-col items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      activeStep === step
                        ? "bg-green-600 text-white"
                        : activeStep > step
                        ? "bg-green-100 text-green-600"
                        : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    {activeStep > step ? (
                      <CheckCircle className="h-6 w-6" />
                    ) : (
                      step
                    )}
                  </div>
                  <span
                    className={`mt-2 text-sm ${
                      activeStep === step
                        ? "text-green-600 font-medium"
                        : "text-gray-600"
                    }`}
                  >
                    {step === 1
                      ? "Product Details"
                      : step === 2
                      ? "Pricing & Availability"
                      : "Review & Submit"}
                  </span>
                </div>
              ))}
            </div>
            <div className="relative max-w-3xl mx-auto mt-4">
              <div className="absolute top-0 left-[10%] right-[10%] h-1 bg-gray-200"></div>
              <div
                className="absolute top-0 left-[10%] h-1 bg-green-600 transition-all duration-300"
                style={{ width: `${(activeStep - 1) * 40}%` }}
              ></div>
            </div>
          </div>

          {formSubmitted ? (
            <div className="max-w-3xl mx-auto bg-white rounded-xl p-8 shadow-sm">
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600">
                  <CheckCircle className="h-8 w-8" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Product Listed Successfully!
                </h2>
                <p className="text-gray-600 mb-6">
                  Your product has been submitted for review. Once approved, it
                  will be visible to buyers on our platform.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link
                    // to="/sell-now"
                    className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
                    onClick={() => {
                      resetForm();
                    }}
                  >
                    List Another Product
                  </Link>
                  <Link
                    // to="/"
                    onClick={() => {
                      onClick(); // This will close the SellNow component
                    }}
                    className="bg-white text-green-600 px-6 py-3 rounded-lg border border-green-600 hover:bg-green-50"
                  >
                    Go to Dashboard
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <div className="max-w-3xl mx-auto bg-white rounded-xl p-8 shadow-sm">
              <form onSubmit={handleSubmit}>
                {/* Step 1: Product Details */}
                {activeStep === 1 && (
                  <AddDetails
                  formData={formData}
                  updateFormData={updateFormData}
                  formErrors={formErrors}
                  setFormErrors={setFormErrors}
                  />
                )}

                {/* Step 2: Pricing & Availability */}
                {activeStep === 2 && (
                  <Pricing
                  formData={formData}
                  updateFormData={updateFormData}
                  formErrors={formErrors}
                  setFormErrors={setFormErrors}
                  />
                )}

                {/* Step 3: Review & Submit */}
                {activeStep === 3 && (
                  <Review  formData={formData}/>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-8">
                  {activeStep > 1 ? (
                    <button
                      type="button"
                      className="bg-white text-gray-600 px-6 py-3 rounded-lg border border-gray-300 hover:bg-gray-50"
                      onClick={prevStep}
                    >
                      Back
                    </button>
                  ) : (
                    <div></div>
                  )}

                  {activeStep < 3 ? (
                    <button
                      type="button"
                      className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
                      onClick={nextStep}
                    >
                      Continue
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700"
                    >
                      Submit Listing
                    </button>
                  )}
                </div>
              </form>
            </div>
          )}

          {/* Seller Tips */}
          <div className="mt-12 max-w-3xl mx-auto">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Tips for Successful Selling
            </h2>
            <div className="bg-blue-50 rounded-xl p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-blue-800 mb-2 flex items-center">
                    <ImageIcon className="h-5 w-5 mr-2" />
                    High-Quality Photos
                  </h3>
                  <p className="text-sm text-gray-600">
                    Clear, well-lit photos from multiple angles help buyers see
                    the quality of your products.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-blue-800 mb-2 flex items-center">
                    <FileText className="h-5 w-5 mr-2" />
                    Detailed Descriptions
                  </h3>
                  <p className="text-sm text-gray-600">
                    Include growing methods, taste profiles, and usage
                    suggestions to attract interested buyers.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-blue-800 mb-2 flex items-center">
                    <DollarSign className="h-5 w-5 mr-2" />
                    Competitive Pricing
                  </h3>
                  <p className="text-sm text-gray-600">
                    Research market rates to ensure your prices are attractive
                    while still profitable.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-blue-800 mb-2 flex items-center">
                    <Truck className="h-5 w-5 mr-2" />
                    Flexible Delivery
                  </h3>
                  <p className="text-sm text-gray-600">
                    Offering multiple delivery options increases your chances of
                    making sales.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style>{`
        .toggle-checkbox:checked {
          right: 0;
          border-color: #10B981;
        }
        .toggle-checkbox:checked + .toggle-label {
          background-color: #10B981;
        }
        .toggle-checkbox {
          right: 0;
          transition: all 0.3s;
        }
        .toggle-label {
          transition: all 0.3s;
          width: 100%;
        }
      `}</style>
      </div>
    </>
  );
};

export default SellNow;
