"use client";

import Link from 'next/link';
import { useEffect, useState } from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FiMapPin, FiMail, FiPhone } from 'react-icons/fi';

export default function Footer() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <footer className="relative bg-gray-950 text-gray-200">
      {/* Background GIF */}
      {isClient && (
        <div className="absolute inset-0">
          <img
            src="/buttom-gif.gif"
            alt="Background Animation"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-blue-900 opacity-30"></div>
        </div>
      )}

      {/* Top section: Social networks */}
      <div className="relative border-b border-gray-200 py-4 flex flex-col md:flex-row justify-end items-center lg:px-16 z-10 text-center">
        <div className="mb-2 md:mb-0 mr-1">
          Get connected with us on social networks :
        </div>
        <div className="flex space-x-4">
          <Link href="https://www.facebook.com/profile.php?id=61573076558484" aria-label="Facebook">
            <FaFacebookF className="text-xl hover:text-gray-300 transition-colors" />
          </Link>
          <Link href="https://www.instagram.com/activesine_/" aria-label="Instagram">
            <FaInstagram className="text-xl hover:text-gray-300 transition-colors" />
          </Link>
          <Link href="https://www.linkedin.com/company/activesineelectricals/posts/?feedView=all" aria-label="LinkedIn">
            <FaLinkedinIn className="text-xl hover:text-gray-300 transition-colors" />
          </Link>
        </div>
      </div>

      {/* Main footer section */}
      <div className="relative mx-auto py-10 px-6 md:px-12 lg:px-16 border-b border-gray-100 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
          {/* Company Logo */}
          <div className="text-center lg:text-left">
            <img src="/fllter.png" alt="logo" className="w-48 mx-auto lg:mx-0" />
          </div>

          {/* Products */}
          <div className="text-center lg:text-left">
            <h6 className="uppercase font-semibold mb-4">Products & Solutions</h6>
            <p className="mb-4 text-white hover:text-gray-100 transition-colors">
              Hybrid Panel
            </p>
            <p className="mb-4 text-white hover:text-gray-100 transition-colors">
              APFC Panel
            </p>
            <p className="mb-4 text-white hover:text-gray-100 transition-colors">
              IT/ITES Industries Solutions
            </p>
            <p className="mb-4 text-white hover:text-gray-100 transition-colors">
              Textile Solutions
            </p>
          </div>

          {/* Services */}
          <div className="text-center lg:text-left ">
            <h6 className="uppercase font-semibold mb-4">Services</h6>
            <p className="mb-4">
              <Link href="#" className="text-gray-300 hover:text-gray-100 transition-colors">
                Training Services
              </Link>
            </p>
            <p className="mb-4">
              <Link href="#" className="text-gray-300 hover:text-gray-100 transition-colors">
                Interpreting Services
              </Link>
            </p>
            <p className="mb-4">
              <Link href="#" className="text-gray-300 hover:text-gray-100 transition-colors">
                Consulting
              </Link>
            </p>
          </div>

          {/* Contact */}
          <div className="text-center lg:text-left text-white">
            <h6 className="uppercase font-semibold mb-4">Contact</h6>
            <div className="flex flex-col items-center lg:items-start">
              {/* Location with Map */}
              <div className="flex flex-col w-full mb-4">
                <div className="flex items-start">
                  <FiMapPin className="mr-2 mt-1" size={18} />
                  <a
                    href="https://www.google.com/maps/place/Electronic+City+Phase+I,+Bengaluru,+Karnataka/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Thirupalya Village, Electronic City <br /> Phase 1, Bengaluru
                  </a>
                </div>
              </div>
              {/* Email */}
              <div className="flex items-start mb-4">
                <FiMail className="mr-2 mt-1" size={18} />
                <a href="mailto:sales@activesine.com" className="hover:underline">
                  sales@activesine.com
                </a>
              </div>
              {/* Phone */}
              <div className="flex items-start">
                <FiPhone className="mr-2 mt-1" size={18} />
                <a
                  href="tel:+9199013034214"
                  className="whitespace-nowrap hover:underline"
                >
                  +91 99 01303 4214
                </a>
                <span className="mx-1">,</span>
                <a
                  href="tel:+918068785509"
                  className="whitespace-nowrap hover:underline"
                >
                  +91 80 6878 5509
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom copyright section */}
      <div className="relative bg-gray-950 text-center py-4 z-10 flex flex-col md:flex-row justify-between items-center px-6 text-xs md:text-sm">
        <p className="text-gray-300 mb-2 md:mb-0">
          Powered by{" "}
          <Link href="https://rbshstudio.com" className="text-gray-400 font-semibold">
            RBSH Studio
          </Link>
        </p>
        <p className="text-gray-300">
          © 2025 Copyright:{" "}
          <Link href="/" className="text-gray-400 font-semibold ml-1">
            ActiveSine
          </Link>
        </p>
      </div>
    </footer>
  );
}