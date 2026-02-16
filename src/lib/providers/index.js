import BookingContextProvider from '@/context/booking.context';
import UserContextProvider from '@/context/user.context';
import React from 'react';

const Providers = ({ children}) => {
    return (
        <BookingContextProvider>
             <UserContextProvider>
            {children}
        </UserContextProvider>
        </BookingContextProvider>
       
    );
};

export default Providers;