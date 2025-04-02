import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../cartSlice";
import { products } from "../constant";
import { Navbar, Footer } from "../Components/Home/Navbar";
import {
  ArrowLeft
  } from "lucide-react";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <p className="text-center text-gray-500">Product not found.</p>;
  }

  // Calculate discounted price if discount exists
  const discountedPrice =
    product.discount > 0
      ? product.price - (product.price * product.discount) / 100
      : product.price;

  const handleBuyNow = () => {
    dispatch(addToCart(product));
  };

  return (
    <>
      <Navbar />
      <ArrowLeft className="m-2 text-green-600" size={30} onClick={() => {navigate("/")}}/>
      <div className="max-w-4xl my-20 mx-auto p-6 bg-white shadow-md rounded-lg">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover rounded-md"
        />
        <h1 className="text-2xl font-bold mt-4">{product.name}</h1>
        <p className="text-gray-600">{product.description}</p>
        <p className="text-gray-500 mt-2">
          <strong>Farmer:</strong> {product.farmer} |{" "}
          <strong>Location:</strong> {product.location}
        </p>

        {/* Price Section */}
        <div className="mt-4">
          {product.discount > 0 ? (
            <>
              <p className="text-gray-500 line-through text-lg">
                ₹{product.price} / {product.unit}
              </p>
              <p className="text-green-600 text-2xl font-semibold">
                ₹{discountedPrice} / {product.unit}
              </p>
              <p className="text-red-500 text-sm mt-1">
                {product.discount}% OFF
              </p>
            </>
          ) : (
            <p className="text-green-600 text-xl font-semibold">
              ₹{product.price} / {product.unit}
            </p>
          )}
        </div>

        <p
          className={`text-sm mt-1 ${
            product.stock === "In Stock" ? "text-green-500" : "text-red-500"
          }`}
        >
          {product.stock}
        </p>

        {/* Buy Now */}
        <button
          className="mt-6 w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
          onClick={handleBuyNow}
        >
          Buy Now
        </button>
      </div>

      <div className="flex justify-center mb-4">
        <button
          className="text-center bg-green-600 px-4 py-2 text-white rounded"
          onClick={() => navigate("/cart")}
        >
          Go to Cart
        </button>
      </div>

      <Footer />
    </>
  );
};

export default ProductDetail;
