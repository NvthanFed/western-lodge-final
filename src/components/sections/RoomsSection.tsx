"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { RoomCard } from "@/components/ui/RoomCard";
import { StaggerContainer } from "@/components/ui/StaggerContainer";
import { FadeInUp } from "@/components/ui/FadeInUp";
import { useBookingModal } from "@/context/BookingModalContext";
import type { Room } from "@/types";

interface RoomsSectionProps {
  rooms: Room[];
}

export function RoomsSection({ rooms }: RoomsSectionProps) {
  const { openModal } = useBookingModal();

  return (
    <section id="rooms" className="bg-sand-200 section-y">
      <div className="max-w-7xl mx-auto section-x">
        <FadeInUp className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 lg:mb-16">
          <SectionHeading
            eyebrow="Accommodations"
            title="Your Perfect Retreat"
            subtitle="Each room is a carefully curated sanctuary, designed to immerse you in the coastal atmosphere of Marabut."
          />
          <div className="shrink-0">
            <button
              onClick={openModal}
              className="font-body font-600 text-sm tracking-wide border border-teal-500/50 text-teal-600 hover:bg-teal-500 hover:text-white hover:border-teal-500 px-7 py-3 rounded-xl transition-all duration-300"
            >
              Check Availability
            </button>
          </div>
        </FadeInUp>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {rooms.map((room) => (
            <RoomCard key={room.id} room={room} onBook={openModal} />
          ))}
        </StaggerContainer>

        <FadeInUp className="mt-8 text-center">
          <p className="font-body text-xs text-muted">
            All rates are per night · Prices may vary by season and availability · No payment required at inquiry stage
          </p>
        </FadeInUp>
      </div>
    </section>
  );
}
