"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Check, Search } from "lucide-react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
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

interface CollageImageProps {
  src: string;
  alt: string;
  sizes: string;
  className?: string;
  onClick: () => void;
}

function CollageImage({ src, alt, sizes, className = "", onClick }: CollageImageProps) {
  return (
    <div
      className={`relative rounded-2xl overflow-hidden cursor-pointer group ${className}`}
      onClick={onClick}
    >
      <Image src={src} alt={alt} fill className="object-cover" sizes={sizes} />
      <div className="absolute inset-0 bg-teal-900/35 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-center justify-center">
        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
          <Search className="w-5 h-5 text-white" />
        </div>
      </div>
    </div>
  );
}

const ATTRACTIONS = [
  { src: "/attraction1.png", alt: "Marabut — limestone rock formation" },
  { src: "/attraction2.png", alt: "Marabut — seaside grotto" },
  { src: "/attraction3.png", alt: "Marabut — shrine statue" },
  { src: "/attraction4.png", alt: "Marabut — coastal rock arch" },
  { src: "/attraction5.png", alt: "Marabut — beachside cave" },
  { src: "/attraction6.png", alt: "Marabut — island in the bay" },
  { src: "/attraction7.png", alt: "Marabut — beach with outrigger boat" },
  { src: "/attraction8.png", alt: "Marabut — historic church" },
  { src: "/attraction9.png", alt: "Marabut — church interior" },
];

const VENUE_IMAGES = [
  { src: "/hall1.jpeg", alt: "Conference hall — main view" },
  { src: "/hall2.jpeg", alt: "Conference hall — seating" },
  { src: "/hall3.jpeg", alt: "Conference hall — interior" },
  { src: "/hall4.jpeg", alt: "Conference hall — setup" },
  { src: "/rooftop4.png", alt: "Western Highway Lodge — rooftop bar at golden hour" },
  { src: "/rooftop5.png", alt: "Western Highway Lodge — rooftop terrace seating" },
  { src: "/rooftop6.png", alt: "Western Highway Lodge — rooftop terrace views" },
  ...ATTRACTIONS,
];

const ATTRACTIONS_OFFSET = 7;

export function VenuesSection() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const slides = VENUE_IMAGES.map((img) => ({ src: img.src, alt: img.alt }));

  return (
    <section id="venues" className="bg-white section-y">
      <div className="max-w-7xl mx-auto section-x">

        {/* Header */}
        <FadeInUp className="text-center mb-16 lg:mb-20">
          <SectionHeading
            eyebrow="Signature Spaces"
            title="Beyond the Room"
            subtitle="Distinctive spaces and experiences crafted for every occasion — from focused meetings and golden-hour cocktails to the wonders waiting just beyond our doors."
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
              <CollageImage
                src="/hall1.jpeg"
                alt="Conference hall — main view"
                sizes="(max-width: 1024px) 60vw, 28vw"
                className="col-span-2 row-span-3"
                onClick={() => openLightbox(0)}
              />
              <CollageImage
                src="/hall2.jpeg"
                alt="Conference hall — seating"
                sizes="(max-width: 1024px) 30vw, 14vw"
                onClick={() => openLightbox(1)}
              />
              <CollageImage
                src="/hall3.jpeg"
                alt="Conference hall — interior"
                sizes="(max-width: 1024px) 30vw, 14vw"
                onClick={() => openLightbox(2)}
              />
              <CollageImage
                src="/hall4.jpeg"
                alt="Conference hall — setup"
                sizes="(max-width: 1024px) 30vw, 14vw"
                onClick={() => openLightbox(3)}
              />
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20 lg:mb-28">

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
            <div className="grid grid-cols-3 gap-2 h-[280px] sm:h-[380px] lg:h-[460px]">
              <CollageImage
                src="/rooftop4.png"
                alt="Western Highway Lodge — rooftop bar at golden hour"
                sizes="(max-width: 1024px) 33vw, 17vw"
                onClick={() => openLightbox(4)}
              />
              <CollageImage
                src="/rooftop5.png"
                alt="Western Highway Lodge — rooftop terrace seating"
                sizes="(max-width: 1024px) 33vw, 17vw"
                onClick={() => openLightbox(5)}
              />
              <CollageImage
                src="/rooftop6.png"
                alt="Western Highway Lodge — rooftop terrace views"
                sizes="(max-width: 1024px) 33vw, 17vw"
                onClick={() => openLightbox(6)}
              />
            </div>
          </motion.div>
        </div>

        {/* Local Attractions — text left, individual photo grid right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="gpu-accelerated order-2 lg:order-1"
          >
            <VenueDetails
              eyebrow="Explore the Area"
              title="Local Attractions"
              description="Step beyond the lodge and discover the natural beauty of Marabut. From dramatic limestone rock formations rising out of the sea to pristine beaches and hidden coves, unforgettable adventures are just a short journey away."
              features={[
                "Marabut Rock Formations",
                "Pristine beaches & coves",
                "Island-hopping excursions",
                "Scenic coastal viewpoints",
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
            <div className="grid grid-cols-3 gap-2">
              {ATTRACTIONS.map((img, i) => (
                <CollageImage
                  key={img.src}
                  src={img.src}
                  alt={img.alt}
                  sizes="(max-width: 1024px) 33vw, 17vw"
                  className="aspect-[4/3]"
                  onClick={() => openLightbox(ATTRACTIONS_OFFSET + i)}
                />
              ))}
            </div>
          </motion.div>
        </div>

      </div>

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={lightboxIndex}
        slides={slides}
        styles={{ container: { backgroundColor: "rgba(4,24,40,0.95)" } }}
      />
    </section>
  );
}
