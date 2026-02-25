// app/services/[slug]/page.jsx
import Link from "next/link";
import { ArrowLeft, Clock, DollarSign, CheckCircle, Calendar } from "lucide-react";
import { notFound } from "next/navigation";

// This would normally come from your API / database
async function getService(slug) {
  if (!slug) return null;

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/api/services?slug=${encodeURIComponent(slug)}`,
      { cache: "no-store" }
    );

    if (!res.ok) return null;

    const data = await res.json();
    return data.service || null;
  } catch (err) {
    console.error("Failed to fetch service:", err);
    return null;
  }
}
// For demo: hard-coded fallback + dynamic slug matching
// const mockServices = [
//   {
//     slug: "baby-care",
//     name: "Baby Care",
//     description: "Experienced nannies and babysitters providing full-day, part-time or night care for infants and young children with love, safety and attention to developmental needs.",
//     shortDescription: "Loving and professional care for your little ones",
//     hourlyRate: 650,
//     dailyRate: 5200,
//     icon: "👶",
//     category: "childcare",
//     features: [
//       "Age-appropriate activities & playtime",
//       "Feeding, diapering & hygiene support",
//       "Safe sleep routines & nap supervision",
//       "Emergency first-aid & CPR trained",
//       "Daily updates & photos for parents"
//     ],
//     available: true,
//     note: "We match caregivers based on your child's age and specific needs",
//   },
//   {
//     slug: "elderly-service",
//     name: "Elderly Service",
//     description: "Compassionate companionship and assistance for seniors — including help with daily activities, medication reminders, light housekeeping, mobility support and emotional care.",
//     shortDescription: "Dignified support for independent living",
//     hourlyRate: 550,
//     dailyRate: 4400,
//     nightShiftRate: 750,
//     icon: "❤️",
//     category: "eldercare",
//     features: [
//       "Medication reminders & management",
//       "Meal preparation & feeding assistance",
//       "Mobility & transfer support",
//       "Companionship & conversation",
//       "Light housekeeping & errands",
//       "24/7 emergency response coordination"
//     ],
//     available: true,
//   },
//   // Add more services here or fetch from /api/services
// ];



export default async function ServicePage({ params: paramsPromise }) {
  const params = await paramsPromise;
  const { slug } = params;
  
  const service = await getService(slug);

  if (!service) {
    notFound(); // triggers Next.js built-in 404 page
  }
  // Find the service by slug (in real app → fetch from API)
  // const service = mockServices.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Service Not Found</h1>
          <p className="text-xl text-gray-600 mb-8">
            The service you're looking for doesn't exist or has been removed.
          </p>
          <Link
            href="/services"
            className="inline-flex items-center px-6 py-3 bg-[#FF7A59] text-white rounded-full hover:bg-[#e66a4d] transition"
          >
            <ArrowLeft className="mr-2" size={20} />
            Back to All Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      {/* Hero / Header */}
      <section className="bg-gradient-to-br from-[#FF7A59]/10 to-white py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Link
            href="/"
            className="inline-flex items-center text-[#4A90E2] hover:text-[#3a7bc8] mb-6"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Home
          </Link>

          <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-[#34C759]/10 flex items-center justify-center text-6xl md:text-8xl flex-shrink-0">
              {service.icon}
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#333333] mb-3">
                {service.name}
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 max-w-3xl">
                {service.shortDescription}
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
        <div className="grid lg:grid-cols-3 gap-10 lg:gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-3xl font-bold text-[#333333] mb-6">About This Service</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {service.description}
              </p>
              {service.note && (
                <p className="text-[#FF7A59] font-medium italic">
                  Note: {service.note}
                </p>
              )}
            </section>

            <section>
              <h2 className="text-3xl font-bold text-[#333333] mb-6">What's Included</h2>
              <ul className="grid md:grid-cols-2 gap-4">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-lg">
                    <CheckCircle className="text-[#34C759] mt-1 flex-shrink-0" size={24} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Sidebar - Pricing & CTA */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 lg:sticky lg:top-8">
              <h3 className="text-2xl font-bold text-[#333333] mb-6">Pricing</h3>

              <div className="space-y-6 mb-10">
                {service.hourlyRate && (
                  <div className="flex items-baseline gap-3">
                    <DollarSign className="text-[#FF7A59]" size={28} />
                    <div>
                      <span className="text-4xl font-bold text-[#FF7A59]">
                        ৳{service.hourlyRate}
                      </span>
                      <span className="text-gray-500"> / hour</span>
                    </div>
                  </div>
                )}

                {service.dailyRate && (
                  <div className="flex items-baseline gap-3">
                    <Calendar className="text-[#34C759]" size={28} />
                    <div>
                      <span className="text-4xl font-bold text-[#34C759]">
                        ৳{service.dailyRate}
                      </span>
                      <span className="text-gray-500"> / day</span>
                    </div>
                  </div>
                )}

                {service.nightShiftRate && (
                  <div className="flex items-baseline gap-3">
                    <Clock className="text-[#4A90E2]" size={28} />
                    <div>
                      <span className="text-3xl font-bold text-[#4A90E2]">
                        ৳{service.nightShiftRate}
                      </span>
                      <span className="text-gray-500"> / night shift</span>
                    </div>
                  </div>
                )}
              </div>

              <Link
                href={`/booking?service=${encodeURIComponent(service.name)}`}
                className="
                  block w-full 
                  bg-[#FF7A59] hover:bg-[#e66a4d] 
                  text-white font-bold text-xl text-center 
                  py-5 rounded-full 
                  transition transform hover:scale-[1.02] 
                  shadow-xl hover:shadow-2xl
                  focus:outline-none focus:ring-4 focus:ring-[#FF7A59]/40
                "
              >
                Book This Service Now
              </Link>

              <p className="text-center text-sm text-gray-500 mt-6">
                Flexible scheduling • Verified caregivers • Secure payments
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}