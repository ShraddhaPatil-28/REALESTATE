import React, { useState, useEffect } from "react";
import { FiPhone, FiMail, FiMapPin, FiSend, FiCheckCircle } from "react-icons/fi";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { GiSparkles } from "react-icons/gi";
import diningArea from "../assets/images/new-living-room.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

function Contact() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-[var(--background)] text-dark font-sans">
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
        <div className="container mx-auto px-5 max-w-7xl relative z-10">
          <h1 className="text-5xl font-extrabold uppercase tracking-widest text-white">
            CONTACT US
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <div className="min-h-screen relative" style={{ background: 'var(--background)' }}>
        <div className="relative z-10 px-6 py-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-start">

              {/* Contact Form */}
              <div className="relative" data-aos="fade-up">
                <div className="relative rounded-3xl p-10 shadow-2xl border" style={{ backgroundColor: 'var(--card)', backdropFilter: 'blur(24px)', borderColor: 'var(--border)' }}>
                  {submitted ? (
                    <div className="text-center py-12" data-aos="zoom-in">
                      <div className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-6" style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)' }}>
                        <FiCheckCircle className="w-10 h-10" style={{ color: 'var(--accent)' }} />
                      </div>
                      <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--secondary)' }}>Message Sent!</h3>
                      <p className="text-lg" style={{ color: 'var(--muted)' }}>Thank you for reaching out! We will get back to you soon.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-8">
                      <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold mb-2" style={{ color: 'var(--secondary)' }}>Send us a Message</h2>
                        <p style={{ color: 'var(--muted)' }}>We'll respond within 24 hours</p>
                      </div>

                      <div className="space-y-6">
                        {[
                          { label: "Full Name", name: "name", type: "text", placeholder: "Enter your full name" },
                          { label: "Email Address", name: "email", type: "email", placeholder: "Enter your email address" },
                        ].map(({ label, name, type, placeholder }) => (
                          <div key={name} className="group">
                            <label className="block text-sm font-semibold mb-3 uppercase tracking-wide" style={{ color: 'var(--secondary)' }}>{label}</label>
                            <input
                              type={type}
                              name={name}
                              required
                              value={formData[name]}
                              onChange={handleChange}
                              placeholder={placeholder}
                              className="w-full rounded-2xl px-6 py-4 text-slate-700 placeholder-slate-400/60 focus:outline-none transition-all duration-300"
                              style={{
                                backgroundColor: 'rgba(255 255 255 / 0.5)',
                                backdropFilter: 'blur(8px)',
                                border: `2px solid var(--border)`,
                                color: 'var(--secondary)',
                              }}
                            />
                          </div>
                        ))}

                        <div className="group">
                          <label className="block text-sm font-semibold mb-3 uppercase tracking-wide" style={{ color: 'var(--secondary)' }}>Your Message</label>
                          <textarea
                            name="message"
                            required
                            value={formData.message}
                            onChange={handleChange}
                            rows="6"
                            placeholder="Tell us about your project or inquiry..."
                            className="w-full rounded-2xl px-6 py-4 text-slate-700 placeholder-slate-400/60 resize-none focus:outline-none transition-all duration-300"
                            style={{
                              backgroundColor: 'rgba(255 255 255 / 0.5)',
                              backdropFilter: 'blur(8px)',
                              border: `2px solid var(--border)`,
                              color: 'var(--secondary)',
                            }}
                          />
                        </div>
                      </div>

                      <button
                        type="submit"
                        onMouseEnter={() => setIsHovering(true)}
                        onMouseLeave={() => setIsHovering(false)}
                        className="w-full font-bold py-5 px-8 rounded-2xl text-white flex items-center justify-center gap-3 text-lg relative overflow-hidden"
                        style={{
                          background: isHovering
                            ? 'linear-gradient(to right, var(--accent), var(--primary))'
                            : 'linear-gradient(to right, var(--primary), var(--accent))',
                          boxShadow: isHovering ? '0 10px 25px rgba(16,185,129,0.3)' : 'none',
                          transform: isHovering ? 'translateY(-4px)' : 'none',
                          transition: 'all 0.3s ease',
                        }}
                      >
                        <span className="relative z-10">Send Message</span>
                        <FiSend className="w-5 h-5 relative z-10" />
                      </button>
                    </form>
                  )}
                </div>
              </div>

              {/* Contact Cards & Socials */}
              <div className="space-y-8" data-aos="fade-up" data-aos-delay="200">
                <div className="inline-flex items-center gap-2 rounded-full px-6 py-2 mb-6 shadow-lg" style={{ backgroundColor: 'rgba(255 255 255 / 0.2)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255 255 255 / 0.3)' }}>
                  <GiSparkles className="w-4 h-4" style={{ color: 'var(--accent)' }} />
                  <span className="text-sm font-medium" style={{ color: 'var(--secondary)' }}>Get in Touch</span>
                </div>

                {/* Info Cards */}
                <div className="grid gap-6">
                  {[
                    { icon: FiPhone, title: "Phone", info: "+91 98765 43210", color: "primary" },
                    { icon: FiMail, title: "Email", info: "info@yourcompany.com", color: "accent" },
                    { icon: FiMapPin, title: "Address", info: "123 Modern St, City, State, 456789", color: "secondary" }
                  ].map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={idx}
                        className="group rounded-3xl p-8 shadow-xl transform hover:scale-105 transition duration-300"
                        data-aos="fade-up"
                        data-aos-delay={100 * (idx + 1)}
                        style={{
                          backgroundColor: 'rgba(255 255 255 / 0.6)',
                          backdropFilter: 'blur(20px)',
                          border: `1px solid rgba(255 255 255 / 0.3)`,
                        }}
                      >
                        <div className="flex items-start gap-6">
                          <div className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg" style={{ background: `rgba(13,148,136,0.1)` }}>
                            <Icon className="w-8 h-8" style={{ color: `var(--${item.color})` }} />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--secondary)' }}>{item.title}</h3>
                            <p className="text-[18px] text-[var(--muted)]">{item.info}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Social Icons */}
                <div className="text-center" data-aos="fade-up" data-aos-delay="400">
                  <h3 className="text-2xl font-bold mb-8" style={{ color: 'var(--secondary)' }}>Follow Us</h3>
                  <div className="flex justify-center gap-6">
                    {[
                      { icon: FaFacebookF, href: "https://facebook.com", label: "Facebook" },
                      { icon: FaTwitter, href: "https://twitter.com", label: "Twitter" },
                      { icon: FaLinkedinIn, href: "https://linkedin.com", label: "LinkedIn" }
                    ].map((social, i) => {
                      const Icon = social.icon;
                      return (
                        <a
                          key={i}
                          href={social.href}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={social.label}
                          className="group w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg transform transition duration-300 hover:scale-110"
                          style={{
                            backgroundColor: 'rgba(255 255 255 / 0.6)',
                            backdropFilter: 'blur(20px)',
                            border: `1px solid rgba(255 255 255 / 0.3)`,
                            color: 'var(--secondary)',
                          }}
                        >
                          <Icon className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Embedded Google Map */}
              <div className="lg:col-span-2 relative mt-16" data-aos="zoom-in-up">
                <div className="relative rounded-3xl overflow-hidden border border-border shadow-xl" style={{ backgroundColor: 'var(--card)' }}>
                  <iframe
                    title="Company Location"
                    src="https://maps.google.com/maps?q=123%20Modern%20St%2C%20City%2C%20State%2C%20456789&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="400"
                    frameBorder="0"
                    allowFullScreen
                    aria-hidden="false"
                    tabIndex="0"
                    style={{ border: 'none' }}
                  />
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
