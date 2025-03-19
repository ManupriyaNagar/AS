"use client";

import React, { useState } from "react";
import Image from "next/image";

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center py-20 px-6 bg-white">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/background.jpg" // Replace with your background image path
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="opacity-20"
        />
      </div>

      {/* Content */}
      <div className="relative z-10  bg-white bg-opacity-95 p-4 rounded-2xl max-w-7xl w-full transform transition-all ">
        {/* Heading */}
        <div className="text-center mb-20 ">
          <h1 className="text-2xl  uppercase md:text-4xl font-extrabold text-gray-900 bg-clip-text  bg-gradient-to-r from-blue-800 to-indigo-600">
            Contact Us
          </h1>
          <p className="md:text-lg text-xs  text-gray-600 mt-3 max-w-7xl mx-auto">
            Reach out to <strong>Activesine Electricals India Pvt Ltd</strong> for cutting-edge power quality solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-40 gap-20">
          {/* Company Details */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 tracking-wide">
              Our Office
            </h2>
            <p className="text-gray-700 leading-relaxed">
              <strong>Activesine Electricals India Pvt Ltd</strong><br />
              Thirupalya Village, Electronic City Phase 1,<br />
              Bengaluru, Karnataka, India
            </p>
            <p className="text-gray-700 mt-4">
              <strong>Email:</strong>{" "}
              <a href="mailto:sales@activesine.com" className="text-blue hover:underline">
                sales@activesine.com
              </a>
            </p>
            <p className="text-gray-700 flex items-center space-x-2">
  <strong>Phone:</strong>
  <span>+91 99 0130 34214 , +91 80 6878 5509</span>

</p>

            <p className="text-gray-600 mt-4 italic">
              Delivering innovative power solutions since 2023.
            </p>
          </div>

          {/* Contact Form */}
          <div className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 tracking-wide">
              Send Us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-4 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-4 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-4 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                required
              />
              <button
                type="submit"
                className="w-full bg-blue text-white px-6 py-3 rounded-lg font-semibold uppercase tracking-wide hover:from-blue-700 hover:to-indigo-500 transition-all duration-300 transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;