"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Factory,
  Landmark,
  Car,
  TrainFront,
  BatteryCharging,
  Bolt,
  TrendingDown,
  FactoryIcon,
  Sliders,
  Settings,
} from "lucide-react";

const applications = [
  { icon: <Factory size={50} />, text: "Steel and Cement Industries" },
  { icon: <Landmark size={50} />, text: "Textile Industries" },
  { icon: <Sliders size={50} />, text: "Process Industries" },
  { icon: <Car size={50} />, text: "Automobile" },
  { icon: <TrainFront size={50} />, text: "Railway/Metro" },
  { icon: <BatteryCharging size={50} />, text: "Solar Farms" },
];

const problems = [
  { icon: <Bolt size={50} />, text: "Power Factor Improvement" },
  { icon: <TrendingDown size={50} />, text: "KVAH Billing Reduction" },
  { icon: <FactoryIcon size={50} />, text: "Captive Power PF Improvement" },
  { icon: <Sliders size={50} />, text: "Harmonics Mitigation" },
  { icon: <Settings size={50} />, text: "Drives Harmonic Mitigation" },
  { icon: <Factory size={50} />, text: "Unbalance Compensation" },
];

// Scroll Animation Variants
const fadeInVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.4, duration: 0.8, ease: "easeOut" },
  }),
};

const PowerQualitySolutions = () => {
  return (
    <section className="relative w-full h-auto py-40 px-4 sm:px-6 md:px-10 bg-blue text-white">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 bg-black">
      <Image src="/section.gif" fill style={{ objectFit: "cover" }} alt="Section GIF" />

      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl font-bold">Power Quality Solutions</h1>

        {/* Sections Container */}
        <div className="mt-10 flex flex-col md:flex-row md:gap-10 gap-8">
          {/* By Applications */}
          <div className="flex-1 flex flex-col">
            <h2 className="text-xl sm:text-2xl font-semibold border-b border-white pb-2">
              By Applications
            </h2>
            <div className="grid grid-cols-2 gap-6 sm:gap-10 md:gap-20 mt-6 sm:mt-10 flex-grow">
              {applications.map((item, index) => (
                <motion.div
                  key={index}
                  className="p-4 sm:p-6 bg-blue border border-white bg-opacity-40 rounded-lg flex flex-col items-center justify-center shadow-lg hover:bg-opacity-60 transition-all duration-300 h-full"
                  variants={fadeInVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={index}
                >
                  <span className="text-green">{item.icon}</span>
                  <p className="mt-2 text-base sm:text-lg font-medium text-center">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* White Vertical Divider - Hidden on Mobile */}
          <div className="hidden md:block w-[2px] bg-white"></div>

          {/* By Problems */}
          <div className="flex-1 flex flex-col">
            <h2 className="text-xl sm:text-2xl font-semibold border-b border-white pb-2">
              By Problems
            </h2>
            <div className="grid grid-cols-2 gap-6 sm:gap-10 md:gap-20 mt-6 sm:mt-10 flex-grow">
              {problems.map((item, index) => (
                <motion.div
                  key={index}
                  className="p-4 sm:p-6 bg-blue bg-opacity-40 border border-white rounded-lg flex flex-col items-center justify-center shadow-lg hover:bg-opacity-60 transition-all duration-300 h-full"
                  variants={fadeInVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={index}
                >
                  <span className="text-green">{item.icon}</span>
                  <p className="mt-2 text-base sm:text-lg font-medium text-center">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PowerQualitySolutions;