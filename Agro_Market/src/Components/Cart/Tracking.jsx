

import React, { useState } from 'react';
import { Package, Truck, Phone, MapPin, Calendar, Clock, CheckCircle, AlertCircle } from 'lucide-react';

const Tracking = () => {
  const [orderNumber, setOrderNumber] = useState('');
  const [showDemo, setShowDemo] = useState(false);

  // Demo data
  const demoOrder = {
    id: "ORD123456789",
    date: "2024-03-15",
    status: "out_for_delivery",
    estimatedDelivery: "2024-03-15 17:00",
    items: [
      { name: "Fresh Organic Tomatoes", quantity: 2, price: 3.99 },
      { name: "Farm Fresh Eggs", quantity: 1, price: 4.99 }
    ],
    deliveryPartner: {
      name: "John Smith",
      phone: "(555) 123-4567",
      vehicleNumber: "DEL-2024"
    },
    statusHistory: [
      {
        status: 'confirmed',
        timestamp: '2024-03-15 09:00',
        description: 'Order confirmed and payment received'
      },
      {
        status: 'processing',
        timestamp: '2024-03-15 09:30',
        description: 'Order is being processed at the warehouse'
      },
      {
        status: 'shipped',
        timestamp: '2024-03-15 11:45',
        location: 'Local Distribution Center',
        description: 'Package has been picked up by delivery partner'
      },
      {
        status: 'out_for_delivery',
        timestamp: '2024-03-15 14:30',
        location: 'Local Area',
        description: 'Package is out for delivery'
      }
    ]
  };

  const handleTrack = (e) => {
    e.preventDefault();
    setShowDemo(true);
  };

  const getStatusColor = (status) => {
    const colors = {
      confirmed: 'text-blue-600',
      processing: 'text-yellow-600',
      shipped: 'text-purple-600',
      out_for_delivery: 'text-orange-600',
      delivered: 'text-green-600'
    };
    return colors[status] || 'text-gray-600';
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Track Your Order</h1>

          {/* Order Tracking Form */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <form onSubmit={handleTrack} className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="Enter your order number"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                value={orderNumber}
                onChange={(e) => setOrderNumber(e.target.value)}
                required
              />
              <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md transition-colors flex items-center justify-center"
              >
                <Package className="h-5 w-5 mr-2" />
                Track Order
              </button>
            </form>
          </div>

          {showDemo && (
            <>
              {/* Order Details */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-800">Order #{demoOrder.id}</h2>
                    <div className="flex items-center mt-2 text-gray-600">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>Ordered on {demoOrder.date}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`font-semibold ${getStatusColor(demoOrder.status)}`}>
                      {demoOrder.status.replace(/_/g, ' ').toUpperCase()}
                    </div>
                    <div className="flex items-center mt-2 text-gray-600">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>Expected by {demoOrder.estimatedDelivery}</span>
                    </div>
                  </div>
                </div>

                {/* Delivery Partner Info */}
                <div className="border-t border-gray-200 pt-6 mb-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Delivery Partner</h3>
                  <div className="bg-green-50 rounded-lg p-4">
                    <div className="flex items-start">
                      <Truck className="h-5 w-5 text-green-600 mr-3 mt-1" />
                      <div>
                        <div className="font-semibold text-gray-800">{demoOrder.deliveryPartner.name}</div>
                        <div className="flex items-center mt-2 text-gray-600">
                          <Phone className="h-4 w-4 mr-2" />
                          <span>{demoOrder.deliveryPartner.phone}</span>
                        </div>
                        {demoOrder.deliveryPartner.vehicleNumber && (
                          <div className="mt-1 text-gray-600">
                            Vehicle: {demoOrder.deliveryPartner.vehicleNumber}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Order Items */}
                <div className="border-t border-gray-200 pt-6 mb-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Order Items</h3>
                  <div className="space-y-4">
                    {demoOrder.items.map((item, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <div className="flex items-center">
                          <span className="font-medium text-gray-800">{item.name}</span>
                          <span className="text-gray-600 ml-2">x{item.quantity}</span>
                        </div>
                        <span className="text-gray-800">${(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tracking Timeline */}
                <div className="border-t border-gray-200 pt-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Tracking History</h3>
                  <div className="space-y-6">
                    {demoOrder.statusHistory.map((status, index) => (
                      <div key={index} className="flex">
                        <div className="flex flex-col items-center mr-4">
                          <div className={`rounded-full p-2 ${getStatusColor(status.status)} bg-opacity-20`}>
                            {status.status === 'delivered' ? (
                              <CheckCircle className={`h-5 w-5 ${getStatusColor(status.status)}`} />
                            ) : (
                              <AlertCircle className={`h-5 w-5 ${getStatusColor(status.status)}`} />
                            )}
                          </div>
                          {index < demoOrder.statusHistory.length - 1 && (
                            <div className="w-px h-full bg-gray-300 my-2"></div>
                          )}
                        </div>
                        <div className="flex-1">
                          <div className={`font-semibold ${getStatusColor(status.status)}`}>
                            {status.status.replace(/_/g, ' ').toUpperCase()}
                          </div>
                          <div className="text-sm text-gray-600">{status.timestamp}</div>
                          {status.location && (
                            <div className="flex items-center mt-1 text-gray-600">
                              <MapPin className="h-4 w-4 mr-1" />
                              <span>{status.location}</span>
                            </div>
                          )}
                          <div className="mt-1 text-gray-700">{status.description}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Help Section */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Need Help?</h3>
                <p className="text-gray-600 mb-4">
                  If you have any questions about your delivery, please don't hesitate to contact our support team.
                </p>
                <div className="flex space-x-4">
                  <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md transition-colors">
                    Contact Support
                  </button>
                  <button className="border border-green-600 text-green-600 hover:bg-green-50 px-4 py-2 rounded-md transition-colors">
                    Report an Issue
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Tracking;
