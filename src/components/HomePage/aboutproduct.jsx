import React from 'react';

const FeatureCard = ({ title, description, icon: Icon }) => {
  return (
    <div className="group relative bg-white p-8 rounded-2xl shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-300/30 border-2 border-transparent hover:border-blue-100">
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="relative z-10">
        <div className="mb-6 flex justify-center">
          <div className="bg-gradient-to-br from-blue-600 to-cyan-500 p-4 rounded-2xl shadow-lg">
            <Icon className="h-8 w-8 text-white" />
          </div>
        </div>
        <h2 className="text-2xl font-bold text-center mb-4 bg-gradient-to-r from-blue-800 to-cyan-700 bg-clip-text text-transparent">
          {title}
        </h2>
        <p className="text-gray-600 text-center text-sm">{description}</p>
      </div>
    </div>
  );
};

const FeatureCards = () => {
  const features = [
    { 
      title: "Precision Layered",
      description: "Advanced layer-by-layer fabrication for unmatched structural integrity",
      icon: (props) => (
        <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          <path d="M4 6L12 12L4 18" className="fill-current text-blue-100" />
        </svg>
      )
    },
    { 
      title: "Durable Prints",
      description: "High-strength polymers engineered for long-lasting performance",
      icon: (props) => (
        <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      )
    },
    { 
      title: "Smooth Finish",
      description: "0.05mm resolution printing with post-processing perfection",
      icon: (props) => (
        <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" />
        </svg>
      )
    },
    { 
      title: "Advanced Materials",
      description: "Industrial-grade filaments with superior heat/chemical resistance",
      icon: (props) => (
        <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    }
  ];

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white py-20 px-6 w-full">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl py-2 font-bold bg-gradient-to-r from-blue-800 to-cyan-700 bg-clip-text text-transparent mb-4">
            Why Buy 3D Printed Products?
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Harnessing additive manufacturing technology for superior product quality
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureCards;