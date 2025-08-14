// pages/PropertyDetail.jsx
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ImageSlider from "../Components/ImageSlider";

// Images
import propertyImg from "../assets/images/img5.jpg";
import teamImage from "../assets/images/woodenroom.jpg";
import diningArea from "../assets/images/diningarea.jpg";
import livingRoom from "../assets/images/livingroom.jpg";
import luxuryHotel from "../assets/images/luxuryhotel.jpg";
import modernOffice from "../assets/images/modernoffice.jpg";
import room from "../assets/images/room.jpg";
import houseGarden from "../assets/images/gardendigital.jpg";

import floorImage from "../assets/Images/floorsplan.jpg";

// Property Data
const allProperties = [
  {
    slug: "riverside-tech-hub",
    images: [propertyImg, teamImage, diningArea],
    meta: "Modern tech office with green features",
    title: "Riverside Tech Hub",
    priceEstimate: "₹5 Cr",
    floor: 3,
    rooms: 12,
    windows: null,
    totalArea: "10,000 sq.ft",
    carpetArea: "7,500 sq.ft",
    parking: true,
    furnishing: "Semi-Furnished",
    flooring: "Tile",
    status: "Completed",
    amenities: ["CCTV Surveillance", "Power Backup", "Central AC"],
  },
  {
    slug: "skyline-urban-lofts",
    images: [teamImage, propertyImg, luxuryHotel],
    meta: "Luxury high-rise apartments with views",
    title: "Skyline Urban Lofts",
    priceEstimate: "₹2.8 Cr",
    floor: 10,
    rooms: 6,
    windows: null,
    totalArea: "2,500 sq.ft",
    carpetArea: "1,800 sq.ft",
    parking: true,
    furnishing: "Fully Furnished",
    flooring: "Marble",
    status: "Ongoing",
    amenities: ["Swimming Pool", "Gym", "Clubhouse", "24x7 Security"],
  },
  {
    slug: "greentech-logistics-center",
    images: [diningArea, modernOffice, propertyImg],
    meta: "Eco-friendly logistics hub",
    title: "GreenTech Logistics Center",
    priceEstimate: "₹12 Cr",
    floor: 2,
    rooms: 8,
    windows: null,
    totalArea: "50,000 sq.ft",
    carpetArea: "42,000 sq.ft",
    parking: false,
    furnishing: "Bare Shell",
    flooring: "Concrete",
    status: "Planned",
    amenities: ["High Ceiling", "Loading Dock", "Industrial Zoning"],
  },
  {
    slug: "ocean-breeze-villas",
    images: [livingRoom, diningArea, room],
    meta: "Coastal homes with private beach",
    title: "Ocean Breeze Villas",
    priceEstimate: "₹3.2 Cr",
    floor: 2,
    rooms: 7,
    windows: null,
    totalArea: "3,200 sq.ft",
    carpetArea: "2,600 sq.ft",
    parking: true,
    furnishing: "Fully Furnished",
    flooring: "Hardwood",
    status: "Completed",
    amenities: ["Private Beach", "Garden", "Jacuzzi", "Terrace View"],
  },
  {
    slug: "midtown-business-park",
    images: [luxuryHotel, modernOffice, teamImage],
    meta: "Co-working and conference spaces",
    title: "Midtown Business Park",
    priceEstimate: "₹8.5 Cr",
    floor: 5,
    rooms: 20,
    windows: null,
    totalArea: "15,000 sq.ft",
    carpetArea: "11,000 sq.ft",
    parking: true,
    furnishing: "Furnished",
    flooring: "Vinyl",
    status: "Ongoing",
    amenities: ["Meeting Rooms", "Pantry", "Central AC", "High-Speed WiFi"],
  },
  {
    slug: "autoparts-factory",
    images: [modernOffice, diningArea, propertyImg],
    meta: "Automated parts manufacturing",
    title: "AutoParts Factory",
    priceEstimate: "₹15 Cr",
    floor: 1,
    rooms: 10,
    windows: null,
    totalArea: "60,000 sq.ft",
    carpetArea: "52,000 sq.ft",
    parking: false,
    furnishing: "Bare Shell",
    flooring: "Industrial Concrete",
    status: "Completed",
    amenities: ["24x7 Security", "Factory Shed", "Ample Loading Space"],
  },
  {
    slug: "lakeview-apartments",
    images: [room, houseGarden, propertyImg],
    meta: "Modern lakeside living",
    title: "Lakeview Apartments",
    priceEstimate: "₹1.7 Cr",
    floor: 6,
    rooms: 5,
    windows: null,
    totalArea: "2,800 sq.ft",
    carpetArea: "2,200 sq.ft",
    parking: true,
    furnishing: "Semi-Furnished",
    flooring: "Vitrified Tiles",
    status: "Planned",
    amenities: ["Lake View", "Children's Park", "Lift", "Power Backup"],
  },
  {
    slug: "techsquare-park",
    images: [houseGarden, propertyImg, teamImage],
    meta: "Corporate HQ with smart facilities",
    title: "TechSquare Park",
    priceEstimate: "₹9 Cr",
    floor: 4,
    rooms: 18,
    windows: null,
    totalArea: "20,000 sq.ft",
    carpetArea: "15,000 sq.ft",
    parking: true,
    furnishing: "Furnished",
    flooring: "Granite",
    status: "Ongoing",
    amenities: ["Smart Lighting", "Boardrooms", "Elevators", "EV Parking"],
  },
];

const PropertyDetail = () => {
  const { slug } = useParams();
  const [activeTab, setActiveTab] = useState("description");
  const [review, setReview] = useState({
    rating: 0,
    name: "",
    email: "",
    text: "",
  });

  const property = allProperties.find(
    (p) => p.slug.toLowerCase() === slug?.toLowerCase()
  );

  if (!property) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
        <div className="p-10 text-center bg-white rounded-lg shadow-xl text-red-500 text-2xl font-semibold">
          Property not found
        </div>
      </div>
    );
  }

  const handleReviewChange = (e) => {
    const { name, value } = e.target;
    setReview((prev) => ({ ...prev, [name]: value }));
  };

  const handleStarClick = (star) => {
    setReview((prev) => ({ ...prev, rating: star }));
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks for your review, ${review.name}!`);
    setReview({ rating: 0, name: "", email: "", text: "" });
  };

  return (



    <div className="min-h-screen bg-white font-sans text-gray-800">

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
            Property Details
          </h1>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Image Slider and Main Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12">
          {/* Image Slider */}
          <div>
            <div className="shadow-lg rounded-lg overflow-hidden">
              <ImageSlider images={property.images} />
            </div>
          </div>
          {/* Main Info */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col justify-between">
            <div>
              <h1 className="text-4xl font-extrabold text-gray-900 mb-2">
                {property.priceEstimate}
              </h1>
              <p className="text-gray-600 mb-6 text-lg font-light">
                {property.meta}. This property comes with{" "}
                <span className="font-medium text-teal-600">
                  {property.amenities?.join(", ")}
                </span>{" "}
                and is located in a prime area.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    htmlFor="furnishing"
                    className="block text-sm font-semibold text-gray-700 mb-1"
                  >
                    Furnishing
                  </label>
                  <select
                    id="furnishing"
                    className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all duration-300 ease-in-out"
                    defaultValue={property.furnishing}
                  >
                    <option disabled>Choose an option</option>
                    <option>{property.furnishing}</option>
                    <option>Semi-Furnished</option>
                    <option>Fully Furnished</option>
                    <option>Bare Shell</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="space-y-3 p-4 bg-gray-50 rounded-lg border border-gray-200">
              <p className="text-sm">
                <strong className="font-semibold text-gray-900">Status:</strong>{" "}
                {property.status}
              </p>
              <p className="text-sm">
                <strong className="font-semibold text-gray-900">
                  Total Area:
                </strong>{" "}
                {property.totalArea}
              </p>
              <p className="text-sm">
                <strong className="font-semibold text-gray-900">
                  Carpet Area:
                </strong>{" "}
                {property.carpetArea}
              </p>
              <p className="text-sm">
                <strong className="font-semibold text-gray-900">
                  Flooring:
                </strong>{" "}
                {property.flooring}
              </p>
            </div>
          </div>
        </div>
        {/*
          Tab Navigation
        */}
    <div className="mb-6 border-b">
        <div className="flex flex-wrap gap-4">
          {["description", "additional", "reviews"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative px-6 py-3 uppercase font-semibold overflow-hidden group ${
                activeTab === tab ? "text-white bg-black" : "text-white bg-[#3ec2c6]"
              }`}
            >
              <span className="relative z-10">
                {tab === "description"
                  ? "Description"
                  : tab === "additional"
                  ? "Additional Information"
                  : "Reviews (0)"}
              </span>
              <span className="absolute inset-0 bg-black scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top z-0" />
            </button>
          ))}
        </div>
      </div>
        {/* Tab Content */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          {activeTab === "description" && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
              <div>
                <table className="w-full text-left border-collapse mb-6">
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 font-semibold text-gray-700 w-1/2">
                        Floor
                      </td>
                      <td className="py-3 text-gray-600">{property.floor}</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 font-semibold text-gray-700">
                        Rooms
                      </td>
                      <td className="py-3 text-gray-600">{property.rooms}</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 font-semibold text-gray-700">
                        Windows
                      </td>
                      <td className="py-3 text-gray-600">
                        {property.windows || "N/A"}
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 font-semibold text-gray-700">
                        Total Area
                      </td>
                      <td className="py-3 text-gray-600">
                        {property.totalArea}
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 font-semibold text-gray-700">
                        Parking
                      </td>
                      <td className="py-3 text-gray-600">
                        {property.parking ? "Yes" : "No"}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p className="text-gray-600 leading-relaxed">
                  This residence features high ceilings, natural lighting, a
                  modular kitchen, and secure access. It is perfect for families
                  or working professionals looking for a modern living experience
                  with convenience and connectivity.
                </p>
              </div>
              <div>
                <img
                  src={floorImage}
                  alt="Floor Plan"
                  className="w-full h-auto max-h-96 object-contain rounded-lg shadow-md"
                />
              </div>
            </div>
          )}

          {activeTab === "additional" && (
            <div className="max-w-xl">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">
                Additional Details
              </h2>
              <table className="w-full text-left border-collapse">
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 font-semibold text-gray-700 w-1/2">
                      Floors Available
                    </td>
                    <td className="py-3 italic text-gray-600">1, 2, 3</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-semibold text-gray-700">
                      Furniture Style
                    </td>
                    <td className="py-3 italic text-gray-600">
                      Classic, Modern
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}

          {activeTab === "reviews" && (
            <div className="max-w-3xl space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-2">Add a Review</h2>
                <p className="text-gray-600 text-sm">
                  Your email address will not be published. Required fields are
                  marked *
                </p>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-lg font-medium text-gray-700">
                  Your Rating:
                </span>
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => handleStarClick(star)}
                    className={`text-3xl transition-colors duration-200 ${
                      star <= review.rating
                        ? "text-yellow-400"
                        : "text-gray-300 hover:text-yellow-300"
                    }`}
                    aria-label={`${star} Star${star > 1 ? "s" : ""}`}
                  >
                    ★
                  </button>
                ))}
              </div>

              <form onSubmit={handleReviewSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block font-semibold mb-2 text-gray-700"
                  >
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={review.name}
                    onChange={handleReviewChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition-shadow"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block font-semibold mb-2 text-gray-700"
                  >
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={review.email}
                    onChange={handleReviewChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition-shadow"
                  />
                </div>

                <div>
                  <label
                    htmlFor="text"
                    className="block font-semibold mb-2 text-gray-700"
                  >
                    Review <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="text"
                    name="text"
                    required
                    rows={5}
                    value={review.text}
                    onChange={handleReviewChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition-shadow"
                  />
                </div>

                <button
                  type="submit"
                  className="px-8 py-3 bg-teal-600 text-white font-semibold rounded-lg shadow-md hover:bg-teal-700 transition-colors duration-300 ease-in-out transform hover:scale-105"
                >
                  Submit Review
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;