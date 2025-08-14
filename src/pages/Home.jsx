import React, {useEffect, useState} from "react";
import Slider from "react-slick";
import {FaWifi, FaSwimmingPool, FaParking, FaUtensils, FaTshirt, FaCogs } from "react-icons/fa";

import { useNavigate } from 'react-router-dom';
import {
  FaMapMarkerAlt,
  FaHome,
  FaUserTie,
  FaDollarSign,
  FaCalendarAlt,
  FaSmile,
  FaBuilding,
  FaClock,
  FaUsers,
  FaHandshake,
  FaKey,
  FaMoneyCheckAlt,
} from "react-icons/fa";

import propertyImg from "../assets/Images/img_5.jpg";
import teamImage from "../assets/Images/wooden-room.jpg";
import diningArea from "../assets/Images/dining_area.jpg";
import livingRoom from "../assets/Images/luxury-living-room.jpg";
import luxuryHotel from "../assets/images/luxury-Hotel.jpg";
import modernOffice from "../assets/Images/modern-office.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom'


const Home = () => {
  useEffect(() => {
  AOS.init({ duration: 1000, once: true });
}, []);

  // Counter states
  const [happyClients, setHappyClients] = useState(0);
  const [propertiesSold, setPropertiesSold] = useState(0);
  const [supportHours, setSupportHours] = useState(0);
  const [teamMembers, setTeamMembers] = useState(0);

  // Start counters
  useEffect(() => {
    const counters = [
      { stateSetter: setHappyClients, target: 1250 },
      { stateSetter: setPropertiesSold, target: 3100 },
      { stateSetter: setSupportHours, target: 12000 },
      { stateSetter: setTeamMembers, target: 45 },
    ];

    counters.forEach(({ stateSetter, target }) => {
      let count = 0;
      const increment = target / 100;
      const interval = setInterval(() => {
        count += increment;
        if (count >= target) {
          count = target;
          clearInterval(interval);
        }
        stateSetter(Math.floor(count));
      }, 50);
    });
  }, []); 

    const navigate = useNavigate();
  // Property
  const properties = [
    {
      title: "Modern Mumbai Apartment",
      location: "Apartment - Mumbai",
      description:
        "Experience luxurious urban living in our ultra-modern apartments located in the heart.",
      price: "₹1,50,00,000",
      image: livingRoom,
    },
    {
      title: "Contemporary Bengaluru Flats",
      location: "Apartment - Bengaluru",
      description:
        "Stylish and spacious flats offering modern amenities and vibrant city life in Bengaluru.",
      price: "₹85,00,000",
      image: luxuryHotel,
    },
    {
      title: "Chennai Suburban Villas",
      location: "Villa - Chennai",
      description:
        "Enjoy peaceful suburban living in spacious villas with private gardens and serene surroundings.",
      price: "₹1,20,00,000",
      image: modernOffice,
    },
  ];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  // Remove the navigation arrows by setting them to null
  Arrow: false,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 2 } },
    { breakpoint: 768, settings: { slidesToShow: 1 } },
  ],
};

  
  //services section
  const services = [
    {
      icon: <FaHome className="text-3xl text-[var(--primary)]" />,
      title: "Buy Property",
      description:
        "Explore a wide range of residential and commercial properties for purchase with expert guidance.",
    },
    {
      icon: <FaKey className="text-3xl text-[var(--primary)]" />,
      title: "Rent Property",
      description:
        "Find the perfect rental home or apartment to suit your lifestyle and budget in prime locations.",
    },
    {
      icon: <FaHandshake className="text-3xl text-[var(--primary)]" />,
      title: "Sale Property",
      description:
        "List your property with us and get maximum exposure, fast closings, and professional support.",
    },
    {
      icon: <FaMoneyCheckAlt className="text-3xl text-[var(--primary)]" />,
      title: "Mortgage Assistance",
      description:
        "Our experts help you secure the best mortgage rates and financing solutions hassle-free.",
    },
  ];
  return (
    <>
    <div className="overflow-x-hidden overflow-y-hidden">
      {/* Hero Section */}
      <section data-aos="fade-in"
        className="relative bg-cover bg-center bg-no-repeat min-h-screen text-white"
        style={{ backgroundImage: `url(${diningArea})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 flex items-center justify-center px-6 py-20 min-h-screen">
          <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-block bg-[var(--card)] text-[var(--primary)] font-bold px-4 py-1 rounded-full mb-4 shadow-md">
                FIND YOUR DREAM HOME
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-white">
                Discover Modern <br /> Living Spaces
              </h1>
              <p className="text-lg text-[var(--muted)] mt-6 max-w-xl">
                Explore our curated listings of stunning properties in prime
                locations designed for comfort, style, and modern living.
                Whether you're buying or renting, we've got your perfect match.
              </p>
             <div className="mt-8 flex flex-wrap items-center gap-4">
      <button
        className="bg-[var(--primary)] hover:bg-[var(--accent)] transition-transform duration-300 hover:scale-105 inline-block text-white px-6 py-3 rounded-md font-semibold shadow-lg "
        onClick={() => navigate('/property')}
      >
        Browse Properties
      </button>

      <button
        className="flex items-center gap-2 text-[var(--accent)] transition-transform duration-300 hover:scale-105 hover:text-white font-semibold"
        onClick={() => navigate('/contact')}
      >
        <FaCalendarAlt className="text-xl" /> Schedule a Visit
      </button>
    </div>
            </div>

              <div >
         
              <div className="grid grid-cols-3 gap-6">
                
              <div className="bg-black p-6 rounded-lg border border-cyan-500/20 hover:border-cyan-400/50 transition text-center">
                <div className="text-cyan-300 mb-4 flex justify-center"><FaWifi className="text-2xl animate-bounce [animation-duration:1s] " />
            </div>
                <p className="text-sm text-white font-semibold uppercase">Free Height Speed Wi-Fi</p>
              </div>
        
              <div className="bg-black p-6 rounded-lg border border-teal-500/20 hover:border-teal-400/50 transition text-center">
                <div className="text-cyan-300 mb-4 flex justify-center"><FaCogs className="text-2xl animate-spin [animation-duration:2s]" /></div>
                <p className="text-sm text-white font-semibold uppercase">Luxury Appliances</p>
              </div>
        
              <div className="bg-black p-6 rounded-lg border border-teal-500/20 hover:border-cyan-400/50 transition text-center">
                <div className="text-cyan-300 mb-4 flex justify-center"><FaUtensils className="text-2xl animate-bounce [animation-duration:2s]" /></div>
                <p className="text-sm text-white font-semibold uppercase">Outdoor BBQ Area</p>
              </div>
        
              <div className="bg-black p-6 rounded-lg border border-teal-500/20 hover:border-cyan-400/50 transition text-center">
                <div className="text-teal-300 mb-4 flex justify-center"><FaParking className="text-2xl animate-spin [animation-duration:2s]" /></div>
                <p className="text-sm text-white font-semibold uppercase">Parking Place</p>
              </div>
        
              <div className="bg-black p-6 rounded-lg border border-teal-500/20 hover:border-cyan-400/50 transition text-center">
                <div className="text-cyan-300 mb-4 flex justify-center"><FaSwimmingPool className="text-2xl animate-bounce [animation-duration:1s]" /></div>
                <p className="text-sm text-white font-semibold uppercase">Swimming Pool</p>
              </div>
        
              <div className="bg-black p-6 rounded-lg border border-teal-500/20 hover:border-cyan-400/50 transition text-center col-span-3 sm:col-span-1 md:col-span-3 lg:col-span-1">
                <div className="text-cyan-300 mb-4 flex justify-center"><FaTshirt className="text-2xl animate-spin [animation-duration:2s]" /></div>
                <p className="text-sm text-white font-semibold uppercase">Washer – Dryer</p>
              </div>
              </div>
            </div>
             
          </div>
        </div>
      </section>

{/* add section */}

<section
  data-aos="fade-up"
  className="bg-[var(--background)] py-16 px-6 relative z-10"
>
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
    
    {/* Left Image & Info Box */}
    <div className="w-full" data-aos="fade-right">
      <img
        src="src/assets/Images/piechart-cities.jpg"
        alt="City skyline and luxury apartments"
        className="w-full h-auto object-cover rounded-lg shadow-lg"
      />
      <div className="bg-gray-100 mt-5 p-5 rounded-lg shadow-sm text-sm leading-relaxed">
        <p className="text-teal-500 font-medium">
          Your dream home awaits —{" "}
          <span className="text-gray-800 font-semibold">
            experience refined urban living
          </span>{" "}
          at Windsor Apartments.
        </p>
        <p className="text-gray-600 mt-2">
          Modern designs, prime locations, and exceptional amenities combine to
          create a lifestyle that’s uniquely yours.
        </p>
      </div>
    </div>

    {/* Right Text Content */}
    <div
      className="md:w-11/12 w-full text-center md:text-left"
      data-aos="fade-left"
    >
      <p className="text-teal-500 italic font-medium mb-3 tracking-wide">
        Stylish Living
      </p>
      <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6 text-gray-900">
        WHY CHOOSE LUXURY <br /> WINDSOR APARTMENTS?
      </h2>
      <p className="text-base text-gray-600 leading-relaxed mb-8">
        Located in the heart of the city, Windsor Apartments offer unparalleled
        access to shopping, dining, and entertainment. With spacious floor
        plans, state-of-the-art smart home features, and dedicated customer
        service, living here means comfort, convenience, and style.
      </p>
      <a
        href="#"
        className="inline-block bg-teal-500 hover:bg-teal-600 transition-all duration-300 
                   text-white px-8 py-3 text-sm font-semibold tracking-wider rounded-lg 
                   shadow-md hover:shadow-lg hover:scale-105"
      >
        Find Your Home
      </a>
    </div>

  </div>
</section>




      {/* About Section */}
      <section data-aos="fade-up" className="bg-[var(--background)] py-16 px-6 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-[var(--dark)] mb-6 leading-tight">
              Building Trust Through Every Property Deal
            </h2>
            <p className="text-lg text-[var(--secondary)] mb-4">
              At RealtyVista, we help you find your ideal property by combining
              deep market insights with a client-first approach.
            </p>
            <p className="text-[var(--muted)] mb-8">
              Whether it's buying your first home, investing in commercial
              spaces, or renting luxury apartments, our expert team ensures a
              seamless experience backed by transparency and professionalism.
            </p>
          </div>

          {/* Right Image */}
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src={teamImage}
              alt="Real Estate Team"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
     <section data-aos="fade-up" className="bg-[var(--background)] -mt-20 relative z-20 py-16 px-4">
  <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 ">
    {[
      {
        icon: <FaSmile className="text-[var(--primary)] text-3xl mb-3" />,
        title: "Happy Clients",
        value: happyClients,
        description: "Delivering exceptional service & homes",
        borderColor: "border-t-4 border-[var(--primary)]",
      },
      {
        icon: <FaBuilding className="text-[var(--accent)] text-3xl mb-3" />,
        title: "Properties Sold",
        value: propertiesSold,
        description: "Homes, flats, villas & commercial deals",
        borderColor: "border-t-4 border-[var(--accent)]",
      },
      {
        icon: <FaClock className="text-orange-500 text-3xl mb-3" />,
        title: "Support Hours",
        value: supportHours,
        description: "24/7 client support throughout the journey",
        borderColor: "border-t-4 border-orange-500",
      },
      {
        icon: <FaUsers className="text-purple-600 text-3xl mb-3" />,
        title: "Team Members",
        value: teamMembers,
        description: "Experienced agents & property consultants",
        borderColor: "border-t-4 border-purple-600",
      },
    ].map((stat, idx) => (
      <div
        key={idx}
        className={`relative group overflow-hidden rounded-2xl bg-white/20 backdrop-blur-md shadow-2xl p-6 text-center transition-all duration-300 hover:shadow-4xl hover:scale-105`}
      >
        <div className="flex justify-center mb-4 group-hover:scale-105">
          <div className="transition-transform duration-300 group-hover:scale-125 group-hover:rotate-6">
            {stat.icon}
          </div>
        </div>
        <h3 className="text-xl font-bold text-[var(--dark)] group-hover:text-[var(--primary)] transition-colors">
          {stat.title}
        </h3>
        <p className="text-3xl font-extrabold text-[var(--black)] my-2">
          {stat.value.toLocaleString()}+
        </p>
        <p className="text-sm text-[var(--muted)]">{stat.description}</p>
        <div
          className={`absolute bottom-0 left-0 w-full h-1 ${stat.borderColor} scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500`}
        ></div>
      </div>
    ))}
  </div>
</section>


      {/* Property Slider Section */}
      <section className="bg-[var(--background)] py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <Slider {...sliderSettings}>
            {properties.map((property, idx) => (
              <div data-aos="zoom-in-up" data-aos-delay={idx * 100} key={idx} className="px-3">
                <div className="bg-[var(--card)] rounded-2xl shadow-md overflow-hidden h-auto transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-60 object-cover"
                  />
                  <div className="p-5">
                    <p className="text-sm text-muted uppercase tracking-wide">
                      {property.location}
                    </p>
                    <h2 className="text-xl font-semibold text-dark mt-2">
                      {property.title}
                    </h2>
                    <p className="text-muted mt-2">{property.description}</p>
                    <p className="text-[var(--accent)] text-lg font-bold mt-4 cursor-pointer transition-colors duration-300 hover:text-[var(--primary)]">
                      {property.price}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      <section data-aos="fade-up" className="bg-[var(--background)] py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image & card */}
          <div className="relative">
            <img
              src={propertyImg}
              alt="Property Showcase"
              className="rounded-lg shadow-lg w-full h-full object-cover"
            />
            {/* Property Info Card */}
            <div className="absolute bottom-4 left-4 bg-[var(--primary)] text-white p-5 rounded-lg shadow-xl w-[80%] max-w-sm">
              <h3 className="text-lg font-bold mb-1">Sea View Luxury Villa</h3>
              <p className="text-sm">101 Ocean Drive, Miami Beach</p>
              <p className="mt-3">
                <span className="font-bold text-xl">₹3.5 Cr</span>{" "}
                <span className="text-sm">/ Sale</span>
              </p>
              <p className="text-xs mt-2">
                5 Bed, 4 Bath, 2 Garage, 4000 Sq Ft
              </p>
            </div>
          </div>

          {/* Right - Services List */}
          <div>
            {/* <h2 className="text-4xl sm:text-5xl font-bold text-[var(--dark)] mb-10 text-center lg:text-left">
              Our Services
            </h2> */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div data-aos="fade-right" data-aos-delay={index * 100}
                  key={index}
                  className="flex items-start gap-4 bg-[var(--card)] p-5 rounded-lg border border-[var(--border)] hover:shadow-md transition-shadow hover:scale-105"
                >
                  <div className="p-3 rounded-md group">
                    {React.cloneElement(service.icon, {
                      className:
                        "text-3xl text-[var(--muted)] group-hover:text-[var(--primary)] transition-colors duration-300",
                    })}
                  </div>

                  <div>
                    <h4 className="font-semibold text-[var(--dark)] mb-1">
                      {service.title}
                    </h4>
                    <p className="text-[var(--muted)] text-sm">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  );
};

export default Home;
