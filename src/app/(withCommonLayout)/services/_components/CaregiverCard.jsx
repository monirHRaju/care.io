import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CiLocationOn } from "react-icons/ci";

const CaregiverCard = ({ caregiver }) => {
    return (
        <div
              key={caregiver.id}
              className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              {/* Image */}
              <div className="aspect-4/3 relative">
                <Image
                  width={400}
                  height={300}
                  src={caregiver.image}
                  alt={caregiver.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-1">
                  {caregiver.name}
                </h3>

                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center">
                    <span className="text-[#34C759] text-xl">★</span>
                    <span className="ml-1 font-medium">
                      {caregiver.rating}
                    </span>
                    <span className="ml-1 text-sm">
                      ({caregiver.reviews})
                    </span>
                  </div>
                  <span className="text-[#FF7A59] font-bold text-lg">
                    ${caregiver.rate}/hr
                  </span>
                </div>

                <p className="text-sm text-gray-400 mb-4 flex items-center">
                  <CiLocationOn className="mr-1 text-gray-500" />
                  {caregiver.distance}
                </p>

                <Link
                  href={`/caregivers/${caregiver.id}`}
                  className="block w-full bg-[#FF7A59] hover:bg-[#e66a4d] text-white font-semibold text-center py-3 rounded-full transition transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#FF7A59]/40"
                >
                  Book Now
                </Link>
              </div>
            </div>
    );
};

export default CaregiverCard;