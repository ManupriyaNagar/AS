import React from 'react';
import Image from 'next/image';

const services = [
  {
    title: "Power Quality Solutions",
    items: [
      "Power Quality Assessments",
      "Harmonic Analysis & Mitigation",
      "Power Factor Correction",
      "Reactive Power & Energy Efficiency Optimization",
    ],
  },
  {
    title: "Panel Manufacturing & Automation",
    items: [
      "APFC/RTPFC Panels",
      "Active Harmonic Filtering (AHF) & SVG Panels",
      "ISO 9001:2015 Certified Manufacturing",
      "IOT-based Monitoring & Smart Panel Systems",
    ],
  },
  {
    title: "Consulting & Custom Solutions",
    items: [
      "Customized Power Quality Solutions",
      "System Integration & Installation",
      "R&D and Technology Upgradation",
      "Maintenance & After-Sales Support",
    ],
  },
];

const ServicePage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10">
      {/* Hero Section */}
      <section className="relative py-24 text-center text-gray-900">
        <div className="container mx-auto px-2">
          <h1 className="text-4xl font-bold mb-8 text-center uppercase mt-0">
            Our Services
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-80">
            Comprehensive power quality solutions to enhance efficiency, safety, and innovation.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-4 py-2">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1"
            >
              <h3 className="text-2xl font-semibold mb-4 text-gray-800 border-l-4 border-blue-700 pl-3">
                {service.title}
              </h3>
              <ul className="space-y-2 text-gray-700">
                {service.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-green-700">✔</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="mt-20 max-w-7xl mx-auto bg-gradient-to-r from-blue-800 to-indigo-700 text-white p-12 rounded-lg text-center shadow-lg">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Transform Your Power Quality?
        </h2>
        <p className="text-lg opacity-90 mb-6">
          Contact us to learn how our cutting-edge solutions can optimize your systems and drive efficiency.
        </p>
        <a
          href="/contact-us"
          className="inline-block bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition duration-300"
          aria-label="Contact Us"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
};

export default ServicePage;
