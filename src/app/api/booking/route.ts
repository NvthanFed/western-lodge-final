import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { BookingInquirySchema } from "@/types";
import { ROOM_TYPE_LABELS } from "@/data/content";

// In-memory rate limiter: max 3 submissions per IP per hour
const rateMap = new Map<string, number[]>();
const LIMIT = 3;
const WINDOW_MS = 60 * 60 * 1000;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const hits = (rateMap.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  if (hits.length >= LIMIT) return true;
  rateMap.set(ip, [...hits, now]);
  return false;
}

function esc(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please wait before submitting again." },
      { status: 429 }
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const result = BookingInquirySchema.safeParse(body);
  if (!result.success) {
    return NextResponse.json({ error: "Invalid form data." }, { status: 400 });
  }

  const { name, email, phone, checkIn, checkOut, roomType, guests, specialRequests } =
    result.data;

  const roomLabel = ROOM_TYPE_LABELS[roomType] ?? roomType;
  const resend = new Resend(process.env.RESEND_API_KEY);

  const { error } = await resend.emails.send({
    from: process.env.RESEND_FROM_EMAIL ?? "bookings@resend.dev",
    to: process.env.LODGE_EMAIL ?? "",
    replyTo: email,
    subject: `New Booking Inquiry — ${esc(name)}`,
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#1a3c3e;">
        <div style="background:#1F6F7A;padding:24px 32px;border-radius:8px 8px 0 0;">
          <h1 style="margin:0;color:#fff;font-size:20px;">New Booking Inquiry</h1>
          <p style="margin:4px 0 0;color:#b2d8db;font-size:13px;">Western Lodge — received via booking form</p>
        </div>
        <div style="background:#fff;padding:32px;border:1px solid #e2d9c8;border-top:none;border-radius:0 0 8px 8px;">
          <table style="width:100%;border-collapse:collapse;font-size:14px;">
            <tr style="border-bottom:1px solid #f0ece4;">
              <td style="padding:10px 0;font-weight:600;width:140px;color:#5a7a7c;">Guest Name</td>
              <td style="padding:10px 0;">${esc(name)}</td>
            </tr>
            <tr style="border-bottom:1px solid #f0ece4;">
              <td style="padding:10px 0;font-weight:600;color:#5a7a7c;">Email</td>
              <td style="padding:10px 0;"><a href="mailto:${esc(email)}" style="color:#1F6F7A;">${esc(email)}</a></td>
            </tr>
            <tr style="border-bottom:1px solid #f0ece4;">
              <td style="padding:10px 0;font-weight:600;color:#5a7a7c;">Phone</td>
              <td style="padding:10px 0;">${esc(phone)}</td>
            </tr>
            <tr style="border-bottom:1px solid #f0ece4;">
              <td style="padding:10px 0;font-weight:600;color:#5a7a7c;">Check-in</td>
              <td style="padding:10px 0;">${esc(checkIn)}</td>
            </tr>
            <tr style="border-bottom:1px solid #f0ece4;">
              <td style="padding:10px 0;font-weight:600;color:#5a7a7c;">Check-out</td>
              <td style="padding:10px 0;">${esc(checkOut)}</td>
            </tr>
            <tr style="border-bottom:1px solid #f0ece4;">
              <td style="padding:10px 0;font-weight:600;color:#5a7a7c;">Room Type</td>
              <td style="padding:10px 0;">${esc(roomLabel)}</td>
            </tr>
            <tr style="border-bottom:1px solid #f0ece4;">
              <td style="padding:10px 0;font-weight:600;color:#5a7a7c;">Guests</td>
              <td style="padding:10px 0;">${guests}</td>
            </tr>
            ${
              specialRequests
                ? `<tr>
              <td style="padding:10px 0;font-weight:600;color:#5a7a7c;vertical-align:top;">Special Requests</td>
              <td style="padding:10px 0;">${esc(specialRequests)}</td>
            </tr>`
                : ""
            }
          </table>
          <p style="margin:24px 0 0;font-size:12px;color:#8a9a9b;">
            Reply directly to this email to respond to ${esc(name)}.
          </p>
        </div>
      </div>
    `,
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json(
      { error: "Failed to send email. Please try again." },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true });
}
