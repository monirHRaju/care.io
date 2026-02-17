// components/Navbar.jsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, User, Menu, X } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white shadow-sm border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold tracking-tight">
              <span className="text-[#FF7A59]">Care.</span>
              <span className="text-[#333333]">IO</span>
            </Link>
          </div>

          {/* Desktop Navigation + Search + Profile */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {/* Nav Links */}
            <div className="flex space-x-8">
              {["Home", "Services", "About", "Contact"].map(
                (item) => (
                  <Link
                    key={item}
                    href={
                      item === "Home"
                        ? "/"
                        : `/${item.toLowerCase().replace(" ", "-")}`
                    }
                    className="text-[#333333] hover:text-[#FF7A59] font-medium transition-colors duration-200"
                  >
                    {item}
                  </Link>
                ),
              )}
            </div>

            {/* Search Bar */}
            <div className="relative w-64">
              <input
                type="text"
                placeholder="Search caregivers or services..."
                className="w-full rounded-full bg-gray-50 border border-gray-200 pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-[#FF7A59] focus:ring-1 focus:ring-[#FF7A59] transition"
              />
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            </div>

            {/* Profile Icon */}
            {/* Profile Icon */}
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
                    <User className="h-6 w-6" />
                  )}
                </Link>

                <button
                  onClick={logout}
                  className="text-sm font-medium text-[#333333] hover:text-[#FF7A59]"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link
                href={'/login'}
                className="bg-[#FF7A59] text-white px-4 py-2 rounded-full text-sm font-medium hover:opacity-90 transition"
              >
                Login / Register
              </Link>
            )}
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center rounded-md p-2 text-[#333333] hover:text-[#FF7A59] focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <div className="space-y-4 px-4 py-6">
            {["Home", "Services", "My Bookings", "About"].map((item) => (
              <Link
                key={item}
                href={
                  item === "Home"
                    ? "/"
                    : `/${item.toLowerCase().replace(" ", "-")}`
                }
                className="block text-[#333333] hover:text-[#FF7A59] font-medium py-2 transition"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            ))}

            {/* Mobile Search */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search caregivers or services..."
                className="w-full rounded-full bg-gray-50 border border-gray-200 pl-10 pr-4 py-3 text-base focus:outline-none focus:border-[#FF7A59] focus:ring-1 focus:ring-[#FF7A59]"
              />
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            </div>

            {/* Mobile Profile Link */}
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
                    <User className="h-6 w-6" />
                  )}
                </Link>

                <button
                  onClick={logout}
                  className="text-sm font-medium text-[#333333] hover:text-[#FF7A59]"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link
                href={'/login'}
                className="bg-[#FF7A59] text-white px-4 py-2 rounded-full text-sm font-medium hover:opacity-90 transition"
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
