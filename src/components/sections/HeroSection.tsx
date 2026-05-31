"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { heroTextContainer, heroText } from "@/lib/animations";
import { useBookingModal } from "@/context/BookingModalContext";

export function HeroSection() {
  const { openModal } = useBookingModal();

  return (
    <section className="relative h-screen min-h-[640px] overflow-hidden">
      {/* Background — Ken Burns via CSS animation (browser compositor, no JS cost) */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/western-lodge.png"
          alt="Western Highway Lodge — Coastal paradise in Marabut, Samar"
          fill
          className="object-cover animate-ken-burns"
          priority
          sizes="100vw"
        />
      </div>

      {/* Multi-layer overlays */}
      <div className="absolute inset-0 z-10 hero-overlay" />
      <div className="absolute inset-0 z-10 bg-linear-to-r from-black/40 via-black/10 to-transparent" />
      <div className="absolute inset-0 z-10 bg-linear-to-t from-black/60 via-transparent to-black/15" />

      {/* Content */}
      <div className="absolute inset-0 z-20 flex items-center">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            variants={heroTextContainer}
            initial="hidden"
            animate="visible"
            className="max-w-2xl gpu-accelerated"
          >
            <motion.div variants={heroText} className="flex items-center gap-3 mb-6">
              <span className="block h-px w-8 bg-sand-300/60" />
              <p className="font-body font-600 text-[0.7rem] tracking-[0.32em] uppercase text-sand-200/75">
                Marabut, Samar Province · Philippines
              </p>
            </motion.div>

            <motion.h1 variants={heroText} className="font-heading font-800 text-fluid-hero text-white leading-[0.93] mb-6">
              Western<br />
              Highway<br />
              <span className="text-sand-300">Lodge</span>
            </motion.h1>

            <motion.p variants={heroText} className="font-body text-fluid-lg text-sand-200/85 mb-10 max-w-sm leading-relaxed">
              Where the Coast Meets Luxury
            </motion.p>

            <motion.div variants={heroText} className="flex flex-col sm:flex-row items-start gap-4">
              <button
                onClick={openModal}
                className="font-body font-600 text-sm tracking-[0.06em] bg-terracotta-500 hover:bg-terracotta-600 text-white px-9 py-4 rounded-xl transition-all duration-300 shadow-luxury active:scale-[0.98]"
              >
                Reserve Your Stay
              </button>
              <a
                href="#rooms"
                className="font-body font-500 text-sm tracking-wide border border-white/50 hover:border-white text-white hover:bg-white/10 px-9 py-4 rounded-xl transition-all duration-300 text-center"
              >
                Explore Rooms
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator — one-time fade-in, no repeat:Infinity */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 0.6 }}
      >
        <span className="font-body text-[0.65rem] tracking-[0.3em] uppercase text-white/40">Scroll</span>
        <ChevronDown className="w-4 h-4 text-white/40" />
      </motion.div>
    </section>
  );
}
