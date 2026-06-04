"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { Search } from "lucide-react";
import type { GalleryItem } from "@/types";

interface GalleryGridProps {
  items: GalleryItem[];
}

// Bento pattern for up to 10 items across two visual blocks
const BENTO_CLASSES = [
  "col-span-2 row-span-2", // 0 — large feature
  "col-span-1 row-span-1", // 1
  "col-span-1 row-span-1", // 2
  "col-span-1 row-span-1", // 3
  "col-span-1 row-span-1", // 4
  "col-span-1 row-span-1", // 5
  "col-span-1 row-span-2", // 6 — tall secondary feature
  "col-span-2 row-span-1", // 7 — wide
  "col-span-1 row-span-1", // 8
  "col-span-1 row-span-1", // 9
];

export function GalleryGrid({ items }: GalleryGridProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const visible = items.slice(0, 10);
  const slides = visible.map((item) => ({ src: item.url }));

  return (
    <>
      <div className="grid grid-cols-3 gap-3 auto-rows-[200px] grid-flow-dense">
        {visible.map((item, i) => (
          <motion.div
            key={item.id}
            className={`relative overflow-hidden rounded-2xl cursor-pointer group ${BENTO_CLASSES[i] ?? "col-span-1 row-span-1"}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06, duration: 0.5 }}
            onClick={() => { setLightboxIndex(i); setLightboxOpen(true); }}
          >
            <motion.div
              className="absolute inset-0"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.7 }}
            >
              <Image
                src={item.url}
                alt={item.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
            </motion.div>
            <div className="absolute inset-0 bg-teal-900/35 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-center justify-center">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Search className="w-5 h-5 text-white" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={lightboxIndex}
        slides={slides}
        styles={{ container: { backgroundColor: "rgba(4,24,40,0.95)" } }}
      />
    </>
  );
}
