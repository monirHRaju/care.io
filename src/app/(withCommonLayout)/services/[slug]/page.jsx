// app/services/[slug]/page.jsx   (or wherever your dynamic route is)
import Container from "@/components/shared/Container";
import Image from "next/image";
import Link from "next/link";
import { FaClock, FaCheckCircle, FaMoneyBillWave, FaArrowRight } from "react-icons/fa";
import BookingBtn from "../_components/BookingBtn";

const getSingleServices = async (id) => {
  const res = await fetch(`https://car-washing-system-cleanify-server.vercel.app/api/v1/services/${id}`, {
    cache: "no-store", // or use revalidate if needed
  });
  await new Promise((resolve) => 
            setTimeout(() => {
                resolve()
            }), 2000
        )
  const data = await res.json();
  return data?.data || null;
};

const ServiceDetails = async ({ params }) => {
  const { slug } = await params;
  console.log(slug)
  const service = await getSingleServices(slug);

  if (!service) {
    return (
      <div className="py-20 text-center">
        <Container>
          <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
          <p className="text-lg text-base-content/70 mb-8">
            The requested service could not be found or has been removed.
          </p>
          <Link href="/services" className="btn btn-primary">
            Back to Services
          </Link>
        </Container>
      </div>
    );
  }

  const plainDescription = service.description
    .replace(/<[^>]+>/g, "")
    .replace(/\s+/g, " ")
    .trim();

  const keyFeatures = [
    "High-quality wax application for a deep, glossy shine",
    "Machine polishing to remove scratches and marks",
    "Long-lasting paint protection",
    "Smooth, mirror-like finish",
    "Ideal for restoring older or faded paintwork",
  ];

  return (
    <div className="min-h-screen bg-base-200/30 py-10 md:py-16">
      <Container>
        {/* Breadcrumb */}
        <div className="text-sm breadcrumbs mb-6">
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li>{service.name}</li>
          </ul>
        </div>

        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-16">
          <div className="space-y-6">
            {service.isFeatured && (
              <div className="badge badge-primary badge-lg gap-2 px-5 py-3 text-base font-semibold">
                <FaCheckCircle /> Featured Service
              </div>
            )}

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              {service.name}
            </h1>

            <div className="flex flex-wrap gap-6 text-lg">
              <div className="flex items-center gap-3 badge badge-outline badge-lg py-4 px-6">
                <FaClock className="text-primary" />
                {service.duration} Minutes
              </div>
              <div className="flex items-center gap-3 badge badge-outline badge-lg py-4 px-6 font-bold text-xl text-primary">
                <FaMoneyBillWave />
                ৳{service.price.toLocaleString()}
              </div>
            </div>

            <div className="pt-4">
              <BookingBtn service={service}/>
            </div>
          </div>

          {/* Main Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
            <Image
              src={service.img}
              alt={service.name}
              width={800}
              height={600}
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent" />
          </div>
        </div>

        {/* Content Section */}
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Main Description & Features */}
          <div className="lg:col-span-2 space-y-10">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold mb-6">Whats Included</h2>
              <p className="text-base-content/80 leading-relaxed text-lg">
                {plainDescription}
              </p>
            </div>

            <div className="bg-base-100 p-8 rounded-2xl shadow-lg border border-base-200">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-success text-3xl">✔</span> Key Features
              </h3>
              <ul className="space-y-4 text-lg">
                {keyFeatures.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <span className="text-success text-xl mt-1">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar / Quick Info */}
          <div className="space-y-8">
            <div className="card bg-base-100 shadow-xl border border-primary/20">
              <div className="card-body">
                <h3 className="card-title text-2xl">Service Summary</h3>
                <div className="divider my-4"></div>
                <div className="space-y-4 text-base-content/80">
                  <div className="flex justify-between">
                    <span>Duration</span>
                    <span className="font-semibold">{service.duration} min</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Price</span>
                    <span className="font-bold text-primary text-xl">
                      ৳{service.price.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Status</span>
                    <span className="badge badge-success gap-2">
                      Available
                    </span>
                  </div>
                </div>
                <div className="card-actions mt-8">
                  <Link href="/booking" className="btn btn-primary w-full btn-lg rounded-full">
                    Book Now
                  </Link>
                </div>
              </div>
            </div>

            {/* Visual Gallery / Inspiration */}
            <div className="card bg-base-100 shadow-xl border border-base-200">
              <div className="card-body">
                <h3 className="card-title text-xl">See the Results</h3>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div className="aspect-square rounded-xl overflow-hidden">
                    <Image
                      src="https://images.pexels.com/photos/5233259/pexels-photo-5233259.jpeg"
                      alt="Polished car shine"
                      width={400}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-square rounded-xl overflow-hidden">
                    <Image
                      src="https://www.totalpackagedetailing.com/wp-content/uploads/2025/10/Restoring-an-older-vehicle.png"
                      alt="Before after polish"
                      width={400}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-square rounded-xl overflow-hidden">
                    <Image
                      src="https://lakelandceramiccoating.com/wp-content/uploads/2025/10/on-step-process.png"
                      alt="Machine polishing"
                      width={400}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-square rounded-xl overflow-hidden">
                    <Image
                      src="https://www.totalpackagedetailing.com/wp-content/uploads/2025/09/flawless-paint-correction-1024x578.png"
                      alt="Flawless shine result"
                      width={400}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ServiceDetails;