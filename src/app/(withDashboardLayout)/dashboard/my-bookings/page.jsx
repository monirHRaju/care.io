"use client"
import ServiceCard from '@/app/(withCommonLayout)/services/_components/ServiceCard';
import { BookingContext } from '@/context/booking.context';
import React, { use } from 'react';

const MyBookings = () => {
    const {
        bookings,
        setBookings,
        addBooking,
        removeBooking
    } = use(BookingContext)

    
    console.log(bookings)
    return (
        <div>

            {
                bookings.length > 0 
                ? <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 mt-8">    
                    {bookings.map((booking, index) => <ServiceCard key={index} service={booking} />)}
                </div>
                : <p>No bookings found.</p>
            }   
        </div>
    );
};

export default MyBookings;