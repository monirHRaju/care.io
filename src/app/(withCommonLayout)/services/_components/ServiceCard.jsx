// components/ServiceCard.jsx
import Link from "next/link";

export default function ServiceCard({ service }) {
  const {
    name,
    shortDescription,
    description,
    hourlyRate,
    dailyRate,
    icon,
    category,
    features,
    available,
  } = service;

  return (
    <div
      className={`
        bg-white rounded-2xl overflow-hidden 
        shadow-md hover:shadow-xl transition-all duration-300 
        border ${available ? "border-gray-200" : "border-gray-300 opacity-75"}
        flex flex-col h-full
        group
      `}
    >
      {/* Icon + Name Header */}
      <div className="p-6 lg:p-8 bg-gradient-to-br from-gray-50 to-white border-b border-gray-100">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-[#34C759]/10 flex items-center justify-center text-4xl lg:text-5xl flex-shrink-0">
            {icon}
          </div>
          <div>
            <h3 className="text-2xl lg:text-3xl font-bold text-[#333333] leading-tight">
              {name}
            </h3>
            {category && (
              <span className="text-sm text-gray-500 capitalize">
                {category}
              </span>
            )}
          </div>
        </div>

        {/* Short Description */}
        <p className="text-gray-700 text-base lg:text-lg leading-relaxed">
          {shortDescription}
        </p>
      </div>

      {/* Main Content */}
      <div className="p-6 lg:p-8 flex flex-col grow">
        {/* Pricing */}
        <div className="flex items-baseline gap-3 mb-6">
          {hourlyRate && (
            <div>
              <span className="text-3xl lg:text-4xl font-bold text-[#FF7A59]">
                ৳{hourlyRate}
              </span>
              <span className="text-gray-500 text-sm lg:text-base"> / hr</span>
            </div>
          )}
          {dailyRate && (
            <div className="text-gray-500 text-sm lg:text-base">
              or ৳{dailyRate} / day
            </div>
          )}
        </div>

        {/* Full Description (truncated on mobile) */}
        <p className="text-gray-600 mb-6 line-clamp-3 lg:line-clamp-none">
          {description}
        </p>

        {/* Features List */}
        {features && features.length > 0 && (
          <ul className="space-y-2 mb-8 text-gray-700 text-sm lg:text-base">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-[#34C759] mt-1">✔</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Action Button */}
        <div className="mt-auto">
          {available ? (
            <Link
              href={`/services/${name.toLowerCase().replace(/\s+/g, "-")}`}
              className="
                block w-full 
                bg-[#FF7A59] hover:bg-[#e66a4d] 
                text-white font-semibold text-center 
                py-4 rounded-full 
                transition transform hover:scale-[1.02] 
                focus:outline-none focus:ring-4 focus:ring-[#FF7A59]/40
                shadow-md hover:shadow-lg
              "
            >
              Book This Service
            </Link>
          ) : (
            <button
              disabled
              className="
                w-full py-4 rounded-full 
                bg-gray-300 text-gray-500 font-semibold 
                cursor-not-allowed
              "
            >
              Currently Unavailable
            </button>
          )}
        </div>
      </div>
    </div>
  );
}