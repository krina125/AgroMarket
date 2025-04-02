import React from "react";
import { Award, ThumbsUp, Users } from "lucide-react";
export const LiveMarket = () => {
  return (
    <>
      <div className="px-4 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">Live Market Prices</h2>
          <span className="text-green-600">Updated 5 mins ago</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: "Wheat", price: "₹2,450/quintal", change: "+1.2%" },
            { name: "Rice", price: "₹3,200/quintal", change: "+0.8%" },
            {
              name: "Potatoes",
              price: "₹1,800/quintal",
              change: "-0.5%",
            },
            {
              name: "Tomatoes",
              price: "₹2,100/quintal",
              change: "+2.3%",
            },
          ].map((item, index) => (
            <div key={index} className="bg-white rounded-xl p-6 border">
              <h3 className="text-lg font-medium mb-2">{item.name}</h3>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold">{item.price}</span>
                <span
                  className={
                    item.change.startsWith("+")
                      ? "text-green-600"
                      : "text-red-600"
                  }
                >
                  {item.change}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export const State = () => {
  return (
    <>
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
          {[
            {
              icon: <Users className="h-8 w-8" />,
              title: "2,500+",
              desc: "Verified Farmers",
            },
            {
              icon: <ThumbsUp className="h-8 w-8" />,
              title: "50,000+",
              desc: "Happy Customers",
            },
            {
              icon: <Award className="h-8 w-8" />,
              title: "95%",
              desc: "Positive Reviews",
            },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 text-center shadow-sm"
            >
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600">
                {stat.icon}
              </div>
              <h3 className="text-2xl font-bold mb-2">{stat.title}</h3>
              <p className="text-gray-600">{stat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
