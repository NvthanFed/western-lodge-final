"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeInUp } from "@/components/ui/FadeInUp";
import { fadeInLeft, fadeInRight } from "@/lib/animations";

interface VenueDetailsProps {
  eyebrow: string;
  title: string;
  description: string;
  features: string[];
}

function VenueDetails({ eyebrow, title, description, features }: VenueDetailsProps) {
  return (
    <div>
      <div className="flex items-center gap-3 mb-5">
        <span className="block h-px w-8 bg-teal-400/60" />
        <p className="eyebrow text-teal-500">{eyebrow}</p>
      </div>
      <h3 className="font-heading font-800 text-fluid-3xl text-teal-900 leading-tight mb-5">{title}</h3>
      <p className="font-body text-fluid-base text-muted leading-relaxed mb-8">{description}</p>
      <ul className="space-y-3">
        {features.map((feature) => (
          <li key={feature} className="flex items-center gap-3">
            <span className="w-5 h-5 rounded-full bg-teal-50 flex items-center justify-center shrink-0">
              <Check className="w-3 h-3 text-teal-500" strokeWidth={2.5} />
            </span>
            <span className="font-body text-sm text-navy-900">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function VenuesSection() {
  return (
    <section id="venues" className="bg-white section-y">
      <div className="max-w-7xl mx-auto section-x">

        {/* Header */}
        <FadeInUp className="text-center mb-16 lg:mb-20">
          <SectionHeading
            eyebrow="Signature Spaces"
            title="Beyond the Room"
            subtitle="Two distinctive spaces crafted for every occasion — from focused meetings to golden-hour cocktails above the bay."
            centered
          />
        </FadeInUp>

        {/* Conference Hall — collage left, text right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20 lg:mb-28">

          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="gpu-accelerated"
          >
            {/* 1 large photo left + 3 smaller right column */}
            <div className="grid grid-cols-3 grid-rows-3 gap-2 h-[280px] sm:h-[380px] lg:h-[460px]">
              <div className="col-span-2 row-span-3 relative rounded-2xl overflow-hidden">
                <Image
                  src="/hall1.jpeg"
                  alt="Conference hall — main view"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 60vw, 28vw"
                />
              </div>
              <div className="relative rounded-2xl overflow-hidden">
                <Image
                  src="/hall2.jpeg"
                  alt="Conference hall — seating"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 30vw, 14vw"
                />
              </div>
              <div className="relative rounded-2xl overflow-hidden">
                <Image
                  src="/hall3.jpeg"
                  alt="Conference hall — interior"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 30vw, 14vw"
                />
              </div>
              <div className="relative rounded-2xl overflow-hidden">
                <Image
                  src="/hall4.jpeg"
                  alt="Conference hall — setup"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 30vw, 14vw"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="gpu-accelerated"
          >
            <VenueDetails
              eyebrow="Events & Meetings"
              title="Conference Hall"
              description="Host your corporate events, seminars, or private celebrations in our fully equipped conference hall. Modern audio-visual facilities, flexible seating arrangements, and dedicated catering make it ideal for both productive meetings and memorable occasions."
              features={[
                "Capacity up to 50 guests",
                "Audio-visual equipment included",
                "Flexible seating arrangements",
                "Dedicated catering service",
              ]}
            />
          </motion.div>
        </div>

        {/* Rooftop Bar — text left, collage right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="gpu-accelerated order-2 lg:order-1"
          >
            <VenueDetails
              eyebrow="Bar & Terrace"
              title="Rooftop Bar"
              description="Elevate your evenings at our open-air rooftop terrace. Watch the sun dip behind the limestone karsts of Marabut Bay while sipping handcrafted cocktails — the perfect setting for sundowners, romantic dinners, and unforgettable island nights."
              features={[
                "Panoramic Marabut Bay views",
                "Handcrafted cocktails & spirits",
                "Open-air dining experience",
                "Golden hour sundowners",
              ]}
            />
          </motion.div>

          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="gpu-accelerated order-1 lg:order-2"
          >
            <div className="relative h-[280px] sm:h-[380px] lg:h-[460px] rounded-2xl overflow-hidden">
              <Image
                src="/rooftop3.png"
                alt="Western Highway Lodge — outdoor terrace"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-teal-900/30 to-transparent" />
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
