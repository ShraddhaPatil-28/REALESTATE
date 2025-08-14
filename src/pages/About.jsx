import React, { useState, useEffect } from "react";
import { FiTrendingUp } from "react-icons/fi";
import BuildingExterior from "../assets/images/house-garden.jpg";
import LuxuryInterior from "../assets/images/img_5.jpg";
import Skyscrapers from "../assets/images/dining_area.jpg";
import bgImage from "../assets/images/modern-room.jpg";
import diningArea from "../assets/images/luxury-Hotel.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

function About() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const [squareFeet, setSquareFeet] = useState(0);
  const [apartments, setApartments] = useState(0);
  const [bedrooms, setBedrooms] = useState(0);

  useEffect(() => {
    const animateValue = (start, end, setter, duration = 2000) => {
      const range = end - start;
      const increment = end > start ? 1 : -1;
      const stepTime = Math.abs(Math.floor(duration / range));
      let current = start;

      const timer = setInterval(() => {
        current += increment;
        setter(current);
        if (current === end) {
          clearInterval(timer);
        }
      }, stepTime);
    };

    animateValue(0, 8705, setSquareFeet, 2000);
    animateValue(0, 680, setApartments, 1500);
    animateValue(0, 926, setBedrooms, 1800);
  }, []);

  const faqs = [
    {
      question: "Breathtaking Architecture Designed",
      answer:
        "Our architecture blends modern design with sustainability, creating breathtaking and functional living spaces.",
    },
    {
      question: "Let’s Do The Right Thing Now",
      answer:
        "We are committed to responsible building practices that respect the environment and community.",
    },
    {
      question: "Arcade Corner And Golf Simulator",
      answer:
        "Experience top-tier amenities including an arcade corner and a golf simulator designed to entertain residents of all ages. Enjoy modern lifestyle conveniences right at your doorstep.",
    },
    {
      question: "Community-First Approach",
      answer:
        "We put people first by designing spaces that foster belonging, safety, and connection among all residents.",
    },
    {
      question: "Smart Home Integration",
      answer:
        "Our apartments feature smart home systems that provide security, energy savings, and convenience at your fingertips.",
    },
  ];

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="bg-[var(--background)] text-[var(--dark)] font-sans overflow-x-hidden">
      {/* Hero Section */}
      <section
        className="relative flex items-center min-h-[300px] bg-center bg-cover text-white"
        data-aos="fade-in"
      >
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{ backgroundImage: `url(${diningArea})` }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-6 sm:px-10 md:px-16 lg:px-20 max-w-7xl relative z-10">
          <h1 className="text-5xl font-extrabold uppercase tracking-widest">
            ABOUT US
          </h1>
        </div>
      </section>

      {/* Section 1 */}
      <section
        className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 lg:px-20 py-15 flex flex-col md:flex-row items-center gap-14"
        data-aos="fade-right"
      >
        <div className="md:w-1/2 text-left" data-aos="fade-up" data-aos-delay="100">
          <p className="text-[var(--accent)] uppercase text-sm font-semibold mb-3">
            Learn About Us
          </p>
          <h2 className="text-4xl font-extrabold leading-tight mb-7">
            Introducing a New Complex
          </h2>
          <p className="text-[var(--muted)] max-w-md mb-5">
            Discover our latest state-of-the-art residential complex, designed
            for comfort and modern living. Strategically located in the heart
            of the city, our complex offers a blend of luxury, convenience, and
            sustainability.
          </p>
          <p className="text-[var(--muted)] max-w-md">
            Each apartment is crafted with high-quality materials and smart
            layouts, ensuring your home feels spacious and welcoming. Join a
            community that values excellence and lifestyle.
          </p>
        </div>
        <div className="md:w-1/2" data-aos="zoom-in">
          <img
            src={BuildingExterior}
            alt="Modern residential complex building"
            className="rounded-lg w-full shadow-lg object-cover"
            style={{ maxHeight: "400px" }}
          />
        </div>
      </section>

      {/* Section 2 */}
      <section
        className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 lg:px-20 py-10 flex flex-col md:flex-row items-center gap-14 bg-white"
        data-aos="fade-left"
      >
        <div className="md:w-1/2 order-2 md:order-1" data-aos="zoom-in-left">
          <img
            src={LuxuryInterior}
            alt="Luxury apartment living room"
            className="rounded-lg w-full shadow-lg object-cover"
            style={{ maxHeight: "400px" }}
          />
        </div>
        <div
          className="md:w-1/2 order-1 md:order-2 text-left"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          <p className="text-[var(--accent)] uppercase text-sm font-semibold mb-3">
            Luxury Apartments
          </p>
          <h2 className="text-4xl font-extrabold leading-tight mb-7">
            Get to Know Us & Our Story
          </h2>
          <p className="text-[var(--muted)] max-w-md mb-5">
            Founded over 20 years ago, our company has been committed to
            transforming urban living by creating exceptional residential
            spaces. We blend architectural innovation with sustainable practices
            to build homes that inspire.
          </p>
          <p className="text-[var(--muted)] max-w-md">
            Our team of experts works closely with residents and communities to
            deliver spaces that are not only beautiful but functional and
            eco-friendly.
          </p>
        </div>
      </section>

      {/* Section 3 */}
      <section
        className="relative max-w-7xl mx-auto px-6 sm:px-10 md:px-16 lg:px-20 py-20 bg-cover bg-center text-white flex flex-col md:flex-row justify-center items-center gap-24 text-center md:text-left"
        style={{ backgroundImage: `url(${bgImage})` }}
        data-aos="zoom-in-up"
      >
        <div className="absolute inset-0 bg-black opacity-70 z-0"></div>
        <div className="relative z-10 flex flex-col md:flex-row justify-center items-center gap-24 w-full">
          <div
            className="flex items-center gap-2 text-[var(--accent)] uppercase text-sm font-semibold mb-3"
            data-aos="fade-right"
          >
            <FiTrendingUp className="text-9xl hover:scale-110 hover:text-yellow-400 transition duration-300 cursor-pointer" />
            <span>Fun Facts</span>
          </div>
          <h2 className="text-4xl font-extrabold mb-10" data-aos="fade-up">
            Numbers Speak Everything
          </h2>
          <div className="flex flex-col sm:flex-row gap-16">
            {[squareFeet, apartments, bedrooms].map((num, idx) => (
              <div key={idx} data-aos="zoom-in" data-aos-delay={idx * 200}>
                <div className="mb-3 text-5xl font-mono hover:scale-110 hover:text-yellow-400 transition duration-300 cursor-pointer">
                  {num}
                </div>
                <p className="uppercase text-sm tracking-wide">
                  {idx === 0
                    ? "Square Feet"
                    : idx === 1
                    ? "Apartments"
                    : "Bedrooms"}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 */}
      <section
        data-aos="fade-right"
        className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 lg:px-20 py-20 bg-background text-[var(--dark)] flex flex-col md:flex-row gap-16 items-stretch"
      >
        <div className="md:w-1/2 flex-shrink-0 flex flex-col">
          <p className="text-[var(--accent)] uppercase text-sm font-semibold mb-3">
            Frequently Asked Questions
          </p>
          <h2 className="text-4xl font-extrabold leading-tight mb-10">
            Have Any Question?
          </h2>
          <img
            src={Skyscrapers}
            alt="City skyscrapers"
            className="rounded-lg w-full shadow-lg object-cover flex-grow"
            style={{ minHeight: "400px" }}
          />
        </div>

        <div data-aos="fade-left" className="md:w-1/2 flex flex-col space-y-5">
          {faqs.map((faq, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div
                key={index}
                className={`rounded-md shadow p-6 border border-gray-300 transition-colors duration-300 hover:scale-105 ${
                  isOpen ? "bg-gray-900 text-white" : "bg-white text-gray-900"
                }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className={`w-full flex justify-between items-center font-semibold text-left focus:outline-none ${
                    isOpen ? "text-white" : "text-gray-900"
                  }`}
                >
                  {faq.question}
                  <span className="text-2xl font-bold">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                {isOpen && (
                  <p className="mt-5 leading-relaxed text-white">{faq.answer}</p>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default About;
