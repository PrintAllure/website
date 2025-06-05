// components/EmptyState.jsx
import React from 'react';

const EmptyState = () => {
  return (
    <div className="text-center py-12">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-base-content/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <h3 className="text-xl font-medium mt-4">No products found</h3>
      <p className="text-base-content/70 mt-2">Try adjusting your search or check back later</p>
    </div>
  );
};

export default EmptyState;