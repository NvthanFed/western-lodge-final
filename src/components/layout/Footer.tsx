import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { NAV_LINKS } from "@/data/content";

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

const ROOM_LINKS = [
  "Delux Single Room",
  "Super Delux Studio",
  "Superior Delux Twin Room",
  "Superior Delux Suite",
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-teal-900 text-white">
      <div className="max-w-7xl mx-auto section-x py-16 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

          {/* Col 1 — Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <p className="font-heading font-800 text-base tracking-[0.08em]">WESTERN HIGHWAY</p>
              <p className="font-body font-500 text-[0.65rem] tracking-[0.38em] uppercase text-teal-300 mt-0.5">Lodge</p>
            </div>
            <p className="font-body text-sm text-white/50 leading-relaxed mb-6">
              A sanctuary of tropical luxury on the shores of Marabut, Samar Province.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
                className="w-9 h-9 bg-white/8 hover:bg-white/18 rounded-lg flex items-center justify-center transition-colors">
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                className="w-9 h-9 bg-white/8 hover:bg-white/18 rounded-lg flex items-center justify-center transition-colors">
                <InstagramIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2 — Explore */}
          <div>
            <h4 className="font-body font-600 text-[0.65rem] tracking-[0.28em] uppercase text-teal-400 mb-5">Explore</h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="font-body text-sm text-white/55 hover:text-white transition-colors">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Accommodations */}
          <div>
            <h4 className="font-body font-600 text-[0.65rem] tracking-[0.28em] uppercase text-teal-400 mb-5">Accommodations</h4>
            <ul className="space-y-3">
              {ROOM_LINKS.map((name) => (
                <li key={name}>
                  <a href="#rooms" className="font-body text-sm text-white/55 hover:text-white transition-colors">{name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact */}
          <div>
            <h4 className="font-body font-600 text-[0.65rem] tracking-[0.28em] uppercase text-teal-400 mb-5">Contact</h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" strokeWidth={1.5} />
                <span className="font-body text-sm text-white/55 leading-relaxed">
                  Marabut, Samar Province<br />Philippines
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-teal-400 shrink-0" strokeWidth={1.5} />
                <a href="tel:+639391504286" className="font-body text-sm text-white/55 hover:text-white transition-colors">
                  +63 (939)-150-4286
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-teal-400 shrink-0" strokeWidth={1.5} />
                <a href="mailto:westernhighwaylodgehotel@hotmail.com" className="font-body text-sm text-white/55 hover:text-white transition-colors break-all">
                  westernhighwaylodgehotel@hotmail.com
                </a>
              </li>
              <li className="flex gap-3">
                <Clock className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" strokeWidth={1.5} />
                <span className="font-body text-sm text-white/55 leading-relaxed">
                  Front desk: 24 hours<br />
                  Check-in: 2:00 PM<br />
                  Check-out: 12:00 PM
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8">
        <div className="max-w-7xl mx-auto section-x py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="font-body text-xs text-white/30">© {year} Western Highway Lodge. All rights reserved.</p>
          <p className="font-body text-xs text-white/30">Marabut, Samar Province, Philippines</p>
        </div>
      </div>
    </footer>
  );
}
