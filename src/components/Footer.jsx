"use client";

import Link from 'next/link';
import { useEffect, useState } from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensures this runs only on the client side
  }, []);

  return (
    <footer className="relative bg-gray-950 text-gray-200">
      {/* Background GIF (Only rendered on client to avoid SSR mismatch) */}
      {isClient && (
        <div className="absolute inset-0">
          <img
            src="/buttom-gif.gif" // Replace with actual GIF path
            alt="Background Animation"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-blue-900 opacity-30"></div> {/* Faded blue overlay */}
        </div>
      )}

      {/* Top section: Social networks */}
      <div className="relative border-b border-gray-200 py-4 flex justify-between items-center lg:px-16 z-10">
        <div>Get connected with us on social networks:</div>
        <div className="flex space-x-4">
          <Link href="#" aria-label="Facebook">
            <FaFacebookF className="text-xl hover:text-gray-300 transition-colors" />
          </Link>

          <Link href="https://www.instagram.com/activesine_/" aria-label="Instagram">
            <FaInstagram className="text-xl hover:text-gray-300 transition-colors" />
          </Link>
          <Link href="https://www.linkedin.com/company/eps-electricals/posts/?feedView=all" aria-label="LinkedIn">
            <FaLinkedinIn className="text-xl hover:text-gray-300 transition-colors" />
          </Link>
        </div>
      </div>

      {/* Main footer section */}
      <div className="relative mx-auto py-10 px-6 md:px-12 lg:px-16 border-b border-gray-100 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
          {/* Company Name */}
          <div>
            <img src="/ActiveSine-logo.png" alt="logo" className="w-48" />
          </div>

          {/* Products */}
          <div>
            <h6 className="uppercase font-semibold mb-4">Products & Solutions</h6>
            <p className="mb-4 text-gray-300 hover:text-gray-100 transition-colors">
              Hybrid Panel
            </p>
            <p className="mb-4 text-gray-300 hover:text-gray-100 transition-colors">
              APFC Panel
            </p>
            <p className="mb-4 text-gray-300 hover:text-gray-100 transition-colors">
              IT/ITES Industries Solutions
            </p>
            <p className="mb-4 text-gray-300 hover:text-gray-100 transition-colors">
              Textile Solutions
            </p>

          </div>

          {/* Useful links */}
          <div>
            <h6 className="uppercase font-semibold mb-4">Services</h6>
            <p className="mb-4">
              <Link href="#" className="text-gray-300 hover:text-gray-100 transition-colors">
                Training Services
              </Link>
            </p>
            <p className="mb-4">
              <Link href="#" className="text-gray-300 hover:text-gray-100 transition-colors">
                Interprerting Services
              </Link>
            </p>
            <p className="mb-4">
              <Link href="#" className="text-gray-300 hover:text-gray-100 transition-colors">
                Consulting
              </Link>
            </p>
          </div>

          {/* Contact */}
          <div>
            <h6 className="uppercase font-semibold mb-4">Contact</h6>
            <p className="mb-4">Thirupalya Village, Electronic City Phase 1, Bengaluru</p>
            <p className="mb-4">sales@activesine.com</p>
            <p className="mb-4">+91 99 01303 4214 , +91 80 6878 5509</p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="relative bg-gray-950 text-center py-4 z-10">
        © 2025 Copyright:
        <Link href="https://mdbootstrap.com/" className="text-gray-400 font-semibold ml-1">
          ActiveSine
        </Link>
      </div>
    </footer>
  );
}
