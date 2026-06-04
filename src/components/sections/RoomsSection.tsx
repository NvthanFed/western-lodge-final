"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star, Users, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { FadeInUp } from "@/components/ui/FadeInUp";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useBookingModal } from "@/context/BookingModalContext";
import { RoomGalleryModal } from "@/components/ui/RoomGalleryModal";

const FEATURED_ROOMS = [ 
  {
    id: "double-bunk",
    name: "Double Bunks Single Room",
    badge: { label: "Bunk", className: "bg-tropical-600 text-white" },
    price: "₱900",
    capacity: 2,
    description:
      "Single-size bunk beds (up and down) with shared bathroom. Air conditioning, ceiling fan, kettle, mineral water, and complimentary toiletries. Single occupant ₱500/night.",
    images: ["/western-lodge.png"],
  },
  {
    id: "suite-single",
    name: "En Suite Single Room",
    badge: { label: "Standard", className: "bg-tropical-500 text-white" },
    price: "₱950",
    capacity: 1,
    description:
      "Full-size single bed with en-suite shower, air conditioning, fridge, satellite TV, kettle, and complimentary toiletries. Comfortable and value-packed for the solo traveller.",
    images: ["/En Suite Single Room/enSuiteSingleRoom.jpeg"],
  },
  {
    id: "studio-balcony",
    name: "Delux Double Studio",
    badge: { label: "Delux", className: "bg-teal-500 text-white" },
    price: "₱1,400",
    capacity: 2,
    description:
      "Queen bed and sofa set with a private balcony. En-suite hot/cold shower, AC, ceiling fan, fridge, and satellite TV. Perfect for couples. Extra person +₱600/night.",
    images: [
      "/Superior Delux Studio with Balcony/deluxStudio1.jpeg",
      "/Superior Delux Studio with Balcony/deluxStudio2.jpeg",
      "/Superior Delux Studio with Balcony/deluxStudio3.jpeg",
      "/Superior Delux Studio with Balcony/deluxStudio4.png",
    ],
  },
  
  {
    id: "twin-room",
    name: "Superior Delux Twin Room",
    badge: { label: "Delux", className: "bg-tropical-500 text-white" },
    price: "₱1,500",
    capacity: 2,
    description:
      "Two full size single beds, AC + ceiling fan, fridge, bathroom en-suite hot-cold shower, satellite TV, mineral water, complimentary toiletries. Extra person +₱600/night.",
    images: [
      "/Superior Delux Twin Room/superiorTwin1.png",
      "/Superior Delux Twin Room/superiorTwin2.jpg",
      "/Superior Delux Twin Room/superiorTwin3.jpg",
    ],
  },
  {
    id: "super-studio",
    name: "Super Delux Studio",
    badge: { label: "Delux", className: "bg-teal-500 text-white" },
    price: "from ₱1,500",
    capacity: 3,
    description:
      "Queen size bed plus a full-size single bed with en-suite hot/cold shower, AC, fridge, and satellite TV. Sleeps up to 3. 1–2 Pax ₱1,500 · 3 Pax ₱1,950. Extra person +₱600/night.",
    images: [
      "/Superior Delux Studio/superiorDelux1.png",
      "/Superior Delux Studio/superiorDelux2.jpg",
      "/Superior Delux Studio/superiorDelux3.jpg",
      "/Superior Delux Studio/superiorDelux4.jpg",
    ],
  },
  {
    id: "family-studio",
    name: "Superior Delux Family Studio",
    badge: { label: "Family", className: "bg-teal-500 text-white" },
    price: "from ₱2,000",
    capacity: 5,
    description:
      "Double bed, single bed, plus an adjoining bunk room — sleeps up to 5. En-suite hot/cold shower, fridge, satellite TV, vanity unit, and storage. 3 Pax ₱2,000 · 4 Pax ₱2,600 · 5 Pax ₱3,250.",
    images: [
      "/Superior Delux Family Studio/family1.png",
      "/Superior Delux Family Studio/family2.jpg",
      "/Superior Delux Family Studio/family3.jpg",
      "/Superior Delux Family Studio/family4.jpg",
    ],
  },
  {
    id: "superior-suite",
    name: "Superior Delux Suite",
    badge: { label: "Suite", className: "bg-terracotta-500 text-white" },
    price: "from ₱3,250",
    capacity: 8,
    description:
      "Three-bedroom apartment for up to 8 guests. Queen, single, and baby crib in Bedroom 1 · twin bunks in Bedroom 2 · three singles in Bedroom 3. Dining table, fridge, mineral water dispenser, and satellite TV throughout. 5 Pax ₱3,250 · 6 Pax ₱3,900 · 8 Pax ₱5,200.",
    images: [
      "/Surperior Delux Suite/superiorSuite1.png",
      "/Surperior Delux Suite/superiorSuite2.jpg",
      "/Surperior Delux Suite/superiorSuite3.jpg",
      "/Surperior Delux Suite/superiorSuite4.jpg",
    ],
  },
] as const;

type FeaturedRoom = (typeof FEATURED_ROOMS)[number];

function FeaturedRoomCard({ room }: { room: FeaturedRoom }) {
  const [imgIndex, setImgIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { openModal } = useBookingModal();

  useEffect(() => { setMounted(true); }, []);

  const hasMultiple = room.images.length > 1;

  const prev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setImgIndex((i) => (i - 1 + room.images.length) % room.images.length);
  };
  const next = (e: React.MouseEvent) => {
    e.stopPropagation();
    setImgIndex((i) => (i + 1) % room.images.length);
  };

  return (
    <>
      <motion.div
        variants={fadeInUp}
        className="group bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-luxury transition-shadow duration-400 flex flex-col"
      >
        {/* Image area */}
        <div
          className="relative aspect-[3/2] overflow-hidden shrink-0 cursor-pointer"
          onClick={() => setModalOpen(true)}
        >
          {/* Image */}
          <div className="absolute inset-0 group-hover:scale-105 transition-transform duration-700">
            <Image
              src={room.images[imgIndex]}
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

          {/* Price pill — top-right */}
          <div className="absolute top-3 right-3 bg-navy-900/80 backdrop-blur-sm text-white px-3 py-1.5 rounded-lg text-xs font-body font-600 leading-none z-10">
            {room.price}
            <span className="text-cream-300/70 ml-1">/ night</span>
          </div>

          {/* Carousel controls — visible on hover when multiple images */}
          {hasMultiple && (
            <>
              <button
                onClick={prev}
                aria-label="Previous photo"
                className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 bg-black/40 hover:bg-black/60 rounded-full flex items-center justify-center transition-all opacity-0 group-hover:opacity-100"
              >
                <ChevronLeft className="w-4 h-4 text-white" />
              </button>
              <button
                onClick={next}
                aria-label="Next photo"
                className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 bg-black/40 hover:bg-black/60 rounded-full flex items-center justify-center transition-all opacity-0 group-hover:opacity-100"
              >
                <ChevronRight className="w-4 h-4 text-white" />
              </button>

              {/* Dot indicators */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex gap-1.5">
                {room.images.map((_, i) => (
                  <div
                    key={i}
                    className={cn(
                      "w-1.5 h-1.5 rounded-full transition-all duration-200",
                      i === imgIndex ? "bg-white scale-125" : "bg-white/50"
                    )}
                  />
                ))}
              </div>
            </>
          )}

          {/* Hover overlay with CTA */}
          <div className="absolute inset-0 bg-linear-to-t from-teal-900/80 via-teal-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end p-5 z-10">
            <button
              onClick={(e) => { e.stopPropagation(); openModal(); }}
              className="w-full bg-terracotta-500 hover:bg-terracotta-600 text-white font-body font-600 py-2.5 px-5 rounded-[10px] transition-colors text-sm tracking-wide"
            >
              Book This Room
            </button>
          </div>
        </div>

        {/* Card body */}
        <div className="p-6 flex flex-col flex-1">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="font-heading font-700 text-lg text-teal-900 leading-tight">{room.name}</h3>
            <div className="flex items-center gap-1 text-tropical-500 shrink-0 mt-0.5">
              <Star className="w-3.5 h-3.5 fill-current" />
              <span className="text-xs font-body font-600">4.9</span>
            </div>
          </div>

          {/* Capacity */}
          <div className="flex items-center gap-1.5 text-muted mb-3">
            <Users className="w-3.5 h-3.5" />
            <span className="font-body text-xs font-600">Sleeps up to {room.capacity} Guests</span>
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

      {mounted && modalOpen && createPortal(
        <RoomGalleryModal
          room={room}
          initialIndex={imgIndex}
          onClose={() => setModalOpen(false)}
        />,
        document.body,
      )}
    </>
  );
}

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

        {/* Room card grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 gpu-accelerated"
        >
          {FEATURED_ROOMS.map((room) => (
            <FeaturedRoomCard key={room.id} room={room} />
          ))}
        </motion.div>

      </div>
    </section>
  );
}
