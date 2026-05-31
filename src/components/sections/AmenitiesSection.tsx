"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { AmenityItem } from "@/components/ui/AmenityItem";
import { FadeInUp } from "@/components/ui/FadeInUp";
import { StaggerContainer } from "@/components/ui/StaggerContainer";
import { AMENITIES } from "@/data/content";

export function AmenitiesSection() {
  return (
    <section id="amenities" className="luxury-gradient section-y">
      <div className="max-w-7xl mx-auto section-x">
        <FadeInUp className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 lg:mb-16">
          <SectionHeading
            eyebrow="Hotel Amenities"
            title="Everything You Need"
            light
          />
          <p className="font-body text-fluid-base text-sand-200/65 max-w-sm leading-relaxed md:text-right shrink-0">
            From rooftop sunset cocktails to traditional Hilot massage rituals — every detail crafted for an unforgettable stay.
          </p>
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
