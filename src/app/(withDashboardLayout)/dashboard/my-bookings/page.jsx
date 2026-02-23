"use client"
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
            
        </div>
    );
};

export default MyBookings;