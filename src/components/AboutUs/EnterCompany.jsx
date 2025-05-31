import React from "react";

const CompanyTeamPhoto = () => {
  return (
    <div className="w-full px-4 sm:px-6 py-12 bg-base-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-secondary mb-8">
          The PrintAllure Family
        </h2>
        
        <div className="card bg-base-200 rounded-box overflow-hidden shadow-xl">
          {/* Team Photo */}
          <figure className="relative aspect-video w-full">
            <img 
              src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc" 
              alt="PrintAllure Team Photo" 
              className="w-full h-full object-cover"
            />
            
            {/* Photo Overlay */}
            <div className="absolute inset-0 bg-primary/10 flex items-center justify-center">
              <div className="text-center p-6 backdrop-blur-sm bg-base-100/70 rounded-box">
                <h3 className="text-2xl font-bold text-secondary mb-2">
                  Meet Our Team
                </h3>
                <p className="text-base-content">
                  The creative minds behind PrintAllure's 3D printing solutions
                </p>
              </div>
            </div>
          </figure>
          
          {/* Team Description */}
          <div className="card-body items-center text-center p-8">
            <p className="text-lg text-base-content mb-4">
              At PrintAllure, we're a student-run team passionate about bringing innovative 
              3D-printed solutions to businesses and individuals alike.
            </p>
            <div className="stats bg-base-100 shadow">
              <div className="stat">
                <div className="stat-title">Team Members</div>
                <div className="stat-value text-primary">12+</div>
                <div className="stat-desc">Students from GGD SD College</div>
              </div>
              <div className="stat">
                <div className="stat-title">Founded</div>
                <div className="stat-value text-secondary">2025</div>
                <div className="stat-desc">Chandigarh, India</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyTeamPhoto;