'use client';

import { useState } from 'react';

// Import images from the public folder or use local imports
const certificate1 = "/c1.png";
const certificate2 = "/c2.png";
const certificate3 = "/c3.jpeg";
const certificate4 = "/c4.jpeg";
const award1 = "/award1.jpeg";
const award2 = "/award2.jpeg";
const award3 = "/award3.jpeg";
const award4 = "/award4.jpeg";
const award5 = "/award5.jpeg";
const award6 = "/award6.jpeg";

const NewsPage = () => {
  return (
    <>
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
            className="w-full object-cover h-[50vh] sm:h-[50vh] md:h-[90vh] radius rounded-tl-3xl rounded-br-3xl"
            src="/video4.mp4"
            autoPlay
            loop
            muted
          />
        </div>

        {/* Certificates Section */}
        <section className="py-8">
          <h2 className="text-center text-3xl font-bold mb-6 text-black">Certificates</h2>
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-4 px-4 h-full mb-2">
            <img src={certificate1} alt="Certificate 1" className="w-full rounded-lg shadow-lg" />
            <img src={certificate4} alt="Certificate 2" className="w-full rounded-lg shadow-lg " />
            
          </div>
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-4 px-4 h-full">
            <img src={certificate3} alt="Certificate 1" className="w-full rounded-lg shadow-lg" />
            <img src={certificate2} alt="Certificate 2" className="w-full rounded-lg shadow-lg " />
          </div>
        
        </section>

        {/* Award Ceremony Section */}
        <section className="py-8">
          <h2 className="text-center text-3xl font-bold mb-6 text-black">Award Ceremony</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4">
            
            <img src={award2} alt="Award 2" className="w-full h-auto rounded-lg shadow-lg shadow-gray-500/50 transition-transform duration-300 hover:scale-105" />
            <img src={award4} alt="Award 4" className="w-full h-auto rounded-lg shadow-lg shadow-gray-500/50 transition-transform duration-300 hover:scale-105" />
            <img src={award3} alt="Award 3" className="w-full h-auto rounded-lg shadow-lg shadow-gray-500/50 transition-transform duration-300 hover:scale-105" />
            <img src={award1} alt="Award 1" className="w-full h-auto rounded-lg shadow-lg shadow-gray-500/50 transition-transform duration-300 hover:scale-105" />
           
            <img src={award5} alt="Award 5" className="w-full h-auto rounded-lg shadow-lg shadow-gray-500/50 transition-transform duration-300 hover:scale-105" />
            <img src={award6} alt="Award 6" className="w-full h-auto rounded-lg shadow-lg shadow-gray-500/50 transition-transform duration-300 hover:scale-105" />
          </div>
        </section>

        {/* Newsletter Section */}
        <div className="bg-blue text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-lg mb-8">
              Subscribe to our newsletter to receive the latest news and updates about sign language education and accessibility.
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
    </>
  );
};

export default NewsPage;
