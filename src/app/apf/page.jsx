import React from 'react';
import Image from 'next/image';

const APF = () => {
  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      {/* Main Content Layout */}
      <h1 className="text-2xl uppercase md:text-4xl font-bold tracking-tight bg-clip-text text-transparent text-black mt-10 text-center">
            APF (Active Power filters)
          </h1>
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Side - Image */}
          <div className="lg:w-1/2">
            <div className="sticky top-24">
              <div className="relative h-[500px] w-full rounded-xl overflow-hidden shadow-lg bg-white p-8">
                <Image
                  src="/APF.png" 
                  alt="APF Component"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="mt-6 bg-white rounded-xl shadow-lg p-6">
                <h1 className="text-3xl font-bold text-blue-900 mb-4">Active Power filters (APF)</h1>
                <p className="text-gray-700">
                Active harmonic filters are parallel filters (which means the Load current doesn’t go through the filter) that are used to reduce, or mitigate, harmonics to tolerable levels as defined by IEEE-519.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="lg:w-1/2 space-y-8">
            {/* Title Section */}
            <div className="bg-blue rounded-xl shadow-lg p-8 text-white">
              <h1 className="text-4xl font-bold mb-4">FEATURES</h1>
              <p className="text-xl font-semibold">SIGN OF EXCELLENCE</p>
            </div>

            {/* Features List */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Automatic Power Factor Correction with real-time load adaptation</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Minimizes energy losses and improves power efficiencye</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Reduces harmonic distortions with advanced filtering techniques</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Increases lifespan of electrical equipment by reducing stress</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Supports intelligent control with programmable logic</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Available in both compartmentalized and non-compartmentalized designs</span>
                </li>
               
              </ul>
            </div>

            {/* Additional Information Button */}
            <div className="flex justify-center">
              <button className="px-8 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors duration-300 font-semibold">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default APF; 