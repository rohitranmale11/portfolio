import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { FaCode, FaBullhorn, FaPalette, FaHandshake, FaMobileAlt, FaCloud } from "react-icons/fa";
import "swiper/css";

const services = [
  {
    id: 1,
    title: "Web Development",
    category: "Technology",
    description: "Building modern and responsive websites to enhance your online presence.",
    image: "web_dev.jpg",
    icon: <FaCode className="text-4xl text-blue-600" />,
  },
  {
    id: 2,
    title: "Digital Marketing",
    category: "Marketing",
    description: "Strategies to boost your brand's online visibility and engagement.",
    image: "digital_market.avif",
    icon: <FaBullhorn className="text-4xl text-yellow-600" />,
  },
  {
    id: 3,
    title: "Branding & Design",
    category: "Creative",
    description: "Creating visually stunning branding elements to establish your identity.",
    image: "uiux.jpg",
    icon: <FaPalette className="text-4xl text-pink-600" />,
  },
  {
    id: 4,
    title: "Consulting Services",
    category: "Business",
    description: "Expert advice to help your business grow and succeed in the market.",
    image: "cons_ser.webp",
    icon: <FaHandshake className="text-4xl text-green-600" />,
  },
  {
    id: 5,
    title: "Mobile App Development",
    category: "Technology",
    description: "Developing user-friendly mobile applications for iOS and Android.",
    image: "app_dev.png",
    icon: <FaMobileAlt className="text-4xl text-indigo-600" />,
  },
  {
    id: 6,
    title: "Cloud Solutions",
    category: "Technology",
    description: "Offering scalable and secure cloud solutions to streamline your business.",
    image: "cloud.webp",
    icon: <FaCloud className="text-4xl text-gray-600" />,
  },
];

const Services = () => {
  return (
    <div className="max-w-7xl mx-auto py-0 relative px-4">
      <div className="relative mb-16">
        <h2 className="text-5xl font-bold text-blue-600 text-center mb-4 mt-24">
          Our Premium Services
        </h2>
        <p className="text-gray-700 text-lg mx-auto w-3/4 md:w-1/2 text-center">
          We offer innovative and reliable solutions to elevate your business to new heights.
        </p>
      </div>
      <Swiper
        modules={[Autoplay]}
        slidesPerView={1}
        spaceBetween={20}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop
        className="px-4"
      >
        {services.map((service) => (
          <SwiperSlide key={service.id}>
            <div className="bg-white p-6 rounded-2xl shadow-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-xl">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover rounded-t-xl mb-4"
              />
              <div className="flex items-center justify-center space-x-4">
                {service.icon}
                <h3 className="text-2xl font-semibold text-gray-800">{service.title}</h3>
              </div>
              <p className="text-blue-500 text-sm">{service.category}</p>
              <p className="text-gray-600 mt-2 text-sm">{service.description}</p>
              
              {/* Register Button */}
              <a 
                href="https://forms.gle/MeNsF8NZyEG7TntW9"
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-center mt-4 bg-blue-600 hover:bg-blue-700 hover:text-white text-white font-medium py-2 px-4 rounded-lg transition-all duration-300"
              >
                Register Now
              </a>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Services;
