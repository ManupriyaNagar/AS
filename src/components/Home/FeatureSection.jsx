"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Home, BatteryCharging, Monitor } from "lucide-react"; // Icons

const data = [
  {
    image: "/power-quality.jpg",
    heading: "Home Energy Storage Systems",
    text: "ActiveSine home energy storage systems cater to both low and high voltage needs...",
  },
  {
    image: "/3.jpg",
    heading: "C&I Energy Storage Systems",
    text: "Ideal for commercial and industrial needs, offering scalable energy solutions...",
  },
  {
    image: "/power-quality.jpg",
    heading: "ActiveSine Smart APP",
    text: "Monitor and manage your energy storage systems with real-time insights...",
  },
  {
    image: "/3.jpg",
    heading: "Grid-Connected Solutions",
    text: "Seamlessly integrate with the power grid for optimized energy management...",
  },
  {
    image: "/power-quality.jpg",
    heading: "Off-Grid Systems",
    text: "Reliable energy storage solutions for remote locations and backup power...",
  },
];

const FeatureSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full md:h-[60vh] h-[40vh] flex items-center justify-start bg-gray-900 text-white">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={data[activeIndex].image}
          alt="Feature Image"
          className="w-full h-full object-cover opacity-50"
        />
      </div>

      {/* Content (Left-Aligned) */}
      <div className="relative z-10 max-w-6xl py-10 sm:py-20 md:py-30 px-4 sm:px-8 md:px-16 text-justify ml-4 sm:ml-8 md:ml-16">
        <motion.h1
          key={activeIndex}
          initial={{ opacity: 0, rotate: 0 }}
          animate={{ opacity: 1, rotate: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-lg sm:text-xl md:text-2xl font-bold"
        >
          {data[activeIndex].heading}
        </motion.h1>

        <motion.p
          key={`text-${activeIndex}`}
          initial={{ opacity: 0, x: 0 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-2 sm:mt-4 text-xs sm:text-sm md:text-sm"
        >
          {data[activeIndex].text}
        </motion.p>

        {/* Read More Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="mt-8 sm:mt-6 px-3 sm:px-6 py-2 sm:py-3 bg-blue-900 hover:bg-blue-600 text-white rounded-lg transition text-sm sm:text-base"
        >
          ➜ Read More
        </motion.button>
      </div>

      {/* Bottom Navigation */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-10 w-full flex justify-center">
        <div className="flex gap-4 sm:gap-6 md:gap-8 border-white">
          {[
            { icon: <Home />, text: "Home" },
            { icon: <BatteryCharging />, text: "Energy" },
            { icon: <Monitor />, text: "Computer" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className="flex flex-col items-center text-white px-2 sm:px-3 md:px-4 pb-1 sm:pb-2 relative transition-all duration-300 group"
            >
              <div className="text-lg sm:text-xl md:text-2xl">{item.icon}</div>
              <span className="mt-1 text-xs sm:text-sm md:text-base">{item.text}</span>
              <div className="absolute bottom-0 left-0 w-full h-[2px] sm:h-[3px] bg-transparent transition-all duration-300 group-hover:bg-white"></div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;