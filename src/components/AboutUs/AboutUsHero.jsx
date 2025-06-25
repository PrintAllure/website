import React from "react";

const AboutHero = () => {
  return (
    <div className="hero min-h-[60vh] relative">
      {/* Background with subtle 3D grid pattern */}
      <div 
        className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0icmdiYSgyMTMsMjAxLDIyNiwwLjA1KSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNwYXR0ZXJuKSIvPjwvc3ZnPg==')]"
        aria-hidden="true"
      />
      
      {/* Glass overlay */}
      <div className="absolute inset-0 bg-base-100/80 backdrop-blur-sm" aria-hidden="true" />
      
      <div className="hero-content text-center relative z-10 p-8">
        <div className="max-w-3xl bg-base-100/90 rounded-box p-8 md:p-12 shadow-xl border border-base-300/20">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
            About PrintAllure
          </h1>
          <p className="text-xl md:text-2xl text-base-content mb-8">
            Where Creativity Meets Function — Your Destination for Custom 3D-Printed Solutions.
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default AboutHero;