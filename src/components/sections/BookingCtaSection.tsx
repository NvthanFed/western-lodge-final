"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useBookingModal } from "@/context/BookingModalContext";
import { fadeInUp } from "@/lib/animations";

export function BookingCtaSection() {
  const { openModal } = useBookingModal();

  return (
    <section className="relative h-[500px] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/western-lodge.png"
          alt="Western Highway Lodge — book your stay"
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>
      <div className="absolute inset-0 bg-teal-900/65 z-10" />
      <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-black/20 z-10" />

      <div className="relative z-20 h-full flex items-center justify-center">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center px-6"
        >
          <p className="eyebrow text-terracotta-300 mb-4">Book Direct · Best Rate Guaranteed</p>
          <h2 className="font-heading font-800 text-fluid-4xl text-white leading-tight mb-4">
            Your Coastal Escape<br />
            <span className="text-sand-300">Awaits</span>
          </h2>
          <p className="font-body text-fluid-base text-white/75 max-w-md mx-auto mb-8 leading-relaxed">
            Reserve directly with us for the best available rate, exclusive perks, and personalized service from our team.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={openModal}
              className="font-body font-600 text-sm tracking-wide bg-terracotta-500 hover:bg-terracotta-600 text-white px-9 py-4 rounded-xl transition-all duration-300 shadow-luxury"
            >
              Reserve Now
            </button>
            <a
              href="#contact"
              className="font-body font-500 text-sm tracking-wide border border-white/50 hover:border-white text-white hover:bg-white/10 px-9 py-4 rounded-xl transition-all duration-300"
            >
              Contact Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
