import React from "react";

const PrintAllureHero = () => {
  return (
    <div className="hero min-h-screen bg-base-100">
      <div className="hero-content flex-col lg:flex-row-reverse px-4 sm:px-8 gap-12">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img 
            src="https://images.unsplash.com/photo-1610000000000-1c3b3b3b3b3b" 
            alt="3D Printer and Products" 
            className="max-w-md w-full rounded-box shadow-xl border-2 border-accent" 
          />
        </div>
        
        {/* Text Content Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-base-content mb-4">
            Revolutionizing <span className="text-primary">3D Printing</span> for 
            <span className="block text-secondary">Everyday & Corporate Needs</span>
          </h1>
          
          <p className="py-6 text-lg sm:text-xl text-neutral-content">
            Unleash your creativity with fully customizable 3D printed solutions. 
            From home decor to industrial prototypes - we bring your ideas to life 
            with precision and style.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="btn btn-primary btn-lg rounded-box px-8 shadow-md hover:shadow-lg">
              Explore Products
            </button>
            <button className="btn btn-outline btn-secondary btn-lg rounded-box px-8 hover:bg-secondary hover:text-secondary-content">
              Custom Design
            </button>
          </div>
          
          {/* Branding Element */}
          <div className="mt-8 flex items-center justify-center lg:justify-start gap-3">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-primary-content">
                <path fillRule="evenodd" d="M12 6.75a5.25 5.25 0 016.775-5.025.75.75 0 01.313 1.248l-3.32 3.319c.063.475.276.934.641 1.299.365.365.824.578 1.3.64l3.318-3.319a.75.75 0 011.248.313 5.25 5.25 0 01-5.472 6.756c-1.018-.086-1.87.1-2.309.634L7.344 21.3A3.298 3.298 0 112.7 16.657l8.684-7.151c.533-.44.72-1.291.634-2.309A5.342 5.342 0 0112 6.75zM4.117 19.125a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75v-.008z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-2xl font-bold text-secondary tracking-wider">PRINTALLURE</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrintAllureHero;