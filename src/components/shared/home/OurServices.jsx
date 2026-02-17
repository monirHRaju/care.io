// components/OurServices.jsx
import Link from "next/link";

const services = [
  {
    icon: "👶",
    title: "Baby Care",
    description:
      "Experienced nannies and babysitters to care for your little ones with love and attention.",
    link: "/services/baby-care",
  },
  {
    icon: "❤️",
    title: "Elderly Service",
    description:
      "Compassionate support for seniors, helping them maintain independence and dignity at home.",
    link: "/services/elderly-service",
  },
  {
    icon: "🩺",
    title: "Sick People Service",
    description:
      "Professional medical care and assistance for those recovering or managing chronic conditions.",
    link: "/services/sick-people-service",
  },
];

export default function OurServices() {
  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#333333] mb-4">
            Our Services
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Experienced caregivers dedicated to providing trusted, compassionate care for your loved ones — whether it's childcare, elderly support, or medical assistance.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="
                bg-white rounded-2xl p-6 lg:p-8 
                shadow-md hover:shadow-xl transition-all duration-300 
                border border-gray-100
                flex flex-col items-center text-center
                group
              "
            >
              {/* Icon Circle */}
              <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-full bg-[#34C759]/10 flex items-center justify-center mb-6 text-4xl lg:text-5xl">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl lg:text-3xl font-semibold text-[#333333] mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-base lg:text-lg text-gray-600 mb-6 lg:mb-8 leading-relaxed">
                {service.description}
              </p>

              {/* Learn More Link */}
              <Link
                href={service.link}
                className="
                  inline-flex items-center 
                  text-[#4A90E2] hover:text-[#3a7bc8] 
                  font-medium text-lg 
                  transition-colors duration-200
                  group-hover:underline
                "
              >
                Learn More
                <span className="ml-2 text-xl">→</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}