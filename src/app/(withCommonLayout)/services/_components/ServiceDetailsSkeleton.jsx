import React from "react";

const ServiceDetailsSkeleton = () => {
  return (
    <div className="min-h-screen bg-base-200/30 py-10 md:py-16">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        {/* Breadcrumb skeleton */}
        <div className="mb-6 h-6 w-64 bg-base-300 rounded animate-shimmer" />

        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start mb-16">
          {/* Left - Text area */}
          <div className="space-y-8">
            <div className="h-10 w-48 bg-base-300 rounded animate-shimmer" />{" "}
            {/* Featured badge placeholder */}
            <div className="h-14 md:h-16 w-5/6 bg-base-300 rounded animate-shimmer" />{" "}
            {/* Title line 1 */}
            <div className="h-14 md:h-16 w-4/5 bg-base-300 rounded animate-shimmer" />{" "}
            {/* Title line 2 */}
            <div className="flex flex-wrap gap-6">
              <div className="h-12 w-44 bg-base-300 rounded animate-shimmer" />
              <div className="h-12 w-44 bg-base-300 rounded animate-shimmer" />
            </div>
            <div className="h-14 w-72 bg-base-300 rounded-full animate-shimmer" />{" "}
            {/* Book button */}
          </div>

          {/* Right - Image */}
          <div className="relative rounded-2xl overflow-hidden h-[400px] lg:h-[500px] bg-base-300 animate-shimmer">
            <div className="absolute inset-0 bg-gradient-to-r from-base-300 via-base-200/60 to-base-300 animate-shimmer" />
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Left/Middle - Description + Features */}
          <div className="lg:col-span-2 space-y-12">
            {/* Section title */}
            <div className="h-10 w-56 bg-base-300 rounded animate-shimmer" />

            {/* Description paragraphs */}
            <div className="space-y-4">
              <div className="h-5 w-full bg-base-300 rounded animate-shimmer" />
              <div className="h-5 w-full bg-base-300 rounded animate-shimmer" />
              <div className="h-5 w-full bg-base-300 rounded animate-shimmer" />
              <div className="h-5 w-11/12 bg-base-300 rounded animate-shimmer" />
              <div className="h-5 w-10/12 bg-base-300 rounded animate-shimmer" />
            </div>

            {/* Key Features box */}
            <div className="bg-base-100 p-8 rounded-2xl border border-base-200">
              <div className="h-9 w-48 bg-base-300 rounded animate-shimmer mb-6" />
              <div className="space-y-5">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="h-6 w-6 bg-base-300 rounded-full animate-shimmer shrink-0" />
                      <div className="h-6 w-4/5 bg-base-300 rounded animate-shimmer" />
                    </div>
                  ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Summary card */}
            <div className="card bg-base-100 shadow-xl border border-base-200">
              <div className="card-body space-y-6">
                <div className="h-9 w-56 bg-base-300 rounded animate-shimmer" />
                <div className="divider my-2 bg-base-300 h-px animate-shimmer" />
                <div className="space-y-5">
                  <div className="flex justify-between">
                    <div className="h-6 w-24 bg-base-300 rounded animate-shimmer" />
                    <div className="h-6 w-20 bg-base-300 rounded animate-shimmer" />
                  </div>
                  <div className="flex justify-between">
                    <div className="h-6 w-24 bg-base-300 rounded animate-shimmer" />
                    <div className="h-8 w-32 bg-base-300 rounded animate-shimmer" />
                  </div>
                  <div className="flex justify-between">
                    <div className="h-6 w-24 bg-base-300 rounded animate-shimmer" />
                    <div className="h-7 w-28 bg-base-300 rounded animate-shimmer" />
                  </div>
                </div>
                <div className="h-14 w-full bg-base-300 rounded-full animate-shimmer mt-4" />
              </div>
            </div>

            {/* Gallery placeholder */}
            <div className="card bg-base-100 shadow-xl border border-base-200">
              <div className="card-body">
                <div className="h-8 w-40 bg-base-300 rounded animate-shimmer mb-4" />
                <div className="grid grid-cols-2 gap-4">
                  {Array(4)
                    .fill(0)
                    .map((_, i) => (
                      <div
                        key={i}
                        className="aspect-square rounded-xl bg-base-300 overflow-hidden relative animate-shimmer"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-base-300 via-base-200/60 to-base-300 animate-shimmer" />
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailsSkeleton;
