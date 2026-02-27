// components/Navbar.jsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // ← Added for active link detection
import { Search, User, Menu, X } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();
  const pathname = usePathname(); // Gets current URL path

  const toggleMenu = () => setIsOpen(!isOpen);

  // Helper to check if link is active
  const isActive = (path) => {
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  };

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full shadow-sm border-b border-[#FF7A59]/30 bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold tracking-tight">
              <span className="text-[#FF7A59]">Care.</span>
              <span className="text-gray-900 dark:text-white">IO</span>
            </Link>
          </div>

          {/* Desktop Navigation + Search + Profile */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {/* Nav Links */}
            <div className="flex space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`
                    font-medium transition-colors duration-200
                    ${
                      isActive(item.href)
                        ? "text-[#FF7A59] border-b-2 border-[#FF7A59]"
                        : "text-gray-700 dark:text-gray-300 hover:text-[#FF7A59] dark:hover:text-[#FF9A7A]"
                    }
                  `}
                >
                  {item.label}
                </Link>
              ))}

              {/* Authenticated extra links */}
              {user && (
                <>
                  <Link
                    href="/my-bookings"
                    className={`
                      font-medium transition-colors duration-200
                      ${
                        isActive("/my-bookings")
                          ? "text-[#FF7A59] border-b-2 border-[#FF7A59]"
                          : "text-gray-700 dark:text-gray-300 hover:text-[#FF7A59] dark:hover:text-[#FF9A7A]"
                      }
                    `}
                  >
                    My Bookings
                  </Link>

                  <Link
                    href="/dashboard"
                    className={`
                      font-medium transition-colors duration-200
                      ${
                        isActive("/dashboard")
                          ? "text-[#FF7A59] border-b-2 border-[#FF7A59]"
                          : "text-gray-700 dark:text-gray-300 hover:text-[#FF7A59] dark:hover:text-[#FF9A7A]"
                      }
                    `}
                  >
                    Dashboard
                  </Link>
                </>
              )}
            </div>

            {/* Search Bar */}
            <div className="relative w-64">
              <input
                type="text"
                placeholder="Search caregivers or services..."
                className="
                  w-full rounded-full bg-gray-50 dark:bg-gray-800 
                  border border-gray-200 dark:border-gray-700 
                  pl-10 pr-4 py-2 text-sm 
                  text-gray-900 dark:text-gray-100
                  placeholder-gray-500 dark:placeholder-gray-400
                  focus:outline-none focus:border-[#FF7A59] focus:ring-1 focus:ring-[#FF7A59] 
                  transition
                "
              />
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400 dark:text-gray-500" />
            </div>

            {/* Auth Section */}
            {user ? (
              <div className="flex items-center space-x-4">
                <Link href="/profile" className="flex items-center space-x-2">
                  {user.photoURL ? (
                    <Image
                      src={user.photoURL}
                      alt="profile"
                      width={32}
                      height={32}
                      className="rounded-full"
                    />
                  ) : (
                    <User className="h-6 w-6 text-gray-700 dark:text-gray-300" />
                  )}
                </Link>

                <button
                  onClick={logout}
                  className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-[#FF7A59] dark:hover:text-[#FF9A7A]"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link
                href="/login"
                className="
                  bg-[#FF7A59] hover:bg-[#e66a4d] 
                  dark:bg-[#FF9A7A] dark:hover:bg-[#FF7A59]
                  text-white px-4 py-2 rounded-full 
                  text-sm font-medium transition
                "
              >
                Login
              </Link>
            )}
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 dark:text-gray-300 hover:text-[#FF7A59] dark:hover:text-[#FF9A7A] focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
          <div className="space-y-4 px-4 py-6">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`
                  block font-medium py-2 transition
                  ${
                    isActive(item.href)
                      ? "text-[#FF7A59] font-semibold"
                      : "text-gray-700 dark:text-gray-300 hover:text-[#FF7A59] dark:hover:text-[#FF9A7A]"
                  }
                `}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            {user && (
              <>
                <Link
                  href="/my-bookings"
                  className={`
                    block font-medium py-2 transition
                    ${
                      isActive("/my-bookings")
                        ? "text-[#FF7A59] font-semibold"
                        : "text-gray-700 dark:text-gray-300 hover:text-[#FF7A59] dark:hover:text-[#FF9A7A]"
                    }
                  `}
                  onClick={() => setIsOpen(false)}
                >
                  My Bookings
                </Link>

                <Link
                  href="/dashboard"
                  className={`
                    block font-medium py-2 transition
                    ${
                      isActive("/dashboard")
                        ? "text-[#FF7A59] font-semibold"
                        : "text-gray-700 dark:text-gray-300 hover:text-[#FF7A59] dark:hover:text-[#FF9A7A]"
                    }
                  `}
                  onClick={() => setIsOpen(false)}
                >
                  Dashboard
                </Link>
              </>
            )}

            {/* Mobile Search */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search caregivers or services..."
                className="
                  w-full rounded-full bg-gray-50 dark:bg-gray-800 
                  border border-gray-200 dark:border-gray-700 
                  pl-10 pr-4 py-3 text-base 
                  text-gray-900 dark:text-gray-100
                  placeholder-gray-500 dark:placeholder-gray-400
                  focus:outline-none focus:border-[#FF7A59] focus:ring-1 focus:ring-[#FF7A59]
                "
              />
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400 dark:text-gray-500" />
            </div>

            {/* Mobile Auth Section */}
            {user ? (
              <div className="flex flex-col gap-4">
                <Link
                  href="/profile"
                  className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-[#FF7A59] dark:hover:text-[#FF9A7A]"
                  onClick={() => setIsOpen(false)}
                >
                  {user.photoURL ? (
                    <Image
                      src={user.photoURL}
                      alt="profile"
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                  ) : (
                    <User className="h-8 w-8" />
                  )}
                  <span>Profile</span>
                </Link>

                <button
                  onClick={() => {
                    logout();
                    setIsOpen(false);
                  }}
                  className="text-left text-gray-700 dark:text-gray-300 hover:text-[#FF7A59] dark:hover:text-[#FF9A7A]"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link
                href="/login"
                className="
                  bg-[#FF7A59] hover:bg-[#e66a4d] 
                  dark:bg-[#FF9A7A] dark:hover:bg-[#FF7A59]
                  text-white px-6 py-3 rounded-full 
                  text-base font-medium transition text-center
                "
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}