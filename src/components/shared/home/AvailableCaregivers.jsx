// components/AvailableCaregivers.jsx
import CaregiverCard from "@/app/(withCommonLayout)/services/_components/CaregiverCard";
import Link from "next/link";
import Container from "../Container";

// Sample data (you'll replace this with real data from Firebase later)
const caregivers = [
  {
    id: 1,
    name: "Sarah Johnson",
    rate: 28,
    rating: 4.9,
    reviews: 127,
    distance: "Downtown, 2.3 mi",
    image: "https://thumbs.dreamstime.com/b/caring-nurse-smiling-looking-old-woman-patient-showing-support-young-female-caregiver-white-coat-her-friendly-attitude-warm-184959809.jpg",
  },
  {
    id: 2,
    name: "Maria Garcia",
    rate: 25,
    rating: 4.8,
    reviews: 89,
    distance: "Westside, 1.8 mi",
    image: "https://thumbs.dreamstime.com/b/portrait-senior-woman-laughing-her-smiling-caregiver-garden-happy-elderly-patient-young-female-nurse-holding-hands-403710018.jpg",
  },
  {
    id: 3,
    name: "James Wilson",
    rate: 30,
    rating: 5.0,
    reviews: 142,
    distance: "Eastside, 3.1 mi",
    image: "https://thumbs.dreamstime.com/b/nurse-home-help-old-man-to-walk-support-healthcare-homecare-caregiver-senior-person-medical-assistance-living-room-418605235.jpg",
  },
  {
    id: 4,
    name: "David Kim",
    rate: 27,
    rating: 4.8,
    reviews: 95,
    distance: "Midtown, 2.7 mi",
    image: "https://thumbs.dreamstime.com/b/portrait-happy-elderly-man-using-walker-lovely-young-nurse-helping-him-retirement-home-mature-male-petient-397326360.jpg",
  },
  {
    id: 5,
    name: "Ayesha Rahman",
    rate: 26,
    rating: 4.7,
    reviews: 68,
    distance: "Mirpur, 1.9 mi",
    image: "https://thumbs.dreamstime.com/b/portrait-young-asian-female-nurse-smiling-woman-medical-scrubs-friendly-healthcare-professional-headshot-403880467.jpg",
  },
  {
    id: 6,
    name: "Lisa Thompson",
    rate: 29,
    rating: 4.9,
    reviews: 110,
    distance: "Uttara, 4.2 mi",
    image: "https://thumbs.dreamstime.com/b/young-babysitter-plays-child-kid-girl-play-baby-sitter-living-room-hug-her-behind-laughing-having-fun-400001026.jpg",
  },
  {
    id: 7,
    name: "Rahim Khan",
    rate: 24,
    rating: 4.6,
    reviews: 75,
    distance: "Dhanmondi, 2.1 mi",
    image: "https://www.shutterstock.com/shutterstock/photos/2331247555/display_1500/stock-photo-male-care-assistant-supporting-senior-man-while-getting-up-from-sofa-at-home-2331247555.jpg",
  },
  {
    id: 8,
    name: "Emily Chen",
    rate: 28,
    rating: 4.9,
    reviews: 98,
    distance: "Gulshan, 3.5 mi",
    image: "https://thumbs.dreamstime.com/b/kind-mother-daughter-family-helping-young-teacher-babysitter-girl-small-pupil-doing-class-warm-carpet-learning-home-work-414373473.jpg",
  },
];

export default function AvailableCaregivers() {
  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-900 ">
      <Container>
        <div className="sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8 text-center md:text-left">
          <h2 className="text-3xl font-bold mb-2">
            Available Caregivers
          </h2>
          <p className="text-lg text-gray-400">
            8 nearby caregivers ready to help your family
          </p>
        </div>

        {/* Search Bar (optional - can be moved to hero or separate component) */}
        <div className="mb-10 max-w-2xl mx-auto md:mx-0">
          <div className="relative">
            <input
              type="text"
              placeholder="Search by location or service..."
              className="w-full rounded-full bg-white border border-gray-200 pl-12 pr-4 py-3 text-base focus:outline-none focus:border-[#FF7A59] focus:ring-2 focus:ring-[#FF7A59]/30 shadow-sm"
            />
            <svg
              className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        {/* Caregiver Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {caregivers.map((caregiver, index) => (
            <CaregiverCard key={index} caregiver={caregiver} />
          ))}
        </div>
      </div>
      </Container>
    </section>
  );
}