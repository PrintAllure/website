import React from "react";

import logo from "../../assets/logorc.png"

function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-blue-900 w-full text-white mr--100">
      <div className="container mx-auto px-4 py-12 max-w-screen-xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Company Info and Social - Increased from 1/3 to 5/12 */}
          <div className="md:col-span-5 space-y-6">
            <div className="flex items-center space-x-3 group transition-all duration-300 hover:scale-105 cursor-pointer">
              <img src={logo} className="h-12 w-auto transition-transform group-hover:scale-110" alt="PrintAllure Logo" />
              <h2 className="text-2xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">PrintAllure</h2>
            </div>
            
            <p className="text-gray-200 pr-6 text-left text-lg group-hover:text-blue-300 transition-colors duration-300">
              Precision in Every Print <br />
              Vision in Every Layer
            </p>
            
            <div className="flex space-x-4 pt-2">
    {/* Social Media Icons */}
<div className="flex space-x-4">
  {/* Instagram Icon - using Instagram gradient colors */}
  <a href="https://www.instagram.com/printallure/" 
     className="block bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 text-white p-3 rounded-full shadow-md transition-all duration-300 hover:shadow-lg transform hover:scale-105" 
     aria-label="Instagram">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  </a>
  {/* Facebook Icon */}
  <a href="https://www.facebook.com/profile.php?id=61574001958838" className="block bg-blue-600 text-white p-3 rounded-full shadow-md transition-all duration-300 hover:bg-blue-700 hover:shadow-lg transform hover:scale-105" aria-label="Facebook">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
    </svg>
  </a>
  
  
  
  {/* LinkedIn Icon - using LinkedIn blue */}
  <a href="https://www.linkedin.com/company/printallure/" 
     className="block bg-blue-700 text-white p-3 rounded-full shadow-md transition-all duration-300 hover:bg-blue-800 hover:shadow-lg transform hover:scale-105" 
     aria-label="LinkedIn">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
      <rect x="2" y="9" width="4" height="12"></rect>
      <circle cx="4" cy="4" r="2"></circle>
    </svg>
  </a>
</div>

            </div>
          </div>
          
          {/* Contact Info - Increased from 1/3 to 5/12 */}
          <div className="md:col-span-5 space-y-4 text-left">
            <h3 className="text-lg font-semibold text-white">Get In Touch</h3>
            
            <div className="space-y-3">
              <div className="flex items-start space-x-3 hover:scale-105 transition-all duration-300 group">
                <svg className="h-5 w-5 text-blue-300 mt-1 group-hover:h-6 group-hover:w-6 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:PrintAllure.fvi@gmail.com" className="text-gray-200 hover:text-blue-300 group-hover:text-lg transition-all duration-300">
                  PrintAllure.fvi@gmail.com
                </a>
              </div>
              
              <div className="flex items-start space-x-3 hover:scale-105 transition-all duration-300 group">
                <svg className="h-5 w-5 text-blue-300 mt-1 group-hover:h-6 group-hover:w-6 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+918699227783" className="text-gray-200 hover:text-blue-300 group-hover:text-lg transition-all duration-300">
                  +91-86992-27783
                </a>
              </div>
              
              <div className="flex items-start space-x-3 hover:scale-105 transition-all duration-300 group">
                <svg className="h-5 w-5 text-blue-300 mt-1 flex-shrink-0 group-hover:h-6 group-hover:w-6 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-gray-200 group-hover:text-blue-300 group-hover:text-lg transition-all duration-300">
                  Fraser Valley India, GGD SD College,<br />
                  Sector-32-C, Chandigarh
                </p>
              </div>
            </div>
          </div>
          
          {/* Navigation Links - Decreased from 1/3 to 2/12 */}
          <div className="md:col-span-2 text-left">
            <h3 className="text-lg font-semibold mb-3 text-white">Quick Links</h3>
            
            <nav className="grid grid-cols-1 gap-3">
              <a href="/" className="text-gray-200 hover:text-blue-300 transition-all duration-300 flex items-center justify-start space-x-2 hover:scale-105">
                <svg className="h-4 w-4 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <span>Home</span>
              </a>
              <a href="/products" className="text-gray-200 hover:text-blue-300 transition-all duration-300 flex items-center justify-start space-x-2 hover:scale-105">
                <svg className="h-4 w-4 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <span>Products</span>
              </a>
              <a href="/eventpage" className="text-gray-200 hover:text-blue-300 transition-all duration-300 flex items-center justify-start space-x-2 hover:scale-105">
                <svg className="h-4 w-4 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <span>Events</span>
              </a>
              <a href="/contact" className="text-gray-200 hover:text-blue-300 transition-all duration-300 flex items-center justify-start space-x-2 hover:scale-105">
                <svg className="h-4 w-4 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <span>Contact</span>
              </a>
            </nav>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-blue-800 text-center">
          <p className="text-gray-300 text-sm">
            &copy; PrintAllure 2025, All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;