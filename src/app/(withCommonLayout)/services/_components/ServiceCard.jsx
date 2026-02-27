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
        rounded-2xl overflow-hidden 
        shadow-md hover:shadow-xl transition-all duration-300 
        border border-gray-200 dark:border-gray-700
        bg-white dark:bg-gray-800
        flex flex-col h-full
        group
      `}
    >
      {/* Icon + Name Header */}
      <div className="p-6 lg:p-8 bg-gray-50 dark:bg-gray-900 border-b border-gray-100 dark:border-gray-700">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-4xl lg:text-5xl flex-shrink-0">
            {icon}
          </div>
          <div>
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white leading-tight">
              {name}
            </h3>
            {category && (
              <span className="text-sm text-gray-600 dark:text-gray-400 capitalize">
                {category}
              </span>
            )}
          </div>
        </div>

        {/* Short Description */}
        <p className="text-gray-700 dark:text-gray-300 text-base lg:text-lg leading-relaxed">
          {shortDescription}
        </p>
      </div>

      {/* Main Content */}
      <div className="p-6 lg:p-8 flex flex-col grow">
        {/* Pricing */}
        <div className="flex items-baseline gap-3 mb-6">
          {hourlyRate && (
            <div>
              <span className="text-3xl lg:text-4xl font-bold text-[#FF7A59] dark:text-[#FF9A7A]">
                ৳{hourlyRate}
              </span>
              <span className="text-gray-500 dark:text-gray-400 text-sm lg:text-base"> / hr</span>
            </div>
          )}
          {dailyRate && (
            <div className="text-gray-500 dark:text-gray-400 text-sm lg:text-base">
              or ৳{dailyRate} / day
            </div>
          )}
        </div>

        {/* Full Description (truncated on mobile) */}
        <p className="mb-6 line-clamp-3 lg:line-clamp-none text-gray-600 dark:text-gray-300">
          {description}
        </p>

        {/* Features List */}
        {features && features.length > 0 && (
          <ul className="space-y-2 mb-8 text-gray-700 dark:text-gray-300 text-sm lg:text-base">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-green-600 dark:text-green-400 mt-1">✔</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Action Button */}
        <div className="mt-auto">
          {available ? (
            <Link
              href={`/services/${service._id}`}
              className="
                block w-full 
                bg-[#FF7A59] hover:bg-[#e66a4d] 
                dark:bg-[#FF9A7A] dark:hover:bg-[#FF7A59]
                text-white font-semibold text-center 
                py-4 rounded-full 
                transition transform hover:scale-[1.02] 
                focus:outline-none focus:ring-4 focus:ring-[#FF7A59]/40 dark:focus:ring-[#FF9A7A]/40
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
                bg-gray-300 dark:bg-gray-700 
                text-gray-500 dark:text-gray-400 
                font-semibold 
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