import React from 'react';
import Image from 'next/image';

const ServicePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 to-indigo-800 py-24 text-center text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-extrabold mb-4">Our Services</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90">
            Comprehensive sign language solutions for businesses and organizations
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-20">
        {/* Service Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
          {[
            {
              title: "Training Services",
              items: [
                "Sign Language Training",
                "Interpreter Certification",
                "Corporate Workshops",
                "Custom Training Programs",
              ],
            },
            {
              title: "Interpreting Services",
              items: [
                "On-site Interpreting",
                "Video Remote Interpreting",
                "Conference Interpreting",
                "Emergency Services",
              ],
            },
            {
              title: "Consulting",
              items: [
                "Accessibility Audits",
                "Policy Development",
                "Cultural Competency Training",
                "Strategic Planning",
              ],
            },
          ].map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-2xl font-semibold mb-4 text-gray-800 border-l-4 border-blue-900 pl-3">
                {service.title}
              </h3>
              <ul className="space-y-2 text-gray-600">
                {service.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-blue-900">✔</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 bg-gradient-to-r from-blue-900 to-indigo-800 text-white p-10 rounded-lg text-center shadow-md">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg opacity-90 mb-6">
            Contact us to learn more about our services and how we can help your organization.
          </p>
          <a
            href="/contact-us"
            className="inline-block bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
