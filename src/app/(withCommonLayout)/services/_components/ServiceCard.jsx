// components/ServiceCard.jsx
import Image from 'next/image';
import Link from 'next/link';

export default function ServiceCard({ service }) {
  // Destructure the data (you can pass the whole object or individual props)
  const {
    name = "Premium Wax and Polish",
    description = "",
    price = 0,
    img = "https://images.pexels.com/photos/5233259/pexels-photo-5233259.jpeg", // fallback
    duration = 0,
    isFeatured = false,
  } = service || {};

  // Clean up description - remove HTML tags for plain text preview
  const plainDesc = description
    .replace(/<[^>]+>/g, '')          // strip HTML
    .replace(/\s+/g, ' ')             // normalize spaces
    .trim()
    .slice(0, 130) + (description.length > 130 ? '...' : '');

  return (
    <div className={`
      card bg-base-100 shadow-xl overflow-hidden transition-all duration-300
      hover:shadow-2xl hover:-translate-y-2 group
      ${isFeatured ? 'border-2 border-primary' : ''}
    `}>
      {/* Image container with overlay gradient */}
      <figure className="relative h-64 overflow-hidden">
        <Image
          src={img}
          alt={name}
          height={200}
          width={200}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Gradient overlay for better text visibility if needed */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        {/* Featured badge */}
        {isFeatured && (
          <div className="absolute top-4 right-4 badge badge-primary badge-lg font-bold shadow-lg">
            Featured
          </div>
        )}
        
        {/* Duration badge */}
        {duration > 0 && (
          <div className="absolute bottom-4 left-4 badge badge-neutral badge-outline bg-base-100/80 backdrop-blur-sm">
            {duration} min
          </div>
        )}
      </figure>

      <div className="card-body p-6">
        <h2 className="card-title text-2xl font-bold text-base-content group-hover:text-primary transition-colors">
          {name}
        </h2>

        <p className="text-base-content/70 mt-2 line-clamp-3 min-h-[4.5rem]">
          {plainDesc || "Experience a showroom-quality shine with premium wax and expert machine polishing."}
        </p>

        {/* Key features list - extracted from your HTML */}
        <ul className="mt-4 space-y-2 text-sm text-base-content/80">
          <li className="flex items-center gap-2">
            <span className="text-success">✔</span> Deep, glossy shine
          </li>
          <li className="flex items-center gap-2">
            <span className="text-success">✔</span> Removes fine scratches & swirl marks
          </li>
          <li className="flex items-center gap-2">
            <span className="text-success">✔</span> Long-lasting paint protection
          </li>
          <li className="flex items-center gap-2">
            <span className="text-success">✔</span> Mirror-like finish
          </li>
        </ul>

        <div className="mt-6 flex items-center justify-between">
          <div className="text-2xl font-bold text-primary">
            ৳{price.toLocaleString()}
          </div>

          <Link
            href={`/services/${service._id}`}
            className="btn btn-primary btn-md rounded-full px-8"
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
}