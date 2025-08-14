import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import room from "../assets/images/room.jpg";

function Footer() {
  return (
    <footer className="relative text-[var(--white)] bg-[var(--dark)]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${room})` }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[var(--dark)] opacity-80 z-0" />

      {/* Content */}
      <div className="relative z-10 pt-12 pb-8 px-4 sm:px-6 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Business Hours */}
          <div >
            <h3 className="text-xl font-semibold mb-4">Business Hours</h3>
            <ul className="text-[var(--muted)] space-y-2">
              <li>Monday - Friday: 9:00 AM – 6:00 PM</li>
              <li>Saturday: 10:00 AM – 4:00 PM</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>

          {/* Navigation Links */}
          <div >
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3 text-[var(--muted)]">
              <li>
                <a href="/" className="hover:text-[var(--white)] transition-transform duration-300 hover:scale-105 inline-block">Home</a>
              </li>
              <li>
                <a href="/about" className="hover:text-[var(--white)] transition-transform duration-300 hover:scale-105 inline-block">About Us</a>
              </li>
              <li>
                <a href="/property" className="hover:text-[var(--white)] transition-transform duration-300 hover:scale-105 inline-block">Browse Properties</a>
              </li>
              <li>
                <a href="/contact" className="hover:text-[var(--white)] transition-transform duration-300 hover:scale-105 inline-block">Contact</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div >
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <ul className="text-[var(--muted)] space-y-4">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1" />
                <a
                  href="https://www.google.com/maps/place/India+Gate,+New+Delhi,+Delhi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--accent)] transition-transform duration-300 hover:scale-105 inline-block"
                >
                  India Gate, New Delhi, Delhi
                </a>
              </li>
              <li className="flex items-start gap-3">
                <FaPhoneAlt className="mt-1" />
                <a
                  href="tel:+917083743522"
                  className="hover:text-[var(--accent)] transition-transform duration-300 hover:scale-105 inline-block"
                >
                  +917083743522
                </a>
              </li>
              <li className="flex items-start gap-3">
                <FaEnvelope className="mt-1" />
                <a
                  href="mailto:support@urbannestrealty.com"
                  className="hover:text-[var(--accent)] transition-transform duration-300 hover:scale-105 inline-block"
                >
                  support@realestate.com
                </a>
              </li>
            </ul>
          </div>

          {/* Company Info */}
          <div >
            <h2 className="text-2xl font-bold mb-4">Real-Estate</h2>
            <p className="text-[var(--muted)] mb-4">
              Find your dream home with Real-Estate — trusted by thousands of families across the country.
            </p>
            <div className="flex space-x-4 mt-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl hover:text-[var(--accent)] transition-transform duration-300 hover:scale-125"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl hover:text-[var(--accent)] transition-transform duration-300 hover:scale-125"
              >
                <FaTwitter />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl hover:text-[var(--accent)] transition-transform duration-300 hover:scale-125"
              >
                <FaInstagram />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl hover:text-[var(--accent)] transition-transform duration-300 hover:scale-125"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="mt-10 border-t border-[var(--border)] pt-6 text-center text-[var(--muted)] text-sm">
          &copy; {new Date().getFullYear()} REAL-ESTATE. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
