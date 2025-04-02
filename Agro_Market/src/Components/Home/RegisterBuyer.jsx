import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const BuyerRegistration = Yup.object({
  name: Yup.string().min(3, "Too short").required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  phone: Yup.string().matches(/^\d{10}$/, "Must be 10 digits").required("Required"),
  location: Yup.string().required("Required"),
  businessType: Yup.string().required("Required"),
  password: Yup.string().min(6, "Must be at least 6 characters").required("Required"),
});

const RegisterBuyer = ({onClick}) => {
  const [serverError, setServerError] = useState(null);
  const navigate = useNavigate(); // For navigation after success

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Register as a Buyer</h2>

        <Formik
          initialValues={{
            name: "",
            email: "",
            phone: "",
            location: "",
            businessType: "",
            password: "",
          }}
          validationSchema={BuyerRegistration}
          onSubmit={async (values, { setSubmitting, resetForm }) => {
            setServerError(null);
            try {
              const response = await axios.post("http://localhost:5000/api/auth/register-buyer", values);
              alert(response.data.msg); // Show success message
              onClick();
              resetForm();
              navigate("/"); // Redirect after success
            } catch (error) {
              if (error.response) {
                setServerError(error.response.data.msg || "Registration failed");
              } else {
                setServerError("Server error. Try again later.");
              }
            }
            setSubmitting(false);
          }}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-4">
              <div>
                <label className="block font-medium">Full Name</label>
                <Field type="text" name="name" className="w-full p-2 border rounded" />
                <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />
              </div>

              <div>
                <label className="block font-medium">Email</label>
                <Field type="email" name="email" className="w-full p-2 border rounded" />
                <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
              </div>

              <div>
                <label className="block font-medium">Phone Number</label>
                <Field type="text" name="phone" className="w-full p-2 border rounded" />
                <ErrorMessage name="phone" component="div" className="text-red-500 text-sm" />
              </div>

              <div>
                <label className="block font-medium">Location</label>
                <Field type="text" name="location" className="w-full p-2 border rounded" />
                <ErrorMessage name="location" component="div" className="text-red-500 text-sm" />
              </div>

              <div>
                <label className="block font-medium">Business Type</label>
                <Field as="select" name="businessType" className="w-full p-2 border rounded">
                  <option value="">Select Business Type</option>
                  <option value="Retailer">Retailer</option>
                  <option value="Wholesaler">Wholesaler</option>
                  <option value="Exporter">Exporter</option>
                  <option value="Processor">Processor</option>
                </Field>
                <ErrorMessage name="businessType" component="div" className="text-red-500 text-sm" />
              </div>

              <div>
                <label className="block font-medium">Password</label>
                <Field type="password" name="password" className="w-full p-2 border rounded" />
                <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
              </div>

              {serverError && <div className="text-red-500 text-sm">{serverError}</div>}

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full text-white p-2 rounded ${isSubmitting ? "bg-gray-400" : "bg-green-600 hover:bg-green-700"}`}
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

export default RegisterBuyer;
