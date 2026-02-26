import ServiceCard from "./_components/ServiceCard";
import { getAllServices } from "@/services/services.service";


// Mock data (replace with real fetch from /api/services)

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

export default async function ServicesPage() {
const servicesData = await getAllServices()
const services = servicesData.services || [] 

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

      
      {/* Services Grid */}
      <div className="mx-auto max-w-6xl px-6 py-12">
        {services.length === 0 ? (
          <div className="text-center py-20">
            <h3 className="text-2xl font-bold text-gray-700 mb-4">No services found</h3>
            
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