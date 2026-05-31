"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { GalleryGrid } from "@/components/ui/GalleryGrid";
import { FadeInUp } from "@/components/ui/FadeInUp";
import type { GalleryItem } from "@/types";

interface GallerySectionProps {
  items: GalleryItem[];
}

export function GallerySection({ items }: GallerySectionProps) {
  return (
    <section id="gallery" className="bg-sand-200 section-y">
      <div className="max-w-7xl mx-auto section-x">
        <FadeInUp className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 lg:mb-16">
          <SectionHeading
            eyebrow="Gallery"
            title="Moments Worth Capturing"
            subtitle="Every corner of the lodge and its surroundings is a scene worth remembering."
          />
          <p className="font-body text-sm text-muted shrink-0 md:text-right">
            Click any photo<br className="hidden md:block" /> to view full size
          </p>
        </FadeInUp>

        <GalleryGrid items={items} />
      </div>
    </section>
  );
}
