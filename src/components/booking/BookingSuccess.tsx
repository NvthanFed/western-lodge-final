"use client";

import { motion } from "framer-motion";
import { successCheck } from "@/lib/animations";

interface BookingSuccessProps {
  onClose: () => void;
}

export function BookingSuccess({ onClose }: BookingSuccessProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", damping: 20, stiffness: 260 }}
      className="flex flex-col items-center text-center py-6"
    >
      {/* Animated checkmark */}
      <div className="w-20 h-20 mb-6">
        <svg viewBox="0 0 80 80" fill="none" className="w-full h-full">
          <motion.circle
            cx="40" cy="40" r="36"
            stroke="#C1603A"
            strokeWidth="4"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
          <motion.path
            d="M24 40 L36 52 L56 28"
            stroke="#C1603A"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            variants={successCheck}
            initial="hidden"
            animate="visible"
          />
        </svg>
      </div>

      <h3 className="font-heading font-800 text-teal-900 text-2xl mb-3">Inquiry Sent!</h3>
      <p className="font-body text-muted text-sm leading-relaxed mb-2 max-w-sm">
        Thank you for your interest in Western Highway Lodge.
      </p>
      <p className="font-body text-muted text-sm leading-relaxed mb-6 max-w-sm">
        We will confirm availability and reach out within{" "}
        <strong className="text-teal-700">24 hours</strong>. Check your inbox for a confirmation email.
      </p>

      <div className="bg-sand-200 rounded-xl px-5 py-4 mb-8 w-full max-w-sm">
        <p className="font-body text-xs text-muted">
          Questions? Email us at{" "}
          <a href="mailto:westernhighwaylodgehotel@hotmail.com" className="text-teal-500 hover:underline break-all">
            westernhighwaylodgehotel@hotmail.com
          </a>
        </p>
      </div>

      <button
        onClick={onClose}
        className="font-body font-600 text-sm tracking-wide bg-terracotta-500 hover:bg-terracotta-600 text-white px-8 py-3 rounded-xl transition-colors duration-300"
      >
        Back to Lodge
      </button>
    </motion.div>
  );
}
