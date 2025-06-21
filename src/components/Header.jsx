"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const pathname = usePathname() || "";
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { href: "/", label: "HOME" },
    { href: "/solutions", label: "SOLUTIONS" },
    {
      href: "/products",
      label: "PRODUCTS",
      dropdown: [
        { href: "/ahf", label: "AHF/SVG" },
        { href: "/apfc", label: "APFC" },
        { href: "/apf", label: "APF" },
      ],
    },
    { href: "/services", label: "SERVICES" },
    { href: "/news", label: "NEWS" },
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between py-3 text-gray-800">
        {/* Logo */}
        <div className="h-full w-24">
          <img src="/ActiveSine-logo.png" alt="ActiveSine Logo" />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === item.href
                : pathname.startsWith(item.href);

            return (
              <div key={item.href} className="relative group">
                <Link
                  href={item.href}
                  className={`${
                    isActive
                      ? "text-blue-900 font-semibold border-b-2 border-blue-900"
                      : "text-gray-800 hover:text-gray-600"
                  } transition-colors duration-300 pb-1`}
                >
                  {item.label}
                </Link>
                {item.dropdown && (
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    {item.dropdown.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.href}
                        href={dropdownItem.href}
                        className="block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-900 transition-colors duration-200"
                      >
                        {dropdownItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Contact Button */}
        <div className="hidden md:flex items-center">
          <Link href="/contact-us">
          <button className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-green-500 text-white font-semibold hover:opacity-90 transition">
  Contact
</button>

          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md px-6 pb-4 pt-2 space-y-3">
          {navItems.map((item) => (
            <div key={item.href}>
              <Link
                href={item.href}
                className={`block py-2 text-sm ${
                  pathname.startsWith(item.href)
                    ? "text-blue-900 font-semibold"
                    : "text-gray-700"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>

              {/* Dropdown (Optional: can make collapsible if needed) */}
              {item.dropdown && (
                <div className="ml-4 space-y-1">
                  {item.dropdown.map((dropdownItem) => (
                    <Link
                      key={dropdownItem.href}
                      href={dropdownItem.href}
                      className="block text-sm text-gray-600 hover:text-blue-800"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {dropdownItem.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Mobile Contact Button */}
          <Link href="/contact-us" onClick={() => setMobileMenuOpen(false)}>
            <button className="px-4 py-2 rounded-full bg-gradient-to-r bg-blue to-green text-white font-semibold hover:opacity-90">
              Contact
            </button>
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
