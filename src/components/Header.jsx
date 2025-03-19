"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  // Fallback to an empty string if usePathname returns undefined
  const pathname = usePathname() || "";

  // Define navigation items (ensure each item has a defined href)
  const navItems = [
    { href: "/", label: "HOME" },
    { href: "/solutions", label: "SOLUTIONS" },
    { href: "/products", label: "PRODUCTS" },
    { href: "/services", label: "SERVICES" },
    { href: "/news", label: "NEWS" },
    { href: "/contact-us", label: "CONTACT" },
  ];

  // Debug logging: Print each nav item href to confirm they are defined
  navItems.forEach((item, index) => {
    if (!item.href) {
      console.error(`navItems[${index}] has undefined href:`, item);
    }
  });

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-lg transition-all duration-500 ease-in-out z-50">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between text-gray-800">
        {/* Logo Section */}
        <div className="w-20 h-20">
          <img src="/ActiveSine-logo.png" alt="ActiveSine Logo" />
        </div>

        {/* Navigation Section */}
        <nav className="hidden md:flex items-center space-x-6 px-6 py-2 bg-transparent">
          {navItems.map((item) => {
            // Check if href is defined; if not, skip rendering this Link
            if (!item.href) return null;

            // Determine if the current link should be active.
            const isActive =
              item.href === "/"
                ? pathname === item.href // HOME is active only when pathname exactly equals "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`${
                  isActive
                    ? "text-blue-900 font-semibold border-b-2 border-blue-900"
                    : "text-gray-800 hover:text-gray-600"
                } transition-colors duration-300 pb-1`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Section with Contact Button */}
        <div className="flex items-center space-x-4">
          <Link href="/contact-us">
            <button className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-900 to-blue-700 text-white font-semibold hover:opacity-90">
              Contact
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
