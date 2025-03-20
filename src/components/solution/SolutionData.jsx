import React from "react";
import { solutionsData } from "./../../data/solutionsData";
import SolutionSection from "@/components/solution/SolutionSection";

const SolutionsPage = () => {
  return (
    <section className="px-4 bg-white text-black py-20">
      <div className="max-w-7xl mx-auto">
        {/* Page heading */}
        <h1 className="text-4xl font-bold mb-8 text-center uppercase mt-8">
          Our Solutions
        </h1>
        <p className="mt-4 text-sm md:text-xl text-gray-600 max-w-2xl mx-auto text-justify">
          Advanced power factor correction and capacitor bank solutions tailored to meet industrial and commercial requirements.
        </p>

        {/* Map through solutionsData to render each section, alternating layout */}
        {solutionsData.map((solution, index) => (
          <SolutionSection
            key={index}
            heading={solution.heading}
            paragraph={solution.paragraph}
            // If the buttonText equals "Read More", override with creative text
            buttonText={
              solution.buttonText === "Read More"
                ? "Discover Possibilities"
                : solution.buttonText
            }
            imageUrl={solution.imageUrl}
            // Pass reverse prop: odd index sections will be reversed
            reverse={index % 2 === 1}
          />
        ))}
      </div>
    </section>
  );
};

export default SolutionsPage;

