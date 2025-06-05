// components/product/ProductTabs.jsx
import React, { useState } from 'react';

const ProductTabs = ({ product }) => {
  const [activeTab, setActiveTab] = useState('description');

  const tabs = [
    { id: 'description', label: 'Description' },
    { id: 'specifications', label: 'Specifications' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'shipping', label: 'Shipping & Returns' }
  ];

  const renderTabContent = () => {
    switch(activeTab) {
      case 'description':
        return <div>{product.detailedDescription || product.description}</div>;
      case 'specifications':
        return (
          <div className="space-y-2">
            {product.specifications?.map((spec, index) => (
              <div key={index} className="flex">
                <span className="font-medium w-1/3">{spec.key}:</span>
                <span className="w-2/3">{spec.value}</span>
              </div>
            ))}
          </div>
        );
      case 'reviews':
        return (
          <div>
            {product.reviews?.length > 0 ? (
              product.reviews.map(review => (
                <div key={review.id} className="border-b pb-4 mb-4">
                  <div className="flex items-center mb-2">
                    <div className="avatar placeholder">
                      <div className="bg-neutral text-neutral-content rounded-full w-8">
                        <span>{review.author.charAt(0)}</span>
                      </div>
                    </div>
                    <span className="ml-2 font-medium">{review.author}</span>
                  </div>
                  <div className="rating rating-xs">
                    {[1, 2, 3, 4, 5].map(star => (
                      <input
                        key={star}
                        type="radio"
                        name={`rating-${review.id}`}
                        className="mask mask-star"
                        checked={review.rating === star}
                        readOnly
                      />
                    ))}
                  </div>
                  <p className="mt-2">{review.comment}</p>
                </div>
              ))
            ) : (
              <p>No reviews yet.</p>
            )}
          </div>
        );
      case 'shipping':
        return (
          <div>
            <h3 className="font-medium mb-2">Shipping Policy</h3>
            <p>Standard shipping: 3-5 business days</p>
            <p>Express shipping: 1-2 business days</p>
            
            <h3 className="font-medium mt-4 mb-2">Return Policy</h3>
            <p>30-day return policy for unused items</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="mt-8">
      <div className="tabs">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`tab tab-lg ${activeTab === tab.id ? 'tab-active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="p-4 border rounded-b-lg">
        {renderTabContent()}
      </div>
    </div>
  );
};

export default ProductTabs;