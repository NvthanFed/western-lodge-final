"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useBookingModal } from "@/context/BookingModalContext";
import { heroTextContainer, heroText } from "@/lib/animations";

export function HeroSection() {
  const { openModal } = useBookingModal();

  return (
    <section className="relative h-screen min-h-[640px] overflow-hidden">

      {/* Background — Ken Burns via CSS animation */}
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

      {/* Gradient overlays for cinematic depth */}
      <div className="absolute inset-0 z-10 bg-linear-to-r from-black/50 via-black/20 to-transparent" />
      <div className="absolute inset-0 z-10 bg-linear-to-t from-black/65 via-transparent to-black/20" />

      {/* Content — upper-middle band, generous left padding */}
      <div className="absolute inset-0 z-20 flex items-center">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 pt-16">
          <motion.div
            variants={heroTextContainer}
            initial="hidden"
            animate="visible"
            className="max-w-2xl gpu-accelerated"
          >

            {/* Eyebrow */}
            <motion.div variants={heroText} className="flex items-center gap-3 mb-7">
              <span className="block h-px w-8 bg-cream-300/60" />
              <p className="font-body font-600 text-[0.68rem] tracking-[0.32em] uppercase text-cream-200/75">
                Marabut, Samar Province &bull; Philippines
              </p>
            </motion.div>

            {/* Three-line headline */}
            <motion.h1 variants={heroText} className="font-heading font-800 text-fluid-hero leading-[0.92] mb-6">
              <span className="block text-white">Western</span>
              <span className="block text-white">Highway</span>
              <span className="block text-cream-300">Lodge</span>
            </motion.h1>

            {/* Tagline */}
            <motion.p variants={heroText} className="font-body font-500 text-fluid-lg text-white/80 mb-10 leading-relaxed">
              Where the Coast Meets Luxury
            </motion.p>

            {/* CTAs */}
            <motion.div variants={heroText} className="flex flex-col sm:flex-row items-start gap-4">
              <button
                onClick={openModal}
                className="font-body font-600 text-sm tracking-[0.06em] bg-terracotta-500 hover:bg-terracotta-600 text-white px-9 py-4 rounded-[10px] transition-all duration-300 shadow-luxury active:scale-[0.98]"
              >
                Reserve Your Stay
              </button>
              <a
                href="#rooms"
                className="font-body font-500 text-sm tracking-wide border border-white/50 hover:border-white text-white hover:bg-white/10 px-9 py-4 rounded-[10px] transition-all duration-300 text-center"
              >
                Explore Rooms
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
