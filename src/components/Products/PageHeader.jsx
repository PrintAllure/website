// components/PageHeader.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const PageHeader = ({ searchTerm, setSearchTerm, cartItemCount }) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
      <div>
        <h1 className="text-3xl md:text-4xl font-bold text-primary">Our 3D Printed Products</h1>
        <p className="text-base-content/70 mt-2">Custom solutions for every need</p>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
        <div className="relative flex-grow">
          <input
            type="text"
            placeholder="Search products..."
            className="input input-bordered w-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="absolute right-3 top-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
        <Link 
          to="/cart" 
          className="btn btn-primary gap-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          View Cart
          {cartItemCount > 0 && (
            <span className="badge badge-secondary">
              {cartItemCount}
            </span>
          )}
        </Link>
      </div>
    </div>
  );
};

export default PageHeader;