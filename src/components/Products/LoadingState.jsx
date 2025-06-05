// components/LoadingState.jsx
import React from 'react';

const LoadingState = () => {
  return (
    <div className="flex justify-center items-center min-h-[60vh]">
      <span className="loading loading-spinner loading-lg text-primary"></span>
      <span className="ml-4">Loading products...</span>
    </div>
  );
};

export default LoadingState;