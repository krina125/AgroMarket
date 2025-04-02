import React from 'react';
import { Tractor, ShoppingBag, ArrowRight, Leaf, BadgePercent, ShieldCheck, Truck, Clock, Recycle, Star, HelpCircle, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';

const ForBuyers = ({onClick}) => {
  const benefits = [
    {
      icon: <Leaf className="h-8 w-8" />,
      title: "Direct from Farmers",
      description: "Get fresh produce straight from the source, ensuring maximum freshness and quality."
    },
    {
      icon: <BadgePercent className="h-8 w-8" />,
      title: "Competitive Prices",
      description: "Save up to 25% on your grocery bills by cutting out middlemen and buying directly."
    },
    {
      icon: <ShieldCheck className="h-8 w-8" />,
      title: "Verified Sellers",
      description: "All farmers undergo KYC verification for secure and trustworthy transactions."
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Convenient & Transparent",
      description: "Browse, compare, and purchase from multiple farmers in one seamless experience."
    },
    {
      icon: <Recycle className="h-8 w-8" />,
      title: "Sustainable & Ethical",
      description: "Support local agriculture, reduce food miles, and minimize environmental impact."
    }
  ];

  const steps = [
    {
      number: 1,
      title: "Register",
      description: "Create your account in minutes and set your delivery preferences."
    },
    {
      number: 2,
      title: "Browse & Order",
      description: "Explore a variety of fresh farm products and place orders directly with farmers."
    },
    {
      number: 3,
      title: "Secure Payment & Delivery",
      description: "Pay safely online and receive farm-fresh produce at your doorstep."
    }
  ];

  const testimonials = [
    {
      quote: "The quality of organic vegetables I get from AgroDirect is exceptional. I know exactly which farm my food comes from.",
      customer: "Priya Sharma",
      role: "Home Chef",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=500"
    },
    {
      quote: "As a restaurant owner, I've reduced my procurement costs by 20% while getting fresher ingredients for my customers.",
      customer: "Vikram Malhotra",
      role: "Restaurant Owner",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=500"
    },
    {
      quote: "I love knowing that my money goes directly to the farmers. The produce is fresher and lasts longer than supermarket options.",
      customer: "Meera Patel",
      role: "Regular Customer",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=500"
    }
  ];

  const stats = [
    { value: "50,000+", label: "Happy Customers" },
    { value: "25%", label: "Average Savings" },
    { value: "2,500+", label: "Product Varieties" }
  ];

  const faqs = [
    {
      question: "How do I know the produce is fresh?",
      answer: "All products on AgroDirect are harvested only after you place an order, ensuring maximum freshness. We also display harvest dates and farm information for complete transparency."
    },
    {
      question: "What if I'm not satisfied with my order?",
      answer: "We have a 100% satisfaction guarantee. If you're not happy with the quality, simply report it within 24 hours of delivery, and we'll process a refund or replacement."
    },
    {
      question: "How is delivery handled?",
      answer: "We have a network of delivery partners who specialize in handling fresh produce. For local orders, many farmers offer same-day or next-day delivery options."
    },
    {
      question: "Can I subscribe to regular deliveries?",
      answer: "Yes! We offer weekly and monthly subscription boxes of seasonal produce from your favorite farmers with special discounts for subscribers."
    }
  ];

  const featuredDeals = [
    {
      name: "Organic Vegetable Box",
      farmer: "Green Earth Farms",
      originalPrice: "₹750",
      discountPrice: "₹599",
      image: "https://images.unsplash.com/photo-1518843875459-f738682238a6?auto=format&fit=crop&q=80&w=500"
    },
    {
      name: "Fresh Fruit Basket",
      farmer: "Sunshine Orchards",
      originalPrice: "₹850",
      discountPrice: "₹699",
      image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&q=80&w=500"
    },
    {
      name: "Farm Fresh Dairy Pack",
      farmer: "Pure Dairy Farm",
      originalPrice: "₹450",
      discountPrice: "₹375",
      image: "https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&q=80&w=500"
    }
  ];

  return (
    <div className="min-h-screen ">
     

      {/* Hero Banner */}
      <div 
        className="relative h-[500px] bg-cover bg-center" 
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1470")'
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center max-w-4xl px-4">
            <h1 className="text-5xl font-bold text-white mb-6">
              Fresh From Farm to Your Table
            </h1>
            <p className="text-xl text-gray-200 mb-10 max-w-3xl mx-auto">
              Buy directly from verified farmers for fresher, healthier produce at better prices. 
              Support local agriculture and enjoy the taste of truly fresh food.
            </p>
            <button className="bg-green-600 text-white px-8 py-4 rounded-lg text-xl font-semibold hover:bg-green-700 transition-colors flex items-center mx-auto">
              <ShoppingBag className="mr-2 h-6 w-6" />
              Start Shopping
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
                <p className="text-4xl font-bold text-green-600 mb-2">{stat.value}</p>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Why Choose AgroDirect?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the difference of buying directly from farmers. Better quality, 
            better prices, and a better impact on local communities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 text-green-600">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Deals Section */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Special Deals</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our handpicked selection of farm-fresh products at special prices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredDeals.map((deal, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="h-48 relative">
                  <img src={deal.image} alt={deal.name} className="w-full h-full object-cover" />
                  <div className="absolute top-4 right-4 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                    Special Offer
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{deal.name}</h3>
                  <p className="text-gray-600 mb-4">by {deal.farmer}</p>
                  <div className="flex items-center mb-4">
                    <span className="text-gray-400 line-through mr-2">{deal.originalPrice}</span>
                    <span className="text-green-600 font-bold text-xl">{deal.discountPrice}</span>
                  </div>
                  <button className="w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 flex items-center justify-center">
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">How It Works</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Getting started with AgroDirect is simple. Follow these steps to begin receiving farm-fresh produce.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm relative">
              <div className="bg-green-600 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl absolute -top-6 left-1/2 transform -translate-x-1/2">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold mb-4 mt-6 text-center">{step.title}</h3>
              <p className="text-gray-600 text-center">{step.description}</p>
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
            Start Shopping Today
          </button>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from people who have experienced the difference of buying directly from farmers.
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
                <p className="text-gray-600 mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.customer} 
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <p className="font-semibold">{testimonial.customer}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQs Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers to common questions about buying from AgroDirect.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm mb-4">
              <div className="flex items-start">
                <HelpCircle className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className=" py-8 my-8 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Experience Farm-Fresh Goodness?</h2>
          <p className="text-xl  mb-10 max-w-3xl mx-auto">
            Join thousands of happy customers who enjoy fresher, healthier produce while supporting local farmers.
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
  );
}

export default ForBuyers;