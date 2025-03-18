'use client'
import React, { useState } from "react";
import Link from "next/link";


const Header = () => {
  return (
    <header
      className="fixed top-0 left-0 w-full bg-white shadow-lg transition-all duration-500 ease-in-out z-50"
    >
      <div
        className="max-w-7xl mx-auto px-4 flex items-center justify-between transition-all duration-500 ease-in-out text-gray-800"
      >
        {/* Logo */}
        <div className="w-20 h-20">
          <img src="/ActiveSine-logo.png" alt="ActiveSine Logo" />
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-6 px-6 py-2 bg-transparent">
          <a href="/" className="text-gray-800 hover:text-gray-600">
            HOME
          </a>
          <a href="/solutions" className="text-gray-800 hover:text-gray-600">
            SOLUTIONS
          </a>
          <a href="/products" className="text-gray-800 hover:text-gray-600">
            PRODUCTS
          </a>
          <a href="/services" className="text-gray-800 hover:text-gray-600">
            SERVICES
          </a>
          <a href="/news" className="text-gray-800 hover:text-gray-600">
            NEWS
          </a>
        </nav>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          {/* Contact Button */}
          <Link href="/contact-us">
            <button
              className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-900 to-blue-700 to-green-800 text-white font-semibold hover:opacity-90"
            >
              Contact
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
