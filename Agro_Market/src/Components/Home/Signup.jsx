import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  mobile: Yup.string()
    .matches(/^[6-9]\d{9}$/, "Invalid mobile number")
    .required("Mobile number is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .matches(/[A-Z]/, "Must include an uppercase letter")
    .matches(/[a-z]/, "Must include a lowercase letter")
    .matches(/[0-9]/, "Must include a number")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is required"),
});

const Signup = () => {
  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
         Sign Up
        </h2>
        <Formik
          initialValues={{ name: "",mobile: "",  email: "", password: "", confirmPassword: "" }}
          validationSchema={SignupSchema}
          onSubmit={(values, { setSubmitting }) => {
            console.log(values);
            setSubmitting(false);
          }}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-gray-700">Name</label>
                <Field
                  type="text"
                  name="name"
                  className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-indigo-300"
                />
                <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />
              </div>
              
              
              {/* Mobile */}
              <div>
                <label className="block text-gray-700">Mobile Number</label>
                <Field
                  type="tel"
                  name="mobile"
                  className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-indigo-300"
                />
                <ErrorMessage name="mobile" component="div" className="text-red-500 text-sm" />
              </div>

              {/* Email */}
              <div>
                <label className="block text-gray-700">Email</label>
                <Field
                  type="email"
                  name="email"
                  className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-indigo-300"
                />
                <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
              </div>

              {/* Password */}
              <div>
                <label className="block text-gray-700">Password</label>
                <Field
                  type="password"
                  name="password"
                  className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-indigo-300"
                />
                <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
              </div>

              {/* Confirm Password */}
              <div>
                <label className="block text-gray-700">Confirm Password</label>
                <Field
                  type="password"
                  name="confirmPassword"
                  className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-indigo-300"
                />
                <ErrorMessage name="confirmPassword" component="div" className="text-red-500 text-sm" />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition my-3"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Signing Up..." : "Sign Up"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Signup;
