import React, { useEffect } from "react";
import propertyImg from "../assets/images/img5.jpg";
import teamImage from "../assets/images/woodenroom.jpg";
import diningArea from "../assets/images/diningarea.jpg";
import livingRoom from "../assets/images/livingroom.jpg";
import luxuryHotel from "../assets/images/luxuryhotel.jpg";
import modernOffice from "../assets/images/modernoffice.jpg";
import room from "../assets/images/room.jpg";
import houseGarden from "../assets/images/housegarden.jpg";
import { Link } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";
import { HiLocationMarker, HiCalendar } from "react-icons/hi";

const Property = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const properties = [
    {
      slug: "riverside-tech-hub",
      status: "Completed",
      type: "COMMERCIAL",
      title: "Riverside Tech Hub",
      description: "Modern tech office with green features.",
      location: "Mumbai, MH",
      duration: "16 Months",
      image: propertyImg,
    },
    {
      slug: "skyline-urban-lofts",
      status: "Ongoing",
      type: "RESIDENTIAL",
      title: "Skyline Urban Lofts",
      description: "Luxury high-rise apartments with views.",
      location: "Bangalore, KA",
      duration: "14 Months",
      image: teamImage,
    },
    {
      slug: "greentech-logistics-center",
      status: "Planned",
      type: "INDUSTRIAL",
      title: "GreenTech Logistics Center",
      description: "Eco-friendly logistics hub.",
      location: "Pune, MH",
      duration: "20 Months",
      image: diningArea,
    },
    {
      slug: "ocean-breeze-villas",
      status: "Completed",
      type: "RESIDENTIAL",
      title: "Ocean Breeze Villas",
      description: "Coastal homes with private beach.",
      location: "Goa, GA",
      duration: "12 Months",
      image: livingRoom,
    },
    {
      slug: "midtown-business-park",
      status: "Ongoing",
      type: "COMMERCIAL",
      title: "Midtown Business Park",
      description: "Co-working and conference spaces.",
      location: "Hyderabad, TS",
      duration: "18 Months",
      image: luxuryHotel,
    },
    {
      slug: "autoparts-factory",
      status: "Completed",
      type: "INDUSTRIAL",
      title: "AutoParts Factory",
      description: "Automated parts manufacturing.",
      location: "Ahmedabad, GJ",
      duration: "24 Months",
      image: modernOffice,
    },
    {
      slug: "lakeview-apartments",
      status: "Planned",
      type: "RESIDENTIAL",
      title: "Lakeview Apartments",
      description: "Modern lakeside living.",
      location: "Chennai, TN",
      duration: "15 Months",
      image: room,
    },
    {
      slug: "techsquare-park",
      status: "Ongoing",
      type: "COMMERCIAL",
      title: "TechSquare Park",
      description: "Corporate HQ with smart facilities.",
      location: "Delhi, DL",
      duration: "22 Months",
      image: houseGarden,
    },
  ];

  return (
    <div className="bg-[var(--background)] text-[var(--dark)] font-sans min-h-screen">
      {/* Header */}
      <section
        className="relative flex items-center min-h-[300px] bg-center bg-cover text-white"
        data-aos="fade-in"
      >
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{ backgroundImage: `url(${livingRoom})` }}
        />
        <div className="absolute inset-0 bg-black opacity-50" />
        <div className="container mx-auto px-5 max-w-7xl relative z-10">
          <h1 className="text-5xl font-extrabold uppercase tracking-widest text-white">
            Property
          </h1>
        </div>
      </section>

      {/* Grid of Properties */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-10 px-16 bg-[var(--background)]">
        {properties.map((prop, index) => (
          <div
            key={index}
            className="relative group"
            data-aos="zoom-in-up"
            data-aos-delay={index * 100}
          >
            {/* Mobile wrapper link */}
            <Link
              to={`/property/${prop.slug}`}
              className="absolute inset-0 z-10 block sm:hidden"
            ></Link>

            {/* Card Content */}
            <div className="bg-[var(--card)] rounded-lg shadow-md hover:shadow-xl hover:scale-[1.02] overflow-hidden relative transition-all duration-300 ease-in-out">
              {/* Image */}
              <div className="relative">
                <img
                  src={prop.image}
                  alt={prop.title}
                  className="w-full h-48 object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-30 transition duration-300 z-10" />

                {/* Status Badge */}
                <span
                  className={`absolute top-4 left-4 text-white text-sm font-bold px-4 py-1 rounded-full opacity-0 group-hover:opacity-100 transition duration-300 z-20 ${
                    prop.status === "Completed"
                      ? "bg-[var(--accent)]"
                      : prop.status === "Ongoing"
                      ? "bg-orange-400"
                      : "bg-[var(--muted)]"
                  }`}
                >
                  {prop.status.toUpperCase()}
                </span>

                {/* Desktop Button */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out z-20 hidden sm:block">
                  <Link to={`/property/${prop.slug}`}>
                    <button className="bg-[var(--primary)] text-white font-semibold px-6 py-2 rounded-full text-sm shadow-lg">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>

              {/* Text Info */}
              <div className="p-4">
                <p className="text-xs text-[var(--primary)] font-semibold uppercase mb-1">
                  {prop.type}
                </p>
                <h3 className="text-lg text-[var(--dark)] font-bold">{prop.title}</h3>
                <p className="text-sm text-[var(--muted)] mb-4">{prop.description}</p>
                <div className="flex justify-between items-center mt-4 text-sm text-secondary">
                  <div className="flex items-center space-x-1 group/icon">
                    <HiLocationMarker className="w-4 h-4 text-[var(--primary)] group-hover/icon:text-[var(--accent)] transition duration-200" />
                    <span>{prop.location}</span>
                  </div>
                  <div className="flex items-center space-x-1 group/icon">
                    <HiCalendar className="w-4 h-4 text-[var(--primary)] group-hover/icon:text-[var(--accent)] transition duration-200" />
                    <span>{prop.duration}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Property;
