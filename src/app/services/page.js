import React from 'react';
import Image from 'next/image';

const ServicePage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gray-900 py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto">
            Comprehensive sign language solutions for businesses and organizations
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Service Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Training Services</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Sign Language Training</li>
              <li>• Interpreter Certification</li>
              <li>• Corporate Workshops</li>
              <li>• Custom Training Programs</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Interpreting Services</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• On-site Interpreting</li>
              <li>• Video Remote Interpreting</li>
              <li>• Conference Interpreting</li>
              <li>• Emergency Services</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Consulting</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Accessibility Audits</li>
              <li>• Policy Development</li>
              <li>• Cultural Competency Training</li>
              <li>• Strategic Planning</li>
            </ul>
          </div>
        </div>

        {/* Service Details */}
        <div className="space-y-16">
          <section>
            <h2 className="text-3xl font-bold mb-8 text-gray-800">Training Programs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Basic Sign Language</h3>
                <p className="text-gray-600 mb-4">
                  Learn fundamental sign language skills for everyday communication.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Basic vocabulary and phrases</li>
                  <li>Finger spelling</li>
                  <li>Non-manual markers</li>
                  <li>Cultural awareness</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Advanced Interpreting</h3>
                <p className="text-gray-600 mb-4">
                  Professional training for aspiring interpreters.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Ethics and standards</li>
                  <li>Specialized vocabulary</li>
                  <li>Simultaneous interpreting</li>
                  <li>Professional development</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-8 text-gray-800">Interpreting Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-700">On-site Interpreting</h3>
                <p className="text-gray-600">
                  Professional interpreters available for meetings, events, and conferences.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-700">Video Remote Interpreting</h3>
                <p className="text-gray-600">
                  Instant access to qualified interpreters through video technology.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-8 text-gray-800">Consulting Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-700">Accessibility Audits</h3>
                <p className="text-gray-600">
                  Comprehensive evaluation of your organization&apos;s accessibility needs.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-700">Policy Development</h3>
                <p className="text-gray-600">
                  Expert guidance on developing inclusive policies and procedures.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Contact CTA */}
        <div className="mt-16 bg-gray-50 p-8 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-4 text-black">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-6">
            Contact us to learn more about our services and how we can help your organization.
          </p>
          <a
            href="/contact-us"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServicePage; 