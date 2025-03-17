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
    name: "Active Harmonic Filters(AHF)",
    description: "Reduces harmonic distortion and improves power quality.",
    image: "/1.png",
  },
  {
    id: 3,
    name: "APFC Panel",
    description: "Ensures stable voltage supply for sensitive equipment.",
    image: "/2.png",
  },
];

const ProductsPage = () => {
  return (
    <section className=" ">
    <div className="relative min-h-screen   flex justify-center items-center  bg-white text-black  ">
      {/* Background Image */}
     

      {/* Content */}
      <div className="relative z-10   rounded-xl  w-full max-w-7xl py-20 mt-8 mx-auto  ">
        <h1 className="text-4xl font-bold text-center mb-6 uppercase">Our Products</h1>
        <p className="text-center  mb-10">
          Explore our advanced power quality solutions designed for various industries.
        </p>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-gray-200 p-6 rounded-xl shadow-2xl hover:shadow-xl transition transform hover:-translate-y-1"
            >
              <Image src={product.image} alt={product.name} width={400} height={300} className="rounded-t-xl" />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800">{product.name}</h2>
                <p className="text-gray-600 mt-2">{product.description}</p>
                <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

  





    </section>
  );
};




export default ProductsPage;


