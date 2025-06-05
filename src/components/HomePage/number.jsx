import React from 'react';

const CustomerStats = () => {
  const stats = [
    { value: '200+', label: 'Products Sold' },
    { value: '150+', label: 'Happy Customers' },
    { value: '4.7/5', label: 'Overall Ratings' }
  ];

  return (
    <div className="w-full mt-10 mb-10 max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden border border-blue-200">
      <div className="p-6">
        <h2 className="text-xl font-semibold text-center text-blue-800 mb-6">Our Customer Satisfaction</h2>
        
        <div className="flex flex-col md:flex-row justify-around items-center gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="bg-blue-50 rounded-full h-24 w-24 flex items-center justify-center mb-3 border-2 border-blue-100">
                <span className="text-2xl font-bold text-blue-700">{stat.value}</span>
              </div>
              <span className="text-blue-600 font-medium text-center">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerStats;