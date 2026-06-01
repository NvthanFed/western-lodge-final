"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useScrolled } from "@/hooks/useScrolled";
import { useBookingModal } from "@/context/BookingModalContext";
import { NAV_LINKS } from "@/data/content";
import { slideDown } from "@/lib/animations";

export function Navbar() {
  const scrolled = useScrolled(80);
  const { openModal } = useBookingModal();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-cream-100/96 backdrop-blur-md shadow-nav border-b border-sand-300/60"
          : "bg-transparent"
      )}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-[68px] md:h-[76px]">

        {/* Logo lockup */}
        <Link href="/" className="flex flex-col leading-none shrink-0 group">
          <span
            className={cn(
              "font-heading font-800 text-base md:text-lg tracking-[0.08em] transition-colors duration-400",
              scrolled ? "text-navy-900" : "text-white"
            )}
          >
            WESTERN HIGHWAY
          </span>
          <span
            className={cn(
              "font-body font-500 text-[0.6rem] tracking-[0.42em] uppercase transition-colors duration-400",
              scrolled ? "text-teal-500" : "text-cream-300/70"
            )}
          >
            LODGE
          </span>
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={cn(
                  "font-body font-500 text-sm tracking-wide transition-colors duration-300 hover:opacity-60",
                  scrolled ? "text-navy-900" : "text-white/90"
                )}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Book Now pill + hamburger */}
        {/* Book Now pill + hamburger */}
        <div className="flex items-center gap-3">
          <button
            onClick={openModal}
            className="hidden md:inline-flex font-body font-600 text-sm text-white bg-terracotta-500 hover:bg-terracotta-600 px-6 py-2.5 rounded-full shadow-sm transition-all duration-300 active:scale-[0.97]"
          >
            Book Now
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={cn(
              "md:hidden w-9 h-9 rounded-lg flex items-center justify-center transition-colors",
              scrolled ? "text-navy-900 hover:bg-sand-200" : "text-white hover:bg-white/10"
            )}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            variants={slideDown}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden bg-cream-100 border-t border-sand-300 overflow-hidden"
          >
            <div className="px-6 pt-2 pb-6 flex flex-col">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-body text-navy-900 text-base font-500 py-3.5 border-b border-sand-200 last:border-0 hover:text-teal-500 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <button
                onClick={() => { openModal(); setMobileOpen(false); }}
                className="mt-5 w-full bg-terracotta-500 hover:bg-terracotta-600 text-white font-body font-600 text-sm py-3.5 rounded-full transition-colors"
              >
                Book Your Stay
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
