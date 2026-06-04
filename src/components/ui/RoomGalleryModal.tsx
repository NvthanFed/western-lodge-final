"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Users, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { useBookingModal } from "@/context/BookingModalContext";

export interface RoomGalleryRoom {
  id: string;
  name: string;
  price: string;
  capacity: number;
  description: string;
  images: readonly string[];
  badge: { label: string; className: string };
}

interface RoomGalleryModalProps {
  room: RoomGalleryRoom;
  initialIndex?: number;
  onClose: () => void;
}

export function RoomGalleryModal({ room, initialIndex = 0, onClose }: RoomGalleryModalProps) {
  const [idx, setIdx] = useState(initialIndex);
  const { openModal } = useBookingModal();
  const multi = room.images.length > 1;

  const prev = useCallback(
    () => setIdx((i) => (i - 1 + room.images.length) % room.images.length),
    [room.images.length],
  );
  const next = useCallback(
    () => setIdx((i) => (i + 1) % room.images.length),
    [room.images.length],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape")     onClose();
      if (e.key === "ArrowLeft")  prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, prev, next]);

  /*
   * All heights are explicit Tailwind calc() values so the image frame
   * always has real pixel dimensions — no flex-derived ambiguity.
   *
   * Desktop (md+)
   *   modal        : 94vw × 88vh,  max-w 1440px,  rounded-2xl
   *   image frame  : fill − 72px thumb bar  → calc(88vh − 72px)
   *   info panel   : 320px × 88vh
   *
   * Mobile
   *   modal        : 100vw × 100dvh, no rounding
   *   image frame  : 58dvh (− 72px when thumbnails) → calc(58dvh − 72px)
   *   info panel   : 42dvh, overflow-y-auto
   */

  return (
    /* ── Backdrop ───────────────────────────────────────────────────── */
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-6"
      style={{ background: "rgba(6,10,16,0.92)" }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >

      {/* ── Modal shell ───────────────────────────────────────────────── */}
      {/* Constrained height — leaves visible backdrop on all sides */}
      <div className="flex w-full flex-col overflow-hidden rounded-2xl
                      md:w-[94vw] md:max-w-[1440px] md:flex-row
                      h-[88vh] md:h-[86vh]">

        {/* ══════════════════════════════════════════════════════════
         *  GALLERY SIDE
         * ══════════════════════════════════════════════════════════ */}
        <div className="flex flex-1 flex-col bg-black">

          {/* IMAGE FRAME — explicit height so the <img> can fill it */}
          <div
            className={cn(
              "relative w-full overflow-hidden",
              multi
                ? "h-[calc(52vh-72px)] md:h-[calc(86vh-72px)]"
                : "h-[52vh]            md:h-[86vh]",
            )}
          >
            {/*
             * Plain <img> with absolute fill + object-contain.
             * This is the most reliable cross-browser way to show a
             * variable-aspect-ratio image inside an explicit-sized box.
             * Thumbnails below still use Next.js <Image> for caching.
             */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              key={room.images[idx]}
              src={room.images[idx]}
              alt={`${room.name} — photo ${idx + 1}`}
              className="absolute inset-0 h-full w-full object-contain"
            />

            {/* Close */}
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute right-4 top-4 z-30 flex h-9 w-9 items-center justify-center rounded-full bg-black/65 text-white backdrop-blur-sm transition-colors hover:bg-black/90"
            >
              <X className="h-4 w-4" />
            </button>

            {/* Photo counter */}
            {multi && (
              <span className="absolute left-4 top-4 z-30 select-none rounded-lg bg-black/65 px-3 py-1.5 font-body text-xs tabular-nums text-white/90 backdrop-blur-sm">
                {idx + 1} / {room.images.length}
              </span>
            )}

            {/* Prev */}
            {multi && (
              <button
                onClick={prev}
                aria-label="Previous photo"
                className="absolute left-4 top-1/2 z-30 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-black/60 text-white backdrop-blur-sm transition-colors hover:border-white hover:bg-white hover:text-black"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
            )}

            {/* Next */}
            {multi && (
              <button
                onClick={next}
                aria-label="Next photo"
                className="absolute right-4 top-1/2 z-30 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-black/60 text-white backdrop-blur-sm transition-colors hover:border-white hover:bg-white hover:text-black"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            )}
          </div>

          {/* Thumbnail strip */}
          {multi && (
            <div className="flex h-[72px] shrink-0 items-center gap-2 overflow-x-auto bg-[#0d0d0d] px-4">
              {room.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  aria-label={`Photo ${i + 1}`}
                  className={cn(
                    "relative h-12 w-[76px] shrink-0 overflow-hidden rounded-lg border-2 transition-all duration-200",
                    i === idx
                      ? "border-white opacity-100"
                      : "border-white/15 opacity-50 hover:border-white/50 hover:opacity-80",
                  )}
                >
                  <Image src={img} alt="" fill className="object-cover" sizes="76px" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* ══════════════════════════════════════════════════════════
         *  INFO PANEL
         *  Mobile  : 42dvh, full width, scrollable
         *  Desktop : 320px fixed, full modal height, scrollable
         * ══════════════════════════════════════════════════════════ */}
        <div
          className="flex h-[36vh] w-full shrink-0 flex-col overflow-y-auto
                     md:h-[86vh] md:w-[320px]"
          style={{ background: "#101820" }}
        >
          <div className="flex flex-1 flex-col p-6 md:p-7">

            {/* Badge */}
            <span className={cn(
              "mb-4 w-fit rounded-lg px-3 py-1.5 font-body text-xs font-semibold tracking-wide",
              room.badge.className,
            )}>
              {room.badge.label}
            </span>

            {/* Name */}
            <h2 className="mb-2 font-heading text-[1.35rem] font-bold leading-tight text-white md:text-2xl">
              {room.name}
            </h2>

            {/* Rating + capacity */}
            <div className="mb-5 flex items-center gap-5">
              <span className="flex items-center gap-1.5">
                <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                <span className="font-body text-sm font-semibold text-white">4.9</span>
              </span>
              <span className="flex items-center gap-1.5 text-white/50">
                <Users className="h-3.5 w-3.5" />
                <span className="font-body text-sm">Sleeps {room.capacity}</span>
              </span>
            </div>

            <div className="mb-5 h-px w-full" style={{ background: "rgba(255,255,255,0.08)" }} />

            {/* Description */}
            <p className="flex-1 font-body text-sm leading-relaxed text-white/50">
              {room.description}
            </p>

            {/* Pricing + CTA */}
            <div className="mt-6 space-y-3 pt-5" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
              <div>
                <p className="font-body text-[0.62rem] uppercase tracking-[0.15em] text-white/35">Starting from</p>
                <div className="mt-1 flex items-baseline gap-1.5">
                  <span className="font-heading text-[1.75rem] font-bold text-white">{room.price}</span>
                  <span className="font-body text-sm text-white/35">/ night</span>
                </div>
              </div>

              <button
                onClick={() => { onClose(); openModal(); }}
                className="w-full rounded-xl bg-terracotta-500 py-4 font-body text-sm font-semibold tracking-wide text-white transition-all duration-200 hover:bg-terracotta-600 active:scale-[0.98]"
              >
                Reserve This Room
              </button>

              <p className="text-center font-body text-xs text-white/25">
                No payment required · We confirm within 24 hrs
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
