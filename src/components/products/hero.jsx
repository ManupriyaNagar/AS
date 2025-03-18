import React from "react";
import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Hybrid Panel",
    description: "Automatic Power Factor Correction Panels for improved efficiency.",
    image: "/1.png",
  },
  {
    id: 2,
    name: "APFC Panel",
    description: "Reduces harmonic distortion and improves power quality.",
    image: "/2.png",
  },
  {
    id: 3,
    name: "APF Panel",
    description: "Ensures stable voltage supply for sensitive equipment.",
    image: "/product5-(2).png",
  },
  {
    id: 4, // Fixed duplicate ID
    name: "SVG (Static Var Generator)",
    description: "Optimizes power factor and reduces energy loss.",
    image: "/product5-(1).png",
  },
];

const ProductsPage = () => {
  return (
    <section className="bg-white text-black min-h-screen flex justify-center items-center py-12 px-6 mt-16">
      <div className="w-full max-w-7xl">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-center mb-4 uppercase">Our Products</h1>
        <p className="text-center text-gray-600 mb-10">
          Explore our advanced power quality solutions designed for various industries.
        </p>

        {/* Product Grid - Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-gray-100 p-6 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 flex flex-col items-center"
            >
              <img src={product.image} alt={product.name} width={400} height={300} className="rounded-t-xl" />
              <div className="text-center mt-4">
                <h2 className="text-xl font-semibold text-gray-800">{product.name}</h2>
                <p className="text-gray-600 mt-2">{product.description}</p>
                <button className="mt-4 bg-blue-900 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsPage;
