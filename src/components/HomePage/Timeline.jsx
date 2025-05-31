import React from "react";
import {
  LightBulbIcon,
  UserGroupIcon,
  ShoppingCartIcon,
  FilmIcon,
  DocumentTextIcon
} from "@heroicons/react/24/solid";

const OperationalTimeline = () => {
  const steps = [
    {
      title: "In-house 3D Printing",
      description: "Complete control over production quality with our state-of-the-art 3D printers",
      icon: <LightBulbIcon className="w-5 h-5" />
    },
    {
      title: "Team-based Production",
      description: "Collaborative approach ensuring efficiency and quality control",
      icon: <UserGroupIcon className="w-5 h-5" />
    },
    {
      title: "Sales Channels: Events, Online",
      description: "Multi-platform distribution reaching diverse customer bases",
      icon: <ShoppingCartIcon className="w-5 h-5" />
    },
    {
      title: "Social Media & Reels",
      description: "Engaging content showcasing our products and process",
      icon: <FilmIcon className="w-5 h-5" />
    },
    {
      title: "Task Management via Google Sheets",
      description: "Streamlined operations with transparent workflow tracking",
      icon: <DocumentTextIcon className="w-5 h-5" />
    }
  ];

  return (
    <div className="w-full px-4 sm:px-6 py-12 bg-base-100">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-secondary mb-12">
          Our Operational Process
        </h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 h-full w-0.5 bg-success/30 transform -translate-x-1/2"></div>
          
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="relative pl-12">
                {/* Timeline dot */}
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2">
                  <div className="w-8 h-8 rounded-full bg-success text-success-content flex items-center justify-center ring-4 ring-success/20">
                    {step.icon}
                  </div>
                </div>
                
                {/* Content */}
                <div className="bg-base-100 border border-base-300 rounded-box p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-bold text-base-content">{step.title}</h3>
                  <p className="mt-2 text-base-content/80">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OperationalTimeline;