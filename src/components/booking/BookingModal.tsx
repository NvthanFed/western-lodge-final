"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useBookingModal } from "@/context/BookingModalContext";
import { modalBackdrop, modalPanel } from "@/lib/animations";
import { BookingForm } from "./BookingForm";
import { BookingSuccess } from "./BookingSuccess";

export function BookingModal() {
  const { open, closeModal } = useBookingModal();
  const [submitted, setSubmitted] = useState(false);

  const handleClose = () => {
    closeModal();
    setTimeout(() => setSubmitted(false), 400);
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            variants={modalBackdrop}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 bg-teal-900/70 backdrop-blur-sm z-[100]"
            onClick={handleClose}
          />

          <div className="fixed inset-0 z-[101] flex items-center justify-center p-4">
            <motion.div
              variants={modalPanel}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-ivory rounded-[1.875rem] shadow-luxury modal-scrollbar"
              style={{ scrollbarGutter: "stable" }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Sticky header */}
              <div className="sticky top-0 bg-ivory/95 backdrop-blur-sm flex items-center justify-between px-6 md:px-8 py-5 border-b border-sand-300 z-10">
                <div>
                  <p className="eyebrow text-teal-500 mb-0.5">Western Highway Lodge</p>
                  <h2 className="font-heading font-800 text-teal-900 text-xl">
                    {submitted ? "Booking Confirmed" : "Reserve Your Stay"}
                  </h2>
                </div>
                <button
                  onClick={handleClose}
                  className="w-9 h-9 rounded-full bg-sand-200 hover:bg-sand-300 flex items-center justify-center transition-colors"
                  aria-label="Close"
                >
                  <X className="w-4 h-4 text-teal-800" />
                </button>
              </div>

              {/* Body */}
              <div className="px-6 md:px-8 py-6 md:py-8">
                {submitted ? (
                  <BookingSuccess onClose={handleClose} />
                ) : (
                  <BookingForm onSuccess={() => setSubmitted(true)} />
                )}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
