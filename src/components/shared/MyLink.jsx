// components/NavLinks.jsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { FaHome, FaCar, FaCalendarCheck, FaInfoCircle, FaPhoneAlt } from 'react-icons/fa';

const navItems = [
  { label: 'Home', href: '/', icon: FaHome },
  { label: 'Services', href: '/services', icon: FaCar },
  { label: 'Booking', href: '/booking', icon: FaCalendarCheck },
  { label: 'About', href: '/about', icon: FaInfoCircle },
  { label: 'Contact', href: '/contact', icon: FaPhoneAlt },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <ul className="menu menu-horizontal px-1 gap-2 lg:gap-3">
      {navItems.map((item) => {
        const isActive =
          pathname === item.href ||
          (item.href !== '/' && pathname.startsWith(item.href));

        return (
          <li key={item.href}>
            <Link
              href={item.href}
              className={`
                relative flex items-center gap-2 px-3 py-2 rounded-lg text-base font-medium
                transition-all duration-300
                ${isActive
                  ? 'text-primary bg-primary/10 font-semibold'
                  : 'text-base-content/80 hover:text-primary hover:bg-base-200/60'}
              `}
            >
              {item.icon && <item.icon className="w-4 h-4" />}
              <span>{item.label}</span>

              {/* Animated active indicator */}
              {isActive && (
                <motion.div
                  layoutId="activeNavIndicator"
                  className="absolute inset-0 rounded-lg bg-primary/10 -z-10"
                  initial={false}
                  transition={{
                    type: 'spring',
                    stiffness: 400,
                    damping: 30,
                  }}
                />
              )}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}