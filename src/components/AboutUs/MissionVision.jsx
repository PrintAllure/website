import React from "react";

const MissionVision = () => {
  return (
    <div className="w-full px-4 sm:px-6 py-12 bg-neutral rounded-box">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission Card */}
          <div className="card bg-base-200 text-primary-content rounded-box shadow-sm hover:shadow-md transition-shadow">
            <div className="card-body p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">🎯</span>
                <h2 className="text-2xl font-bold">Our Mission</h2>
              </div>
              <blockquote className="text-lg italic pl-12">
                "To make 3D printing accessible, functional, and creatively expressive."
              </blockquote>
            </div>
          </div>

          {/* Vision Card */}
          <div className="card bg-base-200 text-primary-content rounded-box shadow-sm hover:shadow-md transition-shadow">
            <div className="card-body p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">🔭</span>
                <h2 className="text-2xl font-bold">Our Vision</h2>
              </div>
              <blockquote className="text-lg italic pl-12">
                "To become the go-to platform for customized 3D-printed solutions in the education and startup sectors."
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionVision;