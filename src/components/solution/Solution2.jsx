'use client';

import { FaBolt, FaCogs, FaTachometerAlt, FaPlug, FaMicrochip, FaLayerGroup } from 'react-icons/fa';

const solutions = [
  {
    icon: <FaBolt className="text-green text-4xl" />, 
    title: "Fixed Capacitor Banks",
    description: "Calculated fixed capacitor banks with manual ON/OFF switch with or without de-tuned reactor."
  },
  {
    icon: <FaCogs className="text-green text-4xl" />, 
    title: "Automatic Power Factor Correction",
    description: "Automatic PF correction takes place with respect to load requirements through PF Controller and contactor Thyristor switching."
  },
  {
    icon: <FaTachometerAlt className="text-green text-4xl" />, 
    title: "Capacitor Duty Contactors",
    description: "Use of capacitor duty contactors limits inrush current during switching and enhances capacitor life."
  },
  {
    icon: <FaPlug className="text-green text-4xl" />, 
    title: "Intelligent Relay",
    description: "Intelligent Relay with programmable 6/8/12 stages for enhanced performance."
  },
  {
    icon: <FaLayerGroup className="text-green text-4xl" />, 
    title: "Compartmentalized Design",
    description: "Available in compartmentalized and non-compartmentalized designs for different needs."
  },
  {
    icon: <FaMicrochip className="text-green text-4xl" />, 
    title: "Harmonic Filter Panels",
    description: "Specially designed harmonic filter APFC & RTPFC panels, customizable as per customer requirements."
  }
];

const ActiveSineSolutions = () => {
  return (
    <div className="bg-gray-50 py-16 mt-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold uppercase text-gray-800 mb-8">Active Sine Solutions</h2>
        <p className="text-gray-600 text-lg mb-12 max-w-3xl mx-auto">
          Advanced power factor correction and capacitor bank solutions tailored to meet industrial and commercial requirements.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6 text-center transition-transform transform hover:scale-105">
              <div className="mb-4">{solution.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{solution.title}</h3>
              <p className="text-gray-600">{solution.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActiveSineSolutions;
