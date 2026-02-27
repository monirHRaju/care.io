"use client"
import { useAuth } from '@/context/AuthContext';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';

const MyMenu = ({children, className, href}) => {
    const [isOpen, setIsOpen] = useState(false);
    const { user, logout } = useAuth();
    const pathname = usePathname(); // Gets current URL path

    const toggleMenu = () => setIsOpen(!isOpen);

    // Helper to check if link is active
    const isActive = (path) => {
        if (path === "/") return pathname === "/";
        return pathname.startsWith(path);
    };
    return (
        <Link
                  href={href}
                  className={`
                    block font-medium py-2 transition
                    ${
                      isActive({href})
                        ? "text-[#FF7A59] font-semibold"
                        : "text-gray-700 dark:text-gray-300 hover:text-[#FF7A59] dark:hover:text-[#FF9A7A]"
                    }
                  `}
                    onClick={() => setIsOpen(false)}
                >
                  {children}
                </Link>
    );
};

export default MyMenu;