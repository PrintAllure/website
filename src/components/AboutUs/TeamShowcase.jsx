import React from "react";
import { LinkedinIcon, InstagramIcon } from "lucide-react"; // Using Lucide icons for social media

const TeamShowcase = () => {
  const teamMembers = [
    {
      name: "Vrinda Sharma",
      title: "CEO & Co-Founder",
      photo: "https://randomuser.me/api/portraits/women/65.jpg",
      linkedin: "#",
      instagram: "#"
    },
    {
      name: "Harshit",
      title: "Finance & Operations Head",
      photo: "https://randomuser.me/api/portraits/men/42.jpg",
      linkedin: "#",
      instagram: "#"
    },
    {
      name: "Aarav Patel",
      title: "Design Lead",
      photo: "https://randomuser.me/api/portraits/men/32.jpg",
      linkedin: "#",
      instagram: "#"
    },
    {
      name: "Priya Mehta",
      title: "Marketing Specialist",
      photo: "https://randomuser.me/api/portraits/women/44.jpg",
      linkedin: "#",
      instagram: "#"
    }
  ];

  return (
    <div className="w-full px-4 sm:px-6 py-12 bg-base-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-secondary mb-12">
          Meet Our Team
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div key={index} className="card bg-base-100 border border-base-300 rounded-box shadow-sm hover:shadow-md transition-shadow">
              <div className="card-body items-center text-center p-6">
                {/* Avatar with Ring */}
                <div className="avatar mb-4">
                  <div className="w-24 rounded-full ring-2 ring-primary ring-offset-2 ring-offset-base-100">
                    <img src={member.photo} alt={member.name} />
                  </div>
                </div>

                {/* Name & Title */}
                <h3 className="text-xl font-bold text-base-content">{member.name}</h3>
                <p className="text-primary mb-4">{member.title}</p>

                {/* Social Links */}
                <div className="flex gap-3">
                  <a 
                    href={member.linkedin} 
                    className="btn btn-ghost btn-sm p-2 text-base-content/70 hover:text-[#0A66C2] hover:bg-[#0A66C2]/10 rounded-box"
                    aria-label={`${member.name}'s LinkedIn`}
                  >
                    <LinkedinIcon className="w-5 h-5" />
                  </a>
                  <a 
                    href={member.instagram} 
                    className="btn btn-ghost btn-sm p-2 text-base-content/70 hover:text-[#E4405F] hover:bg-[#E4405F]/10 rounded-box"
                    aria-label={`${member.name}'s Instagram`}
                  >
                    <InstagramIcon className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamShowcase;