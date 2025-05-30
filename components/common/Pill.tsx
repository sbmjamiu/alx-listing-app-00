import { PillProps } from "@/interfaces";
import React from "react";

// Filter data
const FILTER_OPTIONS = [
  "All",
  "Top Villa",
  "Free Reschedule",
  "Book Now, Pay Later",
  "Self CheckIn",
  "Instant Book",
];

const SORT_OPTIONS = [
  "Highest Price",
  "Lowest Price",
  "Highest Rating",
  "Most Popular",
];

const Pill: React.FC<PillProps> = ({ label, isActive = false, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 ${
        isActive
          ? "bg-teal-500 text-white shadow-md"
          : "bg-white text-gray-700 border border-gray-300 hover:border-teal-300 hover:text-teal-600"
      }`}
    >
      {label}
    </button>
  );
};

// Filter Section Component
const FilterSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = React.useState("All");
  const [selectedSort, setSelectedSort] = React.useState("Highest Price");
  const [showFilters, setShowFilters] = React.useState(false);

  return (
    <>
      {/* Desktop Filter Section */}
      <section className="hidden lg:block bg-white border-b border-gray-200 py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Filter Pills */}
            <div className="flex items-center gap-3 flex-wrap">
              {FILTER_OPTIONS.map((filter) => (
                <Pill
                  key={filter}
                  label={filter}
                  isActive={activeFilter === filter}
                  onClick={() => setActiveFilter(filter)}
                />
              ))}
            </div>

            {/* Filter and Sort */}
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:border-gray-400 transition-colors">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                  />
                </svg>
                <span className="text-sm font-medium">Filter</span>
              </button>

              <div className="flex items-center gap-2 text-sm">
                <span className="text-gray-600">Sort by:</span>
                <select
                  value={selectedSort}
                  onChange={(e) => setSelectedSort(e.target.value)}
                  className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-teal-500"
                >
                  {SORT_OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tablet Filter Section */}
      <section className="hidden sm:block lg:hidden bg-white border-b border-gray-200 py-4">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between mb-4">
            {/* Filter Pills */}
            <div className="flex items-center gap-3 overflow-x-auto pb-2">
              {FILTER_OPTIONS.slice(0, 3).map((filter) => (
                <Pill
                  key={filter}
                  label={filter}
                  isActive={activeFilter === filter}
                  onClick={() => setActiveFilter(filter)}
                />
              ))}
            </div>

            {/* Filter Icon and Sort */}
            <div className="flex items-center gap-3 ml-4">
              <button className="p-2 border border-gray-300 rounded-lg hover:border-gray-400 transition-colors">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                  />
                </svg>
              </button>

              <div className="text-sm">
                <span className="text-gray-600">Sort by:</span>
                <select
                  value={selectedSort}
                  onChange={(e) => setSelectedSort(e.target.value)}
                  className="ml-1 border-0 focus:outline-none focus:ring-0 font-medium"
                >
                  {SORT_OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Filter Section */}
      <section className="sm:hidden bg-white border-b border-gray-200">
        <div className="px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Scrollable Filter Pills */}
            <div className="flex items-center gap-3 overflow-x-auto flex-1 pb-2 scrollbar-hide">
              {FILTER_OPTIONS.slice(0, 3).map((filter) => (
                <Pill
                  key={filter}
                  label={filter}
                  isActive={activeFilter === filter}
                  onClick={() => setActiveFilter(filter)}
                />
              ))}
            </div>

            {/* Fixed Filter Button */}
            <div className="flex-shrink-0 ml-3">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="p-2 border border-gray-300 rounded-lg hover:border-gray-400 transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Expandable Filter/Sort Options */}
          {showFilters && (
            <div className="mt-3 pt-3 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <div className="text-sm">
                  <span className="text-gray-600">Sort by:</span>
                  <select
                    value={selectedSort}
                    onChange={(e) => setSelectedSort(e.target.value)}
                    className="ml-2 border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                  >
                    {SORT_OPTIONS.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default FilterSection;
