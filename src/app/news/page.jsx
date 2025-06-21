'use client';

import { useState } from 'react';

// Import images from the public folder or use local imports
const certificate1 = "/c1.png";
const certificate2 = "/c2.png";
const certificate3 = "/c3.jpeg";
const certificate4 = "/c4.jpeg";
const certificate5= "/image.png";
const award1 = "/award1.jpeg";
const award2 = "/award2.jpeg";
const award3 = "/award3.jpeg";
const award4 = "/award4.jpeg";
const award5 = "/award5.jpeg";
const award6 = "/award6.jpeg";

const NewsPage = () => {
  return (
    <div className="min-h-screen py-10 bg-gray-50">
      {/* Hero Section */}
      <div className="relative text-black py-20 text-center">
        <h1 className="text-3xl md:text-4xl font-bold uppercase mb-4">Latest News & Updates</h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          Stay updated with the latest advancements in sign language education and accessibility solutions.
        </p>
      </div>

      {/* Video Banner */}
      <div className="relative">
        <video
          className="w-full object-cover h-[50vh] sm:h-[50vh] md:h-[90vh] rounded-tl-3xl rounded-br-3xl"
          src="/video4.mp4"
          autoPlay
          loop
          muted
        />
      </div>

      {/* Certificates Section */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto p-12 bg-white rounded-xl">
          <h2 className="text-center text-3xl font-bold mb-10 text-black">Rewards & Recognitions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* First Certificate with Button */}
            <div className="relative flex flex-col items-center p-4 border border-gray-300 rounded-lg bg-white">
              <img 
                src={certificate1} 
                alt="Certificate 1" 
                className="w-full max-h-[160vh] rounded-lg object-contain h-auto transition-transform duration-300 hover:scale-105"
              />
              <a
                href="https://www.theindustryoutlook.com/manufacturing/vendor/activesine-electricals-a-rapidly-emerging-pure-power-supply-solutions-provider-cid-11824.html"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 px-6 py-3 bg-blue text-white font-medium rounded-lg 
                           hover:bg-green-700 transition-transform duration-300 transform hover:scale-105"
              >
                View News
              </a>
            </div>

            {/* Second Certificate */}
            <div className="relative p-4 border border-gray-300 rounded-lg bg-white">
              <img 
                src={certificate4} 
                alt="Certificate 2" 
                className="w-full max-h-[140vh] rounded-lg object-contain"
              />
            </div>

            <div className="relative flex flex-col items-center py-4 border border-gray-300 rounded-lg bg-white">
              <img 
                src={certificate5} 
                alt="Certificate 1" 
                className="w-full max-h-[60vh] rounded-lg object-contain"
              />
              <a
                href="https://www.linkedin.com/posts/industryoutlook_theindustryoutlook-electricalinfrastructure-activity-7336651375088435200-JO5C/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAzD4k0BQNlZoKr9b1IhearvZwLdjCUdtoU"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 px-6 py-3 bg-blue text-white font-medium rounded-lg 
                           hover:bg-green-700 transition-transform duration-300 transform hover:scale-105"
              >
                View News
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Additional Certificates */}
      <section className="py-8 bg-gray-100">
        <h2 className="text-center text-3xl font-bold mb-10 text-black">Certificates</h2>
        <div className="container mx-auto p-6 bg-white rounded-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative p-4 border-2 border-gray-300 rounded-lg bg-white">
              <img 
                src={certificate3} 
                alt="Certificate 1" 
                className="w-full h-auto max-h-[80vh] rounded-lg object-contain transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="relative p-4 border-2 border-gray-300 rounded-lg bg-white">
              <img 
                src={certificate2} 
                alt="Certificate 2" 
                className="w-full h-auto max-h-[80vh] rounded-lg object-contain transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Award Ceremony Section */}
      <section className="py-8">
        <h2 className="text-center text-3xl font-bold mb-10 text-black">Award Ceremony</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4">
          {[award1, award2, award3, award4, award5, award6].map((award, index) => (
            <img
              key={index}
              src={award}
              alt={`Award ${index + 1}`}
              className="w-full h-auto rounded-lg shadow-gray-500/50 transition-transform duration-300 hover:scale-105"
            />
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <div className="bg-blue text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-lg mb-8">
          Stay ahead of the curve by subscribing to our newsletter, and be the first to know about our<br /> new products, technologies,  and  
          innovations
          in the power quality industry.
          
          </p>
          <form className="flex flex-col md:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-6 py-3 rounded-lg border border-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-white flex-grow max-w-md"
            />
            <button
              type="submit"
              className="bg-white text-blue-900 px-8 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
