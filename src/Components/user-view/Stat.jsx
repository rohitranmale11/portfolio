import React from "react";
import statUserIcon from "./images/stat-user-icon.png";
import statDocIcon from "./images/stat-doc.png";
import statSuccessIcon from "./images/stat-success.png";
import statVerifyIcon from "./images/stat-verify.png";

const Stat = () => {
  return (
    <div className="bg-gray-50 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-black">Our Key Statistics</h2>
          <p className="text-lg text-gray-600 mt-4">
            These numbers highlight our impact and success. We're constantly working to improve and innovate!
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[  
            {
              icon: statUserIcon,
              number: "10+",
              label: "Active Registered Interns",
              bgcolor: "bg-[#DDE2E5]",
            },
            {
              icon: statDocIcon,
              number: "2+",
              label: "Ongoing Projects",
              bgcolor: "bg-[#FEF6E0]",
            },
            {
              icon: statVerifyIcon,
              number: "95%",
              label: "Internship Completion Rate",
              bgcolor: "bg-[#EAE3F6]",
            },
            {
              icon: statSuccessIcon,
              number: "100%",
              label: "Learn and Grow",
              bgcolor: "bg-[#DCF1F4]",
            },
          ].map((stat, index) => (
            <div
              key={index}
              className={`${stat.bgcolor} rounded-xl p-8 flex flex-col items-center shadow-lg hover:shadow-xl transition-shadow duration-300`}
            >
              <img
                src={stat.icon}
                alt={stat.label}
                className="mb-4 w-16 h-16 object-contain"
              />
              <div className="text-3xl font-bold text-gray-900">{stat.number}</div>
              <div className="text-sm text-gray-500 mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stat;
