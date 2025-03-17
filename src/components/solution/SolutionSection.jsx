import React from "react";

const SolutionSection = ({ heading, paragraph, buttonText, imageUrl, reverse }) => {
  return (
    <div
      className={`flex flex-col md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      } items-center gap-6 py-20 bg-white`}
    >
      {/* Text Section */}
      <div className="md:w-1/2">
        <h2 className="text-2xl font-bold mb-4">{heading}</h2>
        <p className="text-gray-700 mb-4">{paragraph}</p>
        <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
          {buttonText}
        </button>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 flex justify-center">
        <img
          src={imageUrl}
          alt={heading}
          className="max-w-full h-auto rounded shadow"
        />
      </div>
    </div>
  );
};

export default SolutionSection;
