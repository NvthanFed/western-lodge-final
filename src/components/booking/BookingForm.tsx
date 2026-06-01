"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AlertCircle, Calendar, Users } from "lucide-react";
import { BookingInquirySchema, type BookingInquiryInput } from "@/types";
import { ROOM_TYPE_LABELS } from "@/data/content";

interface BookingFormProps {
  onSuccess: () => void;
}

export function BookingForm({ onSuccess }: BookingFormProps) {
  const [submitting, setSubmitting] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);

  const { register, handleSubmit, formState: { errors } } = useForm<BookingInquiryInput>({
    resolver: zodResolver(BookingInquirySchema),
    defaultValues: { guests: 2 },
  });

  const onSubmit = async (data: BookingInquiryInput) => {
    setSubmitting(true);
    setApiError(null);
    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) {
        setApiError(json.error ?? "Something went wrong. Please try again.");
        setSubmitting(false);
        return;
      }
      onSuccess();
    } catch {
      setApiError("Something went wrong. Please try again.");
      setSubmitting(false);
    }
  };

  const inputClass =
    "w-full font-body text-sm bg-white border border-sand-300 text-teal-900 placeholder-teal-900/30 rounded-xl px-4 py-3 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/15 transition-all duration-200";
  const labelClass = "block font-body font-600 text-[0.7rem] tracking-[0.1em] uppercase text-teal-600 mb-2";
  const errorClass = "font-body text-xs text-terracotta-500 mt-1";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      {/* Name + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>Full Name *</label>
          <input {...register("name")} placeholder="Maria Santos" className={inputClass} />
          {errors.name && <p className={errorClass}>{errors.name.message}</p>}
        </div>
        <div>
          <label className={labelClass}>Email Address *</label>
          <input {...register("email")} type="email" placeholder="maria@example.com" className={inputClass} />
          {errors.email && <p className={errorClass}>{errors.email.message}</p>}
        </div>
      </div>

      {/* Phone */}
      <div>
        <label className={labelClass}>Phone Number *</label>
        <input {...register("phone")} type="tel" placeholder="+63 900 000 0000" className={inputClass} />
        {errors.phone && <p className={errorClass}>{errors.phone.message}</p>}
      </div>

      {/* Check-in + Check-out */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>
            <span className="flex items-center gap-1.5"><Calendar className="w-3 h-3" />Check-in Date *</span>
          </label>
          <input {...register("checkIn")} type="date" min={new Date().toISOString().split("T")[0]} className={inputClass} />
          {errors.checkIn && <p className={errorClass}>{errors.checkIn.message}</p>}
        </div>
        <div>
          <label className={labelClass}>
            <span className="flex items-center gap-1.5"><Calendar className="w-3 h-3" />Check-out Date *</span>
          </label>
          <input {...register("checkOut")} type="date" min={new Date().toISOString().split("T")[0]} className={inputClass} />
          {errors.checkOut && <p className={errorClass}>{errors.checkOut.message}</p>}
        </div>
      </div>

      {/* Room Type + Guests */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>Room Type *</label>
          <select {...register("roomType")} className={`${inputClass} cursor-pointer`}>
            <option value="">Select a room...</option>
            {Object.entries(ROOM_TYPE_LABELS).map(([value, label]) => (
              <option key={value} value={value}>{label}</option>
            ))}
          </select>
          {errors.roomType && <p className={errorClass}>{errors.roomType.message}</p>}
        </div>
        <div>
          <label className={labelClass}>
            <span className="flex items-center gap-1.5"><Users className="w-3 h-3" />Number of Guests *</span>
          </label>
          <select {...register("guests", { valueAsNumber: true })} className={`${inputClass} cursor-pointer`}>
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <option key={n} value={n}>{n} {n === 1 ? "Guest" : "Guests"}</option>
            ))}
          </select>
          {errors.guests && <p className={errorClass}>{errors.guests.message}</p>}
        </div>
      </div>

      {/* Special Requests */}
      <div>
        <label className={labelClass}>Special Requests</label>
        <textarea
          {...register("specialRequests")}
          placeholder="Dietary requirements, room preferences, anniversary setup, early check-in..."
          rows={3}
          className={`${inputClass} resize-none`}
        />
        {errors.specialRequests && <p className={errorClass}>{errors.specialRequests.message}</p>}
      </div>

      {/* API error */}
      {apiError && (
        <div className="flex items-center gap-2 text-terracotta-600 bg-terracotta-50 rounded-xl px-4 py-3 border border-terracotta-200">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <p className="font-body text-sm">{apiError}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="w-full flex items-center justify-center gap-2 font-body font-600 text-sm tracking-wide bg-terracotta-500 hover:bg-terracotta-600 disabled:bg-terracotta-300 text-white py-4 rounded-xl transition-all duration-300 mt-1"
      >
        {submitting ? (
          <>
            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            Submitting Inquiry...
          </>
        ) : "Submit Booking Inquiry"}
      </button>

      <p className="font-body text-xs text-center text-muted">
        No payment required at this stage. We&apos;ll confirm availability and rates within 24 hours.
      </p>
    </form>
  );
}
