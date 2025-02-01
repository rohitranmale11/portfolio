import React from "react";

const messages = [
 "Renunciant: Gain real-world experience with internships & live projects while we build innovative solutions for businesses & startups!"
];

const MarqueeComponent = () => {
  return (
    <div className="overflow-hidden bg-gray-100 py-3 shadow-md">
      <div className="flex space-x-10 animate-marquee">
        {/* Duplicate messages to prevent resetting */}
        {[...messages, ...messages].map((msg, index) => (
          <div key={index} className="text-lg text-gray-900 font-semibold px-6 whitespace-nowrap">
            {msg}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarqueeComponent;
