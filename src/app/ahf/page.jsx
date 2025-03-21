import React from 'react';
import Image from 'next/image';

const AHF = () => {
  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      {/* Main Content Layout */}
      <h1 className="text-2xl uppercase md:text-4xl font-bold tracking-tight bg-clip-text text-transparent text-black mt-10 text-center">
            AHF(Active Harmonic Filter)
          </h1>
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Side - Image */}
          <div className="lg:w-1/2">
            <div className="sticky top-24">
            <div className="absolute top-4 right-4 bg-yellow-400 z-20 text-white text-lg font-bold px-2 py-1 rounded-full flex items-center">
                  <span className="mr-3">★</span> Iot Based Panel
                </div>
              <div className="relative h-[600px] w-full rounded-xl overflow-hidden shadow-lg">

                <Image
                  src="/AHF.png"
                  alt="AHF Component"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="mt-6 bg-white rounded-xl shadow-lg p-6">
                <h1 className="text-3xl font-bold text-blue-900 mb-4">Active Harmonic Filter (AHF)</h1>
                <p className="text-gray-700">
                  Advanced power quality solution with 3-level topology for superior harmonic mitigation and reactive power compensation
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="lg:w-1/2 space-y-8">
            {/* Core Features */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-blue mb-6">Core Features</h2>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>3-level Topology for superior performance</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Ultra-fast compensation with proven welding performance</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>7/10" touch screen display for easy monitoring</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Step-less Reactive Power Compensation</span>
                </li>
              </ul>
            </div>

            {/* Technical Specifications */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-blue mb-6">Technical Specifications</h2>
              <div className="space-y-4 text-gray-500">
                <div className="flex justify-between border-b pb-2">
                  <span className="font-semibold">Harmonic Current Capacity</span>
                  <span>20% of rated current (H2-H25)</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="font-semibold">Harmonic Elimination Range</span>
                  <span>2nd-50th order (Selectable)</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="font-semibold">Filtering Rate</span>
                  <span>Up to 98%</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="font-semibold">Power Factor Range</span>
                  <span>-0.99 to +0.99</span>
                </div>
              </div>
            </div>

            {/* Performance Features */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-blue mb-6">Performance Features</h2>
              <div className="space-y-6 text-gray-500">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <svg className="w-5 h-5 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Multifunctional Compensation</h3>
                    <p className="text-gray-600">Harmonic, reactive power and imbalance compensation</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <svg className="w-5 h-5 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Imbalance Correction</h3>
                    <p className="text-gray-600">Both negative and zero sequence, mitigates neutral current</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <svg className="w-5 h-5 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">High Efficiency</h3>
                    <p className="text-gray-600">Low thermal loss (≤3% of rated APF kVA), efficiency ≥97%</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Monitoring & Protection */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-blue-900 mb-6">Monitoring & Protection</h2>
              <div className="space-y-6 text-gray-500">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Display Features</h3>
                  <ul className="space-y-3 text-gray-500">
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-green mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                      <span>Waveform display of input Voltage, Grid current, Load current and APF current</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-green mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                      <span>Harmonic current Histogram display</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Protection Features</h3>
                  <ul className="space-y-3 text-gray-500">
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-green mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      <span>Complete protection system including Grid Over/Undervoltage, APF over current, over temperature</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-green mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                      <span>Comprehensive event logging for failure analysis</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Installation & Maintenance */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-blue-900 mb-6">Installation & Maintenance</h2>
              <div className="space-y-6 text-gray-500">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Flexible Application</h3>
                  <ul className="space-y-3 text-gray-500">
                    <li className="flex items-center">
                                <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                      </svg>
                      <span>Modular design with embedded standard or customized cabinet options</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                      <span>Plug-in installation for APF module replacement and expansion</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Additional Features</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      <span>CTS' reversal auto correction on HMI</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      <span>Support for grid side or load side current detection</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AHF; 