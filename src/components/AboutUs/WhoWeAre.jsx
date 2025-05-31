import React from "react";

const WhoWeAre = () => {
  return (
    <div className="w-full px-4 sm:px-6 py-12 bg-base-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-secondary mb-10">
          Who We Are
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div className="card bg-base-100 border border-base-300 rounded-box p-8 shadow-sm hover:shadow-md transition-shadow">
            <p className="text-lg text-base-content mb-6">
              PrintAllure is a student-run 3D printing company under the Student Company Program at GGD SD College, Chandigarh. We're committed to delivering creative, affordable, and customizable products for both individuals and businesses.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🏫</span>
                <div>
                  <h3 className="font-bold text-base-content">Location</h3>
                  <p className="text-base-content/80">GGD SD College, Chandigarh</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <span className="text-2xl">🖨️</span>
                <div>
                  <h3 className="font-bold text-base-content">Established</h3>
                  <p className="text-base-content/80">2023</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <span className="text-2xl">🎓</span>
                <div>
                  <h3 className="font-bold text-base-content">Program</h3>
                  <p className="text-base-content/80">Student Company Program</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Image/Graphic */}
          <div className="hidden lg:flex justify-center">
            <div className="relative w-full h-80 bg-primary/10 rounded-box border-2 border-dashed border-primary/30 flex items-center justify-center">
              <div className="text-center p-6">
                <span className="text-6xl mb-4">🖨️</span>
                <h3 className="text-xl font-bold text-primary">Student Innovation</h3>
                <p className="text-primary/80">3D Printing Solutions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;