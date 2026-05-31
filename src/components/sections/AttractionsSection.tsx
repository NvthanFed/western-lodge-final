"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { AttractionCard } from "@/components/ui/AttractionCard";
import { FadeInUp } from "@/components/ui/FadeInUp";
import { StaggerContainer } from "@/components/ui/StaggerContainer";
import { ATTRACTIONS } from "@/data/content";

export function AttractionsSection() {
  return (
    <section id="attractions" className="bg-tropical-500 section-y">
      <div className="max-w-7xl mx-auto section-x">
        <FadeInUp className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 lg:mb-16">
          <SectionHeading
            eyebrow="Nearby Attractions"
            title="Discover Marabut"
            light
          />
          <p className="font-body text-fluid-base text-white/55 max-w-sm leading-relaxed md:text-right shrink-0">
            The lodge is your gateway to some of the Philippines&apos; most spectacular natural wonders — all within easy reach.
          </p>
        </FadeInUp>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {ATTRACTIONS.map((attr) => (
            <AttractionCard key={attr.name} {...attr} />
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
