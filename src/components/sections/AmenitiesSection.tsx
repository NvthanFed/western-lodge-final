"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { AmenityItem } from "@/components/ui/AmenityItem";
import { FadeInUp } from "@/components/ui/FadeInUp";
import { StaggerContainer } from "@/components/ui/StaggerContainer";
import { AMENITIES } from "@/data/content";

export function AmenitiesSection() {
  return (
    <section id="amenities" className="bg-ivory section-y">
      <div className="max-w-7xl mx-auto section-x">
        <FadeInUp className="text-center mb-12 lg:mb-16">
          <SectionHeading
            eyebrow="Amenities"
            title="Everything You Need"
            subtitle="From rooftop sunset cocktails to traditional Hilot massage rituals — every detail crafted for an unforgettable stay."
            centered
          />
        </FadeInUp>

        <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-5">
          {AMENITIES.map((amenity) => (
            <AmenityItem key={amenity.label} {...amenity} />
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
