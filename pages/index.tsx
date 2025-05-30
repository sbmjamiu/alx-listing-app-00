import React from "react";
import Image from "next/image";
import { PROPERTYLISTINGSAMPLE } from "@/constants/index";
import Card from "@/components/common/Card";
import FilterSection from "@/components/common/Pill";

// const FilterSection: React.FC = () => {
//   const [activeFilter, setActiveFilter] = React.useState('All');
//   const [selectedSort, setSelectedSort] = React.useState('Highest Price');
//   const [showFilters, setShowFilters] = React.useState(false);
// }

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/images/hero_section_image/Image 1.png" // Replace with your actual image path
            alt="Beautiful lakeside cabin with mountains"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
            Find your favorite
            <br />
            place here!
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium opacity-90 max-w-2xl mx-auto leading-relaxed">
            The best prices for over 2 million properties worldwide
          </p>
        </div>
      </section>

      <FilterSection />

      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Featured Properties
            </h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
              Discover amazing places to stay around the world
            </p>
          </div>

          {/* Property Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {PROPERTYLISTINGSAMPLE.map((property, index) => (
              <Card key={index} property={property} />
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg">
              View More Properties
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
