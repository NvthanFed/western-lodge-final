import { z } from "zod";

// ── Data models ──────────────────────────────────────────────────────────────

export interface Room {
  id: string;
  name: string;
  type:
    | "SINGLE"
    | "EN_SUITE_SINGLE"
    | "DOUBLE_BUNK"
    | "STUDIO"
    | "STUDIO_BALCONY"
    | "TWIN"
    | "FAMILY_STUDIO"
    | "SUITE";
  description: string;
  price: number | string;
  capacity: number;
  amenities: string[];
  images: string[];
}

export interface GalleryItem {
  id: string;
  url: string;
  alt: string;
  category: "ROOMS" | "AMENITIES" | "EXTERIOR" | "DINING" | "SURROUNDINGS";
  order: number;
}

export interface Testimonial {
  id: string;
  guestName: string;
  location: string;
  rating: number;
  review: string;
  date: string;
  featured: boolean;
}

export interface NavLink {
  label: string;
  href: string;
}

// ── Form schemas ─────────────────────────────────────────────────────────────

export const BookingInquirySchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(7, "Please enter a valid phone number"),
  checkIn: z.string().min(1, "Check-in date is required"),
  checkOut: z.string().min(1, "Check-out date is required"),
  roomType: z.enum([
    "SINGLE",
    "EN_SUITE_SINGLE",
    "DOUBLE_BUNK",
    "STUDIO",
    "STUDIO_BALCONY",
    "TWIN",
    "FAMILY_STUDIO",
    "SUITE",
  ], { required_error: "Please select a room type" }),
  guests: z.number().int().min(1).max(6),
  specialRequests: z.string().max(1000).optional(),
});

export type BookingInquiryInput = z.infer<typeof BookingInquirySchema>;

export const ContactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactInput = z.infer<typeof ContactSchema>;
