"use client";

import { Calendar, Users } from "lucide-react";

export function FloatingBookingCard() {
  return (
    <div className="relative z-30 w-full px-4 sm:px-6 lg:px-10 -mt-[100px] sm:-mt-[124px]">
      <div
        className="mx-auto bg-white flex flex-col lg:flex-row items-stretch"
        style={{
          maxWidth: "1285px",
          minHeight: "248px",
          boxShadow: "6px 7px 18.5px 5px rgba(192,186,186,0.33)",
        }}
      >
        {/* Cell 1 — CHECK-IN */}
        <div className="flex-1 flex flex-col justify-center px-8 py-8 lg:py-0">
          <p
            style={{ fontFamily: "var(--font-montserrat)", color: "#929292" }}
            className="text-xs font-semibold tracking-widest uppercase mb-2"
          >
            CHECK-IN
          </p>
          <div className="flex items-center justify-between">
            <span
              style={{ fontFamily: "var(--font-montserrat)", fontSize: "20px" }}
              className="font-semibold text-black"
            >
              May 24, 2026
            </span>
            <Calendar className="w-5 h-5 text-black/50 shrink-0" strokeWidth={1.5} />
          </div>
        </div>

        {/* Orange divider */}
        <div className="hidden lg:block w-2 self-stretch" style={{ backgroundColor: "#C86B4A" }} />
        <div className="lg:hidden h-2 w-full" style={{ backgroundColor: "#C86B4A" }} />

        {/* Cell 2 — CHECK-OUT */}
        <div className="flex-1 flex flex-col justify-center px-8 py-8 lg:py-0">
          <p
            style={{ fontFamily: "var(--font-montserrat)", color: "#929292" }}
            className="text-xs font-semibold tracking-widest uppercase mb-2"
          >
            CHECK-OUT
          </p>
          <div className="flex items-center justify-between">
            <span
              style={{ fontFamily: "var(--font-montserrat)", fontSize: "20px" }}
              className="font-semibold text-black"
            >
              May 24, 2026
            </span>
            <Calendar className="w-5 h-5 text-black/50 shrink-0" strokeWidth={1.5} />
          </div>
        </div>

        {/* Orange divider */}
        <div className="hidden lg:block w-2 self-stretch" style={{ backgroundColor: "#C86B4A" }} />
        <div className="lg:hidden h-2 w-full" style={{ backgroundColor: "#C86B4A" }} />

        {/* Cell 3 — GUEST + CTA */}
        <div className="flex-1 flex flex-col justify-center px-8 py-8 lg:py-0 gap-4">
          <div>
            <p
              style={{ fontFamily: "var(--font-montserrat)", color: "#929292" }}
              className="text-xs font-semibold tracking-widest uppercase mb-2"
            >
              GUEST
            </p>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-black/50 shrink-0" strokeWidth={1.5} />
              <span
                style={{ fontFamily: "var(--font-montserrat)", fontSize: "20px" }}
                className="font-semibold text-black"
              >
                2 Adults
              </span>
            </div>
          </div>
          <a
            href="#rooms"
            style={{
              fontFamily: "var(--font-montserrat)",
              backgroundColor: "#C86B4A",
              borderRadius: "9px",
            }}
            className="inline-block text-center font-bold text-black text-sm tracking-wide py-4 px-6 hover:opacity-90 transition-opacity duration-300"
          >
            CHECK AVAILABILITY
          </a>
        </div>
      </div>
    </div>
  );
}
