"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MapPin, Phone, Mail, Clock, Send, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeInUp } from "@/components/ui/FadeInUp";
import { successCheck } from "@/lib/animations";
import { ContactSchema, type ContactInput } from "@/types";
import { CONTACT_INFO } from "@/data/content";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string; strokeWidth?: number }>> = {
  MapPin, Phone, Mail, Clock,
};

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

type Status = "idle" | "submitting" | "success" | "error";

export function ContactSection() {
  const [status, setStatus] = useState<Status>("idle");

  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactInput>({
    resolver: zodResolver(ContactSchema),
  });

  const onSubmit = async (data: ContactInput) => {
    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        setStatus("error");
        return;
      }
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full font-body text-sm bg-white border border-sand-300 text-navy-900 placeholder-navy-900/35 rounded-[10px] px-4 py-3 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/15 transition-all duration-200";
  const labelClass = "block font-body font-600 text-[0.7rem] tracking-[0.1em] uppercase text-teal-600 mb-2";
  const errorClass = "font-body text-xs text-terracotta-500 mt-1";

  return (
    <section id="contact" className="bg-ivory section-y">
      <div className="max-w-7xl mx-auto section-x">
        <FadeInUp className="text-center mb-12 lg:mb-16">
          <SectionHeading
            eyebrow="Contact"
            title="We&apos;re Here For You"
            subtitle="Whether you have questions about your booking or need travel assistance — our team is always delighted to hear from you."
            centered
          />
        </FadeInUp>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">

          {/* Left — contact details + social */}
          <FadeInUp>
            <div className="space-y-5 mb-8">
              {CONTACT_INFO.map((item) => {
                const Icon = ICON_MAP[item.icon];
                return (
                  <div key={item.label} className="flex gap-4">
                    <div className="w-10 h-10 bg-teal-50 rounded-[10px] flex items-center justify-center shrink-0">
                      {Icon && <Icon className="w-4 h-4 text-teal-500" strokeWidth={1.5} />}
                    </div>
                    <div>
                      <p className="font-body font-600 text-[0.65rem] tracking-[0.2em] uppercase text-teal-500 mb-1">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="font-body text-sm text-navy-900 hover:text-teal-500 transition-colors leading-relaxed whitespace-pre-line break-all">
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-body text-sm text-navy-900 leading-relaxed whitespace-pre-line">{item.value}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-3 pt-4 border-t border-sand-300">
              <p className="font-body font-600 text-[0.65rem] tracking-[0.2em] uppercase text-teal-500 mr-2">Follow us</p>
              <a href="#" aria-label="Facebook" className="w-9 h-9 bg-sand-200 hover:bg-teal-500 hover:text-white rounded-lg flex items-center justify-center transition-colors text-navy-700">
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Instagram" className="w-9 h-9 bg-sand-200 hover:bg-teal-500 hover:text-white rounded-lg flex items-center justify-center transition-colors text-navy-700">
                <InstagramIcon className="w-4 h-4" />
              </a>
            </div>
          </FadeInUp>

          {/* Right — inquiry form */}
          <FadeInUp delay={0.12}>
            <div className="bg-sand-100 rounded-2xl p-6 md:p-8 border border-sand-300/60">
              <h3 className="font-heading font-700 text-teal-900 text-xl mb-6">Send a Message</h3>

              {status === "success" ? (
                <div className="flex flex-col items-center text-center py-8">
                  <motion.div className="w-16 h-16 mb-4">
                    <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
                      <motion.circle cx="32" cy="32" r="28" stroke="#1F6F7A" strokeWidth="3"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 0.5, ease: "easeOut" }} />
                      <motion.path d="M18 32 L28 42 L46 22" stroke="#1F6F7A" strokeWidth="3"
                        strokeLinecap="round" strokeLinejoin="round"
                        variants={successCheck} initial="hidden" animate="visible" />
                    </svg>
                  </motion.div>
                  <h4 className="font-heading font-700 text-teal-900 text-lg mb-2">Message Sent!</h4>
                  <p className="font-body text-sm text-muted mb-6">We&apos;ll get back to you as soon as possible.</p>
                  <button onClick={() => setStatus("idle")} className="font-body text-sm font-600 text-teal-500 hover:text-teal-600 transition-colors">
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
                  <div>
                    <label className={labelClass}>Subject *</label>
                    <input {...register("subject")} placeholder="Booking inquiry, general question..." className={inputClass} />
                    {errors.subject && <p className={errorClass}>{errors.subject.message}</p>}
                  </div>
                  <div>
                    <label className={labelClass}>Message *</label>
                    <textarea {...register("message")} rows={5} placeholder="Your message..." className={`${inputClass} resize-none`} />
                    {errors.message && <p className={errorClass}>{errors.message.message}</p>}
                  </div>

                  {status === "error" && (
                    <div className="flex items-center gap-2 text-terracotta-600 bg-terracotta-50 rounded-[10px] px-4 py-3 border border-terracotta-200">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <p className="font-body text-sm">Something went wrong. Please try again.</p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full flex items-center justify-center gap-2 font-body font-600 text-sm tracking-wide bg-terracotta-500 hover:bg-terracotta-600 disabled:bg-terracotta-300 text-white py-3.5 rounded-[10px] transition-all duration-300"
                  >
                    {status === "submitting" ? (
                      <><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />Sending...</>
                    ) : (
                      <><Send className="w-4 h-4" />Send Message</>
                    )}
                  </button>
                </form>
              )}
            </div>
          </FadeInUp>
        </div>
      </div>
    </section>
  );
}
