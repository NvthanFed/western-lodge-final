"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { FadeInUp } from "@/components/ui/FadeInUp";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useBookingModal } from "@/context/BookingModalContext";

const FEATURED_ROOMS = [
  {
    id: "suite-single",
    name: "En Suite Single Room",
    badge: { label: "Standard", className: "bg-tropical-500 text-white" },
    price: "₱950",
    description:
      "Full-size single bed with en-suite shower, air conditioning, fridge, satellite TV, kettle, and complimentary toiletries. Comfortable and value-packed for the solo traveller.",
    image: "/enSuiteSingleRoom.jpeg",
  },
  {
    id: "delux-single",
    name: "Delux Single Room",
    badge: { label: "Standard", className: "bg-tropical-500 text-white" },
    price: "₱950",
    description:
      "Full-size single bed with en-suite shower, air conditioning, fridge, satellite TV, kettle, and complimentary toiletries. Comfortable and value-packed for the solo traveller.",
    image: "/room2.png",
  },
  
  {
    id: "studio-balcony",
    name: "Delux Double Studio",
    badge: { label: "Delux", className: "bg-teal-500 text-white" },
    price: "₱1,400",
    description:
      "Queen bed and sofa set with a private balcony. En-suite hot/cold shower, AC, ceiling fan, fridge, and satellite TV. Perfect for couples. Extra person +₱600/night.",
    image: "/room1.jpeg",
  },
  {
    id: "family-studio",
    name: "Superior Delux Family Studio",
    badge: { label: "Family", className: "bg-teal-500 text-white" },
    price: "from ₱2,000",
    description:
      "Double bed, single bed, plus an adjoining bunk room — sleeps up to 5. En-suite hot/cold shower, fridge, satellite TV, vanity unit, and storage. 3 Pax ₱2,000 · 4 Pax ₱2,600 · 5 Pax ₱3,250.",
    image: "/room5.png",
  },
  {
    id: "super-studio",
    name: "Super Delux Studio",
    badge: { label: "Delux", className: "bg-teal-500 text-white" },
    price: "from ₱1,500",
    description:
      "Queen size bed plus a full-size single bed with en-suite hot/cold shower, AC, fridge, and satellite TV. Sleeps up to 3. 1–2 Pax ₱1,500 · 3 Pax ₱1,950. Extra person +₱600/night.",
    image: "/room4.png",
  },
  {
    id: "superior-suite",
    name: "Superior Delux Suite",
    badge: { label: "Suite", className: "bg-terracotta-500 text-white" },
    price: "from ₱3,250",
    description:
      "Three-bedroom apartment for up to 8 guests. Queen, single, and baby crib in Bedroom 1 · twin bunks in Bedroom 2 · three singles in Bedroom 3. Dining table, fridge, mineral water dispenser, and satellite TV throughout. 5 Pax ₱3,250 · 6 Pax ₱3,900 · 8 Pax ₱5,200.",
    image: "/room3.png",
  },
] as const;

export function RoomsSection() {
  const { openModal } = useBookingModal();

  return (
    <section id="rooms" className="bg-ivory section-y">
      <div className="max-w-7xl mx-auto section-x">

        {/* Header row */}
        <FadeInUp className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 lg:mb-16">
          <SectionHeading
            eyebrow="Accommodations"
            title="Your Perfect Retreat"
            subtitle="Each room is a carefully curated sanctuary, designed to immerse you in the coastal atmosphere of Marabut."
          />
          <div className="shrink-0">
            <button
              onClick={openModal}
              className="font-body font-600 text-sm tracking-wide border border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white px-7 py-3 rounded-[10px] transition-all duration-300"
            >
              Check Availability
            </button>
          </div>
        </FadeInUp>

        {/* 3-up card grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 gpu-accelerated"
        >
          {FEATURED_ROOMS.map((room) => (
            <motion.div
              key={room.id}
              variants={fadeInUp}
              className="group bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-luxury transition-shadow duration-400 flex flex-col"
            >
              {/* Image with overlaying pills */}
              <div className="relative aspect-[3/2] overflow-hidden shrink-0">
                <div className="absolute inset-0 group-hover:scale-105 transition-transform duration-700">
                  <Image
                    src={room.image}
                    alt={room.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>

                {/* Category pill — top-left */}
                <span
                  className={cn(
                    "absolute top-3 left-3 text-xs font-body font-600 px-3 py-1.5 rounded-lg tracking-wide z-10",
                    room.badge.className
                  )}
                >
                  {room.badge.label}
                </span>

                {/* Price pill — top-right dark */}
                <div className="absolute top-3 right-3 bg-navy-900/80 backdrop-blur-sm text-white px-3 py-1.5 rounded-lg text-xs font-body font-600 leading-none z-10">
                  {room.price}
                  <span className="text-cream-300/70 ml-1">/ night</span>
                </div>

                {/* Hover overlay with CTA */}
                <div className="absolute inset-0 bg-linear-to-t from-teal-900/80 via-teal-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end p-5 z-10">
                  <button
                    onClick={openModal}
                    className="w-full bg-terracotta-500 hover:bg-terracotta-600 text-white font-body font-600 py-2.5 px-5 rounded-[10px] transition-colors text-sm tracking-wide"
                  >
                    Book This Room
                  </button>
                </div>
              </div>

              {/* Card body */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-start justify-between gap-2 mb-3">
                  <h3 className="font-heading font-700 text-lg text-teal-900 leading-tight">{room.name}</h3>
                  <div className="flex items-center gap-1 text-tropical-500 shrink-0 mt-0.5">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <span className="text-xs font-body font-600">4.9</span>
                  </div>
                </div>
                <p className="font-body text-sm text-muted leading-relaxed flex-1">{room.description}</p>
                <button
                  onClick={openModal}
                  className="mt-5 pt-5 border-t border-sand-300 text-sm font-body font-600 text-terracotta-500 hover:text-terracotta-600 transition-colors text-left"
                >
                  Reserve →
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
