import React, { useState } from "react";
import {
  Tractor,
  CheckCircle,
  ArrowRight,
  DollarSign,
  ShieldCheck,
  Globe,
  BookOpen,
  Truck,
  Star,
  HelpCircle,
  BarChart3,
} from "lucide-react";

const ForFarmers = ({ onClick }) => {
  const benefits = [
    {
      icon: <DollarSign className="h-8 w-8" />,
      title: "Better Prices",
      description:
        "Sell directly to buyers and earn up to 40% more by eliminating middlemen.",
    },
    {
      icon: <ShieldCheck className="h-8 w-8" />,
      title: "Secure Payments",
      description:
        "Get paid directly to your bank account with our secure payment system.",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Market Access",
      description:
        "Reach thousands of buyers across the country, beyond your local market.",
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Training & Support",
      description:
        "Access free training on sustainable farming practices and pricing strategies.",
    },
    {
      icon: <Truck className="h-8 w-8" />,
      title: "Logistics Help",
      description:
        "We provide support with transportation and delivery for hassle-free trade.",
    },
  ];

  const steps = [
    {
      number: 1,
      title: "Register",
      description:
        "Create your account and verify your farm details with simple documentation.",
    },
    {
      number: 2,
      title: "List Produce",
      description:
        "Add your available crops, set fair prices, and showcase your products with photos.",
    },
    {
      number: 3,
      title: "Sell & Earn",
      description:
        "Connect with buyers, confirm deals, and receive payments securely in your account.",
    },
  ];

  const testimonials = [
    {
      quote:
        "Since joining AgroDirect, my profits have increased by 35%. I now have direct access to restaurants and retail buyers.",
      farmer: "Rajesh Patel",
      location: "Wheat Farmer, Punjab",
      image:
        "https://images.unsplash.com/photo-1595034580074-2da817e48bd1?auto=format&fit=crop&q=80&w=500",
    },
    {
      quote:
        "The platform helped me understand market pricing better. Now I can sell my organic vegetables at their true value.",
      farmer: "Lakshmi Devi",
      location: "Organic Farmer, Karnataka",
      image:
        "https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?auto=format&fit=crop&q=80&w=500",
    },
    {
      quote:
        "The logistics support is a game-changer. I no longer worry about transportation, which was my biggest challenge.",
      farmer: "Harpreet Singh",
      location: "Fruit Grower, Himachal Pradesh",
      image:
        "https://images.unsplash.com/photo-1592838064575-70ed626d3a0e?auto=format&fit=crop&q=80&w=500",
    },
  ];

  const stats = [
    { value: "15,000+", label: "Registered Farmers" },
    { value: "₹120 Cr+", label: "Farmer Earnings" },
    { value: "40%", label: "Average Price Increase" },
  ];

  const faqs = [
    {
      question: "How much does it cost to join AgroDirect?",
      answer:
        "Registration is completely free for farmers. We only charge a small commission (3-5%) on successful sales.",
    },
    {
      question: "Do I need a smartphone to use the platform?",
      answer:
        "While a smartphone makes it easier, you can also access our services through our call center and field agents.",
    },
    {
      question: "How do I get my produce to buyers?",
      answer:
        "We offer logistics partnerships for delivery, or you can arrange your own. For local sales, buyers often pick up directly.",
    },
    {
      question: "When and how will I receive payment?",
      answer:
        "Payments are processed within 48 hours of delivery confirmation and transferred directly to your registered bank account.",
    },
  ];

  return (
    <>
      <div className="min-h-screen">
        {/* Hero Banner */}
        <div
          className="relative h-[500px] bg-cover bg-center"
          style={{
            backgroundImage:
              'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80&w=1470")',
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center max-w-4xl px-4">
              <h1 className="text-5xl font-bold text-white mb-6">
                Grow Your Farm Business with AgroDirect
              </h1>
              <p className="text-xl text-gray-200 mb-10 max-w-3xl mx-auto">
                Join thousands of farmers who are selling directly to buyers,
                eliminating middlemen, and earning fair prices for their
                produce.
              </p>
              <button className="bg-green-600 text-white px-8 py-4 rounded-lg text-xl font-semibold hover:bg-green-700 transition-colors">
                Register as a Farmer
              </button>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-white py-12 shadow-sm">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="text-4xl font-bold text-green-600 mb-2">
                    {stat.value}
                  </p>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Join AgroDirect?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform is designed to empower farmers with tools, resources,
              and connections to maximize their profits and grow their business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 text-green-600">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* How It Works Section */}
        <div className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">How It Works</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Getting started with AgroDirect is simple. Follow these steps to
                begin selling your produce directly to buyers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-sm relative"
                >
                  <div className="bg-green-600 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl absolute -top-6 left-1/2 transform -translate-x-1/2">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold mb-4 mt-6 text-center">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-center">
                    {step.description}
                  </p>
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                      <ArrowRight className="h-8 w-8 text-green-600" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <button className="bg-green-600 text-white px-8 py-4 rounded-lg text-xl font-semibold hover:bg-green-700 transition-colors">
                Get Started Today
              </button>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from farmers who have transformed their businesses with
              AgroDirect.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm">
                <div className="flex items-center mb-6">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                </div>
                <p className="text-gray-600 mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.farmer}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <p className="font-semibold">{testimonial.farmer}</p>
                    <p className="text-sm text-gray-600">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs Section */}
        <div className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Get answers to common questions about joining and selling on
                AgroDirect.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-sm mb-4"
                >
                  <div className="flex items-start">
                    <HelpCircle className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold mb-2">
                        {faq.question}
                      </h3>
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className=" py-8">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Transform Your Farming Business?
            </h2>
            <p className="text-xl  mb-10 max-w-3xl mx-auto">
              Join thousands of farmers who are already benefiting from direct
              market access and better prices.
            </p>
            <button
            onClick={onClick}
            className="text-white bg-green-600 px-6 py-3 rounded-lg text-xl font-semibold hover:bg-green-700 transition-colors"
          >
            Go to Home
          </button>
          </div>
        </div>
       
      </div>
    </>
  );
};

export default ForFarmers;
