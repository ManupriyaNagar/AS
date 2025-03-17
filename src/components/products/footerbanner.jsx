"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const Footer = () => {
  const [currentYear, setCurrentYear] = useState("");

  useEffect(() => {
    setCurrentYear(new Date().getFullYear().toString());
  }, []);

  return (
    <footer className="bg-[#1d4c7c] text-white py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-gray-400 pt-6">
        
        {/* Left Section - General Links */}
        <div className="md:w-full border-r border-gray-400 pr-6">
          <h2 className="text-lg font-semibold">General Links</h2>
          <ul className="mt-2 space-y-1 text-sm text-gray-300">
            <li>Home</li>
            <li>Products</li>
            <li>Our Solutions</li>
            <li>Growth</li>
            <li>Quality</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Middle Section - Products & Services */}
        <div className="md:w-full border-r border-gray-400 px-6">
          <h2 className="text-lg font-semibold">Products & Services</h2>
          <ul className="mt-2 space-y-1 text-sm text-gray-300">
            <li>Power Quality Solutions</li>
            <li>EV Infra & E-Mobility</li>
            <li>Voltage Regulation Solutions</li>
            <li>Engineering Services</li>
            <li>Renewable Solutions</li>
          </ul>
        </div>

        {/* Right Section - GIF */}
        <div className="flex justify-center">
          <Image 
            src="/buttom-gif.gif" 
            alt="Animated GIF" 
            width={350} 
            height={350} 
            priority 
            className="rounded-lg"
          />
        </div>

      </div>

      {/* Bottom Section - Fix Hydration Issue */}
      <div className="mt-6 text-center text-gray-300 text-sm border-t border-gray-400 pt-4">
      </div>
    </footer>
  );
};

export default Footer;
