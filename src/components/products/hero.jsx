import Link from "next/link";
import React from "react";

const products = [
  {
    id: 1,
    name: "Hybrid Panel",
    description: "Automatic Power Factor Correction Panels for enhanced efficiency.",
    image: "/1.png",
    isUSP: true,
    link:"/ahf" 
  },
  {
    id: 2,
    name: "APFC Panel",
    description: "Minimizes harmonic distortion and boosts power quality.",
    image: "/2.png",
    link:"/apfc" 
  },
  {
    id: 3,
    name: "APF Module",
    description: "Delivers stable voltage for sensitive equipment.",
    image: "/product52.png",
    link:"/apf" 
  },
  {
    id: 4,
    name: "SVG",
    description2: "(Static Var Generator)",
    description: "Optimizes power factor and cuts energy losses.",
    image: "/product51.png",
    link:"/apf" 
  },
];

const ProductsPage = () => {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white text-gray-900 min-h-screen md:py-16  py-24 px-6 flex justify-center items-center mt-2">
      <div className="w-full max-w-7xl">
        {/* Heading Section */}
        <div className="text-center mb-12">
          <h1 className="text-2xl uppercase md:text-4xl font-bold tracking-tight bg-clip-text text-transparent text-black mt-10">
            Our Products
          </h1>
          <p className="mt-4 text-sm md:text-xl text-gray-600 max-w-2xl mx-auto">
            Discover cutting-edge power quality solutions tailored for modern industries.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className={`group bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border flex flex-col items-center ${
                product.isUSP
                  ? "border-white bg-gradient-to-b from-white to-white relative"
                  : "border-gray-100"
              }`}
            >
              {/* Star Badge for USP Product */}
              {product.isUSP && (
                <div className="absolute top-4 right-4 bg-yellow-400 z-20 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center">
                  <span className="mr-1">★</span> Iot Based Panel
                </div>
              )}

              <div className="overflow-hidden rounded-xl">
                <img
                  src={product.image}
                  alt={product.name}
                  width={400}
                  height={300}
                  className="rounded-xl object-cover transform group-hover:scale-105 transition-transform duration-500 "
                />
              </div>
              <div className="text-center mt-6 flex-1">
                <h2
                  className={`text-2xl font-bold transition-colors duration-300 z-20 ${
                    product.isUSP
                      ? "text-gray-800 group-hover:text-blue-900 z-20"
                      : "text-gray-800 group-hover:text-blue-900 z-20"
                  }`}
                >
                  {product.name}
                </h2>
                {product.description2 && (
                  <p className="text-gray-600 text-sm md:text-xl leading-relaxed">
                    {product.description2}
                  </p>
                )}
                <p className="text-gray-600 mt-3 text-sm md:text-base leading-relaxed">
                  {product.description}
                </p>
              </div>
              <Link href={product.link}>
              <button
                className={`mt-6 text-white px-6 py-2 rounded-full font-semibold text-sm uppercase tracking-wide transition-all duration-300 transform hover:scale-105 ${
                  product.isUSP
                    ? "bg-blue from-blue-600 to-indigo-600 hover:from-blue-800 hover:to-indigo-500"
                    : "bg-blue hover:from-blue-800 hover:to-indigo-500"
                }`}
              >
                Know More
              </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsPage;