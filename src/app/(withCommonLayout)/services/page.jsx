// app/services/page.jsx
"use client";

import { useState, useEffect, useMemo } from "react";
import { Search, Filter, X, SlidersHorizontal } from "lucide-react";
import ServiceCard from "./_components/ServiceCard";
import { getAllServices } from "@/services/servicesAction";

// Mock data (replace with real fetch from /api/services)
// const mockServices = getAllServices()
// const mockServices = [
//   {
//     name: "Baby Care",
//     shortDescription: "Loving and professional care for your little ones",
//     description: "Experienced nannies and babysitters providing full-day, part-time or night care...",
//     hourlyRate: 650,
//     dailyRate: 5200,
//     icon: "👶",
//     category: "childcare",
//     features: ["Age-appropriate activities", "Feeding & hygiene support", "..."],
//     available: true,
//   },
//   {
//     name: "Elderly Service",
//     shortDescription: "Dignified support for independent living",
//     description: "Compassionate companionship and assistance for seniors...",
//     hourlyRate: 550,
//     dailyRate: 4400,
//     nightShiftRate: 750,
//     icon: "❤️",
//     category: "eldercare",
//     features: ["Medication management", "Meal preparation", "..."],
//     available: true,
//   },
//   {
//     name: "Sick People Service",
//     shortDescription: "Reliable medical & recovery support",
//     description: "Professional caregiving for individuals recovering from surgery...",
//     hourlyRate: 850,
//     dailyRate: 6800,
//     nightShiftRate: 1100,
//     icon: "🩺",
//     category: "medicalcare",
//     features: ["Vital signs monitoring", "Medication administration", "..."],
//     available: true,
//   },
//   {
//     name: "Special Needs Care",
//     shortDescription: "Inclusive and patient-centered care",
//     description: "Dedicated support for children and adults with disabilities...",
//     hourlyRate: 950,
//     dailyRate: 7600,
//     icon: "♿",
//     category: "specialcare",
//     features: ["Individualized care plans", "Behavioral support", "..."],
//     available: false,
//   },
//   // ... add more as needed
// ];

export default function ServicesPage() {
  const [services, setServices] = useState([]); // replace with real fetch later
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [priceRange, setPriceRange] = useState("all");
  const [availability, setAvailability] = useState("all");
  const [showFilters, setShowFilters] = useState(false);

  // Extract unique categories for filter dropdown
  // const categories = useMemo(() => {
  //   const cats = new Set(mockServices.map((s) => s.category));
  //   return ["all", ...Array.from(cats)];
  // }, []);

  // Filtered services
  // const filteredServices = useMemo(() => {
  //   return mockServices.filter((service) => {
  //     const matchesSearch =
  //       searchTerm === "" ||
  //       service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //       service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //       service.shortDescription.toLowerCase().includes(searchTerm.toLowerCase());

  //     const matchesCategory =
  //       selectedCategory === "all" || service.category === selectedCategory;

  //     const matchesAvailability =
  //       availability === "all" ||
  //       (availability === "available" && service.available) ||
  //       (availability === "unavailable" && !service.available);

  //     let matchesPrice = true;
  //     if (priceRange !== "all") {
  //       const maxPrice = service.hourlyRate || service.dailyRate / 8 || 0;
  //       if (priceRange === "low") matchesPrice = maxPrice <= 600;
  //       if (priceRange === "medium") matchesPrice = maxPrice > 600 && maxPrice <= 800;
  //       if (priceRange === "high") matchesPrice = maxPrice > 800;
  //     }

  //     return matchesSearch && matchesCategory && matchesAvailability && matchesPrice;
  //   });
  // }, [searchTerm, selectedCategory, priceRange, availability]);

  // Reset filters
  const resetFilters = () => {
    setSearchTerm("");
    setSelectedCategory("all");
    setPriceRange("all");
    setAvailability("all");
  };

  // Optional: real fetch (uncomment when API is ready)
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/services`)
      .then(res => res.json())
      .then(data => setServices(data.services))
      .catch(err => console.error("Failed to load services", err));
  }, []);

  console.log(services)
  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      {/* Header */}
      <section className="bg-gradient-to-br from-[#FF7A59]/10 to-white py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#333333] mb-4">
            Our Care Services
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Trusted, compassionate, and professional care for every member of your family
          </p>
        </div>
      </section>

      {/* Filters & Search */}
      <div className="sticky top-0 z-10 bg-white shadow-sm border-b border-gray-200">
        <div className="mx-auto max-w-6xl px-6 py-4">
          <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <input
                type="text"
                placeholder="Search services (e.g. baby care, elderly...)"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="
                  w-full pl-11 pr-4 py-3 rounded-full 
                  border border-gray-300 focus:border-[#FF7A59] 
                  focus:ring-2 focus:ring-[#FF7A59]/30 outline-none
                  transition duration-200
                "
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>

            {/* Filter Toggle (mobile) */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="md:hidden flex items-center justify-center gap-2 px-4 py-3 bg-gray-100 rounded-lg font-medium"
            >
              <SlidersHorizontal size={18} />
              Filters {showFilters ? <X size={16} /> : null}
            </button>

            {/* Desktop Filters */}
            {/* <div className="hidden md:flex items-center gap-4">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2.5 border border-gray-300 rounded-lg focus:border-[#FF7A59] focus:ring-1 focus:ring-[#FF7A59]/30"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat === "all" ? "All Categories" : cat.charAt(0).toUpperCase() + cat.slice(1)}
                  </option>
                ))}
              </select>

              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="px-4 py-2.5 border border-gray-300 rounded-lg focus:border-[#FF7A59] focus:ring-1 focus:ring-[#FF7A59]/30"
              >
                <option value="all">All Prices</option>
                <option value="low">Low (≤ ৳600/hr)</option>
                <option value="medium">Medium (৳600–800/hr)</option>
                <option value="high">High (&gt ৳800/hr)</option>
              </select>

              <select
                value={availability}
                onChange={(e) => setAvailability(e.target.value)}
                className="px-4 py-2.5 border border-gray-300 rounded-lg focus:border-[#FF7A59] focus:ring-1 focus:ring-[#FF7A59]/30"
              >
                <option value="all">All Availability</option>
                <option value="available">Available Now</option>
                <option value="unavailable">Currently Unavailable</option>
              </select>

              {(searchTerm || selectedCategory !== "all" || priceRange !== "all" || availability !== "all") && (
                <button
                  onClick={resetFilters}
                  className="px-4 py-2.5 text-[#FF7A59] hover:text-[#e66a4d] font-medium flex items-center gap-1"
                >
                  <X size={16} /> Clear
                </button>
              )}
            </div> */}
          </div>

          {/* Mobile Filters Panel */}
          {showFilters && (
            <div className="md:hidden mt-4 p-4 bg-gray-50 rounded-xl border border-gray-200 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg"
                >
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat === "all" ? "All Categories" : cat.charAt(0).toUpperCase() + cat.slice(1)}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Price Range</label>
                <select
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg"
                >
                  <option value="all">All Prices</option>
                  <option value="low">Low (≤ ৳600/hr)</option>
                  <option value="medium">Medium (৳600–800/hr)</option>
                  <option value="high">High (৳800/hr)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Availability</label>
                <select
                  value={availability}
                  onChange={(e) => setAvailability(e.target.value)}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg"
                >
                  <option value="all">All</option>
                  <option value="available">Available Now</option>
                  <option value="unavailable">Currently Unavailable</option>
                </select>
              </div>

              <button
                onClick={resetFilters}
                className="w-full py-3 bg-gray-200 hover:bg-gray-300 rounded-lg font-medium"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Services Grid */}
      <div className="mx-auto max-w-6xl px-6 py-12">
        {services.length === 0 ? (
          <div className="text-center py-20">
            <h3 className="text-2xl font-bold text-gray-700 mb-4">No services found</h3>
            <p className="text-gray-600 mb-8">
              Try adjusting your filters or search term
            </p>
            <button
              onClick={resetFilters}
              className="px-6 py-3 bg-[#FF7A59] text-white rounded-full hover:bg-[#e66a4d] transition"
            >
              Clear All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service) => (
              <ServiceCard key={service.name} service={service} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}