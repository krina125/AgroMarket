import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate for redirection

const LoginSchema = Yup.object().shape({
  mobile: Yup.string()
    .matches(/^[6-9]\d{9}$/, "Invalid mobile number")
    .required("Mobile number is required"),
  // email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .matches(/[A-Z]/, "Must include an uppercase letter")
    .matches(/[a-z]/, "Must include a lowercase letter")
    .matches(/[0-9]/, "Must include a number")
    .required("Password is required"),
});

function Login({ setIsAuthenticated, onClick }) {
  // ✅ Accept as prop
  const navigate = useNavigate(); // ✅ For navigation after login

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Sign In
        </h2>

        <Formik
          initialValues={{ mobile: "", password: "" }}
          validationSchema={LoginSchema}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            // ✅ Added resetForm
            console.log("Logged in:", values);
            onClick();
            setIsAuthenticated(true);
            setSubmitting(false);
            resetForm(); // ✅ Clears the form inputs after submission
            navigate("/");
          }}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-4">
              {/* Mobile Field */}
              <div>
                <label className="block text-gray-700">Mobile Number</label>
                <Field
                  type="tel"
                  name="mobile"
                  className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-indigo-300"
                />
                <ErrorMessage
                  name="mobile"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              {/* Password Field */}
              <div>
                <label className="block text-gray-700">Password</label>
                <Field
                  type="password"
                  name="password"
                  className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-indigo-300"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition my-3"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Signing In..." : "Sign In"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
