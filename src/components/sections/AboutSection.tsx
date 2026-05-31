"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeInUp } from "@/components/ui/FadeInUp";
import { fadeInLeft, fadeInRight } from "@/lib/animations";

export function AboutSection() {
  return (
    <section id="about" className="bg-ivory section-y">
      <div className="max-w-7xl mx-auto section-x">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left — image */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="relative gpu-accelerated"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-luxury">
              <Image
                src="/western-lodge.png"
                alt="Western Highway Lodge — Marabut, Samar"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-linear-to-b from-transparent to-teal-900/30" />
            </div>

            {/* Decorative circle */}
            <div className="absolute -top-4 -left-4 w-24 h-24 rounded-full border-2 border-sand-300/80 -z-10" />

            {/* Floating Est. card */}
            <div className="absolute -bottom-5 -right-5 bg-teal-500 rounded-2xl px-5 py-4 shadow-luxury">
              <p className="font-body font-600 text-[0.65rem] tracking-[0.2em] uppercase text-teal-100/80 mb-1">Est.</p>
              <p className="font-heading font-800 text-white text-3xl leading-none">2018</p>
              <p className="font-body text-[0.65rem] tracking-[0.15em] uppercase text-teal-100/80 mt-1">Marabut, Samar</p>
            </div>
          </motion.div>

          {/* Right — text */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="gpu-accelerated"
          >
            <SectionHeading
              eyebrow="About Western Highway Lodge"
              title="A Coastal Sanctuary in the Heart of Samar"
              className="mb-8"
            />
            <div className="space-y-5 font-body text-fluid-base text-muted leading-relaxed">
              <p>
                Nestled along the pristine shores of Marabut Bay, Western Highway Lodge was founded with a single vision: to offer guests an authentic Philippine coastal experience without sacrificing comfort or elegance. Every detail — from the locally sourced timber accents to the handcrafted rattan furniture — reflects the natural beauty of our surroundings.
              </p>
              <p>
                Our team of dedicated hospitality professionals are proud Samareños, passionate about sharing the wonders of their home province. Whether you&apos;re here for island hopping, deep-sea diving, or simply to watch the sun set behind the limestone karsts, Western Highway Lodge is your ideal base.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-10 pt-8 border-t border-sand-300">
              {[
                { value: "7+", label: "Years of Service" },
                { value: "12", label: "Room Types" },
                { value: "4.9★", label: "Guest Rating" },
              ].map(({ value, label }) => (
                <div key={label}>
                  <p className="font-heading font-800 text-teal-500 text-2xl md:text-3xl">{value}</p>
                  <p className="font-body text-xs text-muted mt-1 tracking-wide">{label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
