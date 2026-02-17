import { AuthProvider } from '@/context/AuthContext';
import BookingContextProvider from '@/context/booking.context';
import UserContextProvider from '@/context/user.context';
import React from 'react';

const Providers = ({ children}) => {
    return (
        <AuthProvider>
            <BookingContextProvider>
                <UserContextProvider>
                    {children}
                </UserContextProvider>
            </BookingContextProvider>
        </AuthProvider>
       
    );
};

export default Providers;