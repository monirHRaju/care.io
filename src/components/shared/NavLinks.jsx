// components/NavLinks.jsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { FaHome, FaCar, FaCalendarCheck, FaInfoCircle, FaPhoneAlt } from 'react-icons/fa';

const navItems = [
  { label: 'Home', href: '/'},
  { label: 'Services', href: '/services'},
  { label: 'Booking', href: '/booking' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
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
                  ? 'text-accent font-semibold'
                  : 'text-base-content/80 hover:text-primary '}
              `}
            >
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