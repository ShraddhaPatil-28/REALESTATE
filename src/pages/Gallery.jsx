import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

// Images
import propertyImg from "../assets/images/img5.jpg";
import teamImage from "../assets/images/woodenroom.jpg";
import diningArea from "../assets/images/diningarea.jpg";
import livingRoom from "../assets/images/livingroom.jpg";
import luxuryHotel from "../assets/images/luxuryhotel.jpg";
import modernOffice from "../assets/images/modernoffice.jpg";
import modernRoom from "../assets/images/modernroom.jpg";
import houseRoom from "../assets/images/houseroom.jpg";
import gardenDigital from "../assets/images/gardendigital.jpg";
import room from "../assets/images/room.jpg";
import newLivingRoom from "../assets/images/newlivingroom.jpg";
import Float from "../components/FloatContaction";

const Gallery = () => {
  const [isVisible, setIsVisible] = useState(false);
  const portfolioRef = useRef(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Tabs for filtering
  const tabs = ["All", "Commercial", "Residential", "Semi Residential"];

  // All images with categories
  const categoryImages = [
    { id: 1, title: "Property View", category: "Residential", image: propertyImg },
    { id: 2, title: "Team Room", category: "Commercial", image: teamImage },
    { id: 3, title: "Dining Area", category: "Residential", image: diningArea },
    { id: 4, title: "Living Room", category: "Residential", image: livingRoom },
    { id: 5, title: "Luxury Hotel", category: "Commercial", image: luxuryHotel },
    { id: 6, title: "Modern Office", category: "Commercial", image: modernOffice },
    { id: 7, title: "Modern Room", category: "Residential", image: modernRoom },
    { id: 8, title: "House Room", category: "Semi Residential", image: houseRoom },
    { id: 9, title: "Garden Digital", category: "Semi Residential", image: gardenDigital },
    { id: 10, title: "Room", category: "Residential", image: room },
    { id: 11, title: "New Living Room", category: "Residential", image: newLivingRoom },
  ];

  // Filtered projects
  const filteredProjects =
    selectedCategory === "All"
      ? categoryImages
      : categoryImages.filter((item) => item.category === selectedCategory);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  useEffect(() => {
    const currentPortfolioRef = portfolioRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: "-50px 0px" }
    );

    if (currentPortfolioRef) observer.observe(currentPortfolioRef);

    return () => {
      if (currentPortfolioRef) observer.unobserve(currentPortfolioRef);
    };
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative flex items-center min-h-[300px] bg-center bg-cover text-white"
        data-aos="fade-in"
      >
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{ backgroundImage: `url(${room})` }}
        />
        <div className="absolute inset-0 bg-black opacity-50" />
        <div className="container mx-auto px-6 sm:px-10 md:px-16 lg:px-20 max-w-7xl relative z-10">
          <h1 className="text-5xl font-extrabold uppercase tracking-widest text-white">
            GALLERY
          </h1>
        </div>
      </section>

      {/* Portfolio */}
      <div
        ref={portfolioRef}
        className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-10  px-4"
      >
        <div className="max-w-7xl mx-auto">
         

          {/* Filter Tabs */}
          <div
            className="flex flex-wrap justify-center gap-4 mt-[30px] mb-8 px-4"
            data-aos="fade-up"
          >
            {tabs.map((cat, idx) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={idx}
                  onClick={() => handleCategoryClick(cat)}
                  className={`relative px-6 py-3 text-white tracking-widest uppercase overflow-hidden group hover:scale-105 transition-transform duration-300 ${
                    isActive ? "bg-black" : "bg-[#3ec2c6]"
                  }`}
                >
                  <span className="relative z-10">{cat}</span>
                  {!isActive && (
                    <span className="absolute inset-0 bg-black transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top z-0"></span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className={`group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-700 ease-out transform hover:-translate-y-3 hover:scale-105 bg-white ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                }`}
                style={{
                  transitionDelay: isVisible ? `${400 + index * 100}ms` : "0ms",
                }}
              >
                <div className="aspect-[4/5] overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-500/30 to-green-500/30 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-xl font-bold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-white/90 text-sm font-medium">
                    {project.category}
                  </p>
                  <Link
                    to="/property"
                    className="inline-block mt-3 text-teal-300 text-xs font-medium hover:underline"
                  >
                    View Project →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* No Data */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-16 text-gray-400 text-xl font-medium">
              No projects found in this category
            </div>
          )}
        </div>
      </div>

      <Float />
    </>
  );
};

export default Gallery;
