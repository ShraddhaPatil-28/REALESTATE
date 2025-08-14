import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { FaWifi, FaUtensils, FaParking, FaSwimmingPool } from "react-icons/fa";
import { MdKitchen, MdOutlineSpa } from "react-icons/md";


import diningArea from "../assets/images/dining_area.jpg";



const initialServices = [
  {
    title: "High-Speed Wi-Fi",
    icon: <FaWifi size={50} />,
    desc: "Enjoy seamless browsing and streaming with our complimentary high-speed Wi-Fi available throughout the hotel premises.",
    bgImg: "assets/image/luxury-Hotel.jpg",
    color: "#00c0ca",
  },
  {
    title: "Modern Kitchen Appliances",
    icon: <MdKitchen size={50} />,
    desc: "Our suites are equipped with state-of-the-art kitchen appliances, perfect for preparing meals during your extended stay.",
    bgImg: "assets/image/luxury-Hotel.jpg",
    color: "#00c0ca",
  },
  {
    title: "Outdoor BBQ Area",
    icon: <FaUtensils size={50} />,
    desc: "Host friends and family at our beautifully designed outdoor BBQ area, ideal for evening grills and social gatherings.",
    bgImg: "assets/image/luxury-Hotel.jpg",
    color: "#00c0ca",
  },
  {
    title: "Secure Parking Space",
    icon: <FaParking size={50} />,
    desc: "Enjoy peace of mind with our secure on-site parking area, monitored 24/7 for your safety and convenience.",
    bgImg: "assets/image/luxury-Hotel.jpg",
    color: "#00c0ca",
  },
];

const additionalServices = [
  {
    title: "Infinity Swimming Pool",
    icon: <FaSwimmingPool size={50} />,
    desc: "Relax and refresh in our infinity-edge swimming pool with panoramic views and luxurious seating.",
    bgImg: "assets/image/luxury-Hotel.jpg",
    color: "#00c0ca",
  },
  {
    title: "Luxury Spa & Wellness",
    icon: <MdOutlineSpa size={50} />,
    desc: "Rejuvenate with our professional spa treatments, steam rooms, and relaxing massage therapies.",
    bgImg: "assets/image/luxury-Hotel.jpg",
    color: "#00c0ca",
  },
];

const Services = () => {
  const [services, setServices] = useState(initialServices);
  const [showButton, setShowButton] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const handleScheduleClick = () => {
    setServices([...services, ...additionalServices]);
    setShowButton(false);
  };
  return (
    <div className="bg-[var(--background)] text-[var(--dark)] font-sans min-h-screen">
      {/* Header Section */}
      <section
        className="relative flex items-center min-h-[300px] bg-center bg-cover text-white"
        data-aos="fade-in"
      >
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{ backgroundImage: `url(${diningArea})` }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-5 max-w-7xl relative z-10">
          <h1 className="text-5xl font-extrabold uppercase tracking-widest">
            SERVICES
          </h1>
        </div>
      </section>

      {/* Services Cards */}
       <div className="bg-[#f5fbff] py-14 px-4 sm:px-8 md:px-16 lg:px-24">
        <div className="grid gap-10 md:grid-cols-2">
          {services.map((service, idx) => (
            <div
              data-aos="fade-up"
              data-aos-delay={idx * 100}
              key={idx}
              className="flex flex-col sm:flex-row bg-white shadow-md rounded overflow-hidden hover:scale-105"
            >
              {/* Image & Icon Block */}
              <div
                className="relative w-full sm:w-48 h-48 sm:h-auto flex-shrink-0"
                style={{
                  backgroundImage: `url(${service.bgImg})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-black opacity-70"></div>
                <div className="relative w-full h-full flex flex-col items-center justify-center text-white group px-2 text-center">
                  <div
                    className="group-hover:text-[color:var(--icon-hover-color)] transition-colors duration-300"
                    style={{ "--icon-hover-color": service.color }}
                  >
                    {service.icon}
                  </div>
                  <p
                    className="text-sm mt-3 font-semibold tracking-wide"
                    style={{ color: service.color }}
                  >
                    {service.title}
                  </p>
                </div>
              </div>

              {/* Description Block */}
              <div className="p-6 flex items-center justify-center w-full">
                <p className="text-[#333] text-base leading-relaxed text-center sm:text-left">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call To Action Button */}
        {showButton && (
          <div data-aos="zoom-in" className="flex justify-center mt-14">
            <button
              onClick={handleScheduleClick}
              className="relative px-10 py-4 text-white tracking-widest uppercase bg-[#3ec2c6] overflow-hidden group font-semibold"
            >
              <span className="relative z-10">SCHEDULE TOUR</span>
              <span className="absolute inset-0 bg-black scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top z-0" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Services;
