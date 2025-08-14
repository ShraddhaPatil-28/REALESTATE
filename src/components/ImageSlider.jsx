import { useState, useEffect } from "react";
import {
  AiOutlineLeft,
  AiOutlineRight,
  AiOutlineClose,
} from "react-icons/ai";

const ImageSlider = ({ images, interval = 3000 }) => {
  const [current, setCurrent] = useState(0);
  const [zoomed, setZoomed] = useState(false);

  // Auto slide
  useEffect(() => {
    if (zoomed) return; // pause auto sliding while zoomed

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images, interval, zoomed]);

  // Manual controls
  const prev = () =>
    setCurrent((prev) => (prev - 1 + images.length) % images.length);

  const next = () =>
    setCurrent((prev) => (prev + 1) % images.length);

  return (
    <>
      <div className="relative w-full max-w-7xl mx-auto px-4 py-8 select-none">
        {/* Image (click to zoom) */}
        <img
          src={images[current]}
          alt={`Slide ${current + 1}`}
          onClick={() => setZoomed(true)}
          className="w-full h-96 object-cover rounded-md transition-all duration-700 cursor-pointer"
        />

        {/* Left Arrow */}
        <button
          onClick={prev}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-3 rounded-full bg-white shadow-md hover:bg-primary text-primary hover:text-black transition"
          aria-label="Previous"
        >
          <AiOutlineLeft size={24} />
        </button>

        {/* Right Arrow */}
        <button
          onClick={next}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-3 rounded-full bg-white shadow-md hover:bg-primary text-primary hover:text-black transition"
          aria-label="Next"
        >
          <AiOutlineRight size={24} />
        </button>
      </div>

      {/* Zoom Modal */}
      {zoomed && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl max-h-full rounded-lg overflow-hidden shadow-2xl">
            <img
              src={images[current]}
              alt={`Zoomed Slide ${current + 1}`}
              className="max-w-full max-h-[90vh] object-contain"
            />
            {/* Close Button */}
            <button
              onClick={() => setZoomed(false)}
              className="absolute top-2 right-2 p-2 rounded-full bg-white text-primary hover:bg-primary hover:text-white transition"
              aria-label="Close zoom"
            >
              <AiOutlineClose size={28} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ImageSlider;
