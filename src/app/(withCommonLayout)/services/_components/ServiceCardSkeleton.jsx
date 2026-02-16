// components/ServiceCardSkeleton.jsx (DaisyUI + shimmer mix)
export default function ServiceCardSkeleton({ isFeatured = false }) {
  return (
    <div
      className={`
        card bg-base-100 h-157 shadow-xl overflow-hidden rounded-xl
        ${isFeatured ? "border-2 border-primary/30" : ""}
      `}
    >
      <figure className="h-64">
        <div className="skeleton h-full w-full relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-base-content/10 to-transparent animate-shimmer" />
        </div>
      </figure>

      <div className="card-body p-6 space-y-5">
        <div className="skeleton h-8 w-4/5 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-base-content/10 to-transparent animate-shimmer" />
        </div>

        <div className="space-y-3">
          <div className="skeleton h-4 w-full relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-base-content/10 to-transparent animate-shimmer" />
          </div>
          <div className="skeleton h-4 w-full relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-base-content/10 to-transparent animate-shimmer" />
          </div>
        </div>

        {/* ... add similar shimmer div to other skeletons as needed */}

        <div className="flex justify-between mt-6">
          <div className="skeleton h-9 w-28 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-base-content/10 to-transparent animate-shimmer" />
          </div>
          <div className="skeleton h-11 w-36 rounded-full relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-base-content/10 to-transparent animate-shimmer" />
          </div>
        </div>
      </div>
    </div>
  );
}
