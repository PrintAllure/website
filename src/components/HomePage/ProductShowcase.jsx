import React, { useState } from "react";

const ProductTabs = () => {
  const [activeTab, setActiveTab] = useState("corporate");

  // Product data
  const corporateProducts = [
    { name: "Desk Bins", price: "$29.99", image: "https://images.unsplash.com/photo-1604176354204-9268737828e4" },
    { name: "Phone Stands", price: "$24.99", image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb" },
    { name: "Business Card Holders", price: "$19.99", image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf" },
    { name: "Catch Trays", price: "$34.99", image: "https://images.unsplash.com/photo-1600267165477-6d4cc741b379" }
  ];

  const individualProducts = [
    { name: "Custom Miniatures", price: "$39.99", image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa" },
    { name: "Vases", price: "$32.99", image: "https://images.unsplash.com/photo-1605859465655-84c45e14a0b7" },
    { name: "Plant Pots", price: "$27.99", image: "https://images.unsplash.com/photo-1605152276897-4f618f831968" },
    { name: "Name Plates", price: "$22.99", image: "https://images.unsplash.com/photo-1605721917576-0a9e9c0b1b1a" },
    { name: "Trinket Trays", price: "$29.99", image: "https://images.unsplash.com/photo-1605721917576-0a9e9c0b1b1b" }
  ];

  return (
    <div className="w-full px-4 sm:px-6 py-12 bg-base-100">
      <div className="max-w-7xl mx-auto">
        {/* Tab Controls */}
        <div className="tabs tabs-boxed bg-base-200 max-w-md mx-auto mb-8">
          <button
            className={`tab tab-lg ${activeTab === "corporate" ? "tab-active bg-primary text-primary-content" : ""}`}
            onClick={() => setActiveTab("corporate")}
          >
            Corporate Products
          </button>
          <button
            className={`tab tab-lg ${activeTab === "individual" ? "tab-active bg-primary text-primary-content" : ""}`}
            onClick={() => setActiveTab("individual")}
          >
            Individual Products
          </button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {(activeTab === "corporate" ? corporateProducts : individualProducts).map((product, index) => (
            <div key={index} className="card bg-base-100 shadow-md hover:shadow-lg transition-shadow rounded-box border border-base-300">
              <figure className="px-4 pt-4">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="rounded-box h-48 w-full object-cover"
                />
              </figure>
              <div className="card-body p-4">
                <h3 className="card-title text-base-content">{product.name}</h3>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-primary font-bold">{product.price}</span>
                  <button className="btn btn-sm btn-primary rounded-box">
                    View
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductTabs;