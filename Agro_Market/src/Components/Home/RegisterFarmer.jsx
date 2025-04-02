import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

const FarmerRegistrationSchema = Yup.object().shape({
  name: Yup.string().min(3, "Too short").required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  phone: Yup.string()
    .matches(/^\d{10}$/, "Must be 10 digits")
    .required("Required"),
  location: Yup.string().required("Required"),
  farmType: Yup.string().required("Required"),
  password: Yup.string()
    .min(6, "Must be at least 6 characters")
    .required("Required"),
});

const RegisterFarmer = ({onClick}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">
          Register as a Farmer
        </h2>

        <Formik
          initialValues={{
            name: "",
            email: "",
            phone: "",
            location: "",
            farmType: "",
            password: "",
          }}
          validationSchema={FarmerRegistrationSchema}
          onSubmit={async (values, { setSubmitting, resetForm }) => {
            console.log("Submitting values:", values); // Debugging log
          
            try {
              const response = await axios.post(
                "http://localhost:5000/api/auth/register",
                values,
                {
                  headers: {
                    "Content-Type": "application/json", // Ensure correct header
                  },
                }
              );
              alert("Registration successful!");
              onClick();
              resetForm();
           
            } catch (error) {
              console.error(
                "Registration failed:",
                error.response?.data?.message || error.message
              );
              // Handle specific error message
              if (error.response?.status === 409) {
                alert("User already exists. Try logging in.");
              } else {
                alert(
                  error.response?.data?.message ||
                    "Registration failed. Try again."
                );
              }
            }
            setSubmitting(false);
          }}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-4">
              <div>
                <label className="block font-medium">Full Name</label>
                <Field
                  type="text"
                  name="name"
                  className="w-full p-2 border rounded"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              <div>
                <label className="block font-medium">Email</label>
                <Field
                  type="email"
                  name="email"
                  className="w-full p-2 border rounded"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              <div>
                <label className="block font-medium">Phone Number</label>
                <Field
                  type="text"
                  name="phone"
                  className="w-full p-2 border rounded"
                />
                <ErrorMessage
                  name="phone"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              <div>
                <label className="block font-medium">Location</label>
                <Field
                  type="text"
                  name="location"
                  className="w-full p-2 border rounded"
                />
                <ErrorMessage
                  name="location"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              <div>
                <label className="block font-medium">Farm Type</label>
                <Field
                  as="select"
                  name="farmType"
                  className="w-full p-2 border rounded"
                >
                  <option value="">Select Farm Type</option>
                  <option value="Organic">Organic</option>
                  <option value="Dairy">Dairy</option>
                  <option value="Poultry">Poultry</option>
                  <option value="Grains">Grains</option>
                </Field>
                <ErrorMessage
                  name="farmType"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              <div>
                <label className="block font-medium">Password</label>
                <div className="relative">
                  <Field
                    type={showPassword ? "text" : "password"}
                    name="password"
                    className="w-full p-2 border rounded"
                  />
                  <button
                    type="button"
                    className="absolute right-2 top-2 text-gray-600"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? "🙈" : "👁️"}
                  </button>
                </div>
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700"
              >
                {isSubmitting ? "Registering..." : "Register"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default RegisterFarmer;
