import Link from "next/link";
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

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 text-white">
      <div className="max-w-7xl mx-auto section-x py-16 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 lg:gap-16">

          {/* Left — Logo lockup */}
          <div>
            <Link href="/" className="flex flex-col leading-none mb-4 group">
              <span className="font-heading font-800 text-base md:text-lg tracking-[0.08em] text-white group-hover:text-cream-300 transition-colors duration-300">
                WESTERN HIGHWAY
              </span>
              <span className="font-body font-500 text-[0.6rem] tracking-[0.42em] uppercase text-cream-300/60 mt-0.5">
                LODGE
              </span>
            </Link>
            <p className="font-body text-sm text-white/45 leading-relaxed max-w-[200px]">
              A sanctuary of tropical luxury on the shores of Marabut, Samar Province.
            </p>
          </div>

          {/* Center — Quick links */}
          <div>
            <h4 className="font-body font-600 text-[0.65rem] tracking-[0.28em] uppercase text-teal-400 mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-white/50 hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — Social */}
          <div>
            <h4 className="font-body font-600 text-[0.65rem] tracking-[0.28em] uppercase text-teal-400 mb-5">
              Follow Us
            </h4>
            <div className="flex items-center gap-3 mb-6">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 bg-white/8 hover:bg-teal-500 rounded-lg flex items-center justify-center transition-colors duration-300"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 bg-white/8 hover:bg-teal-500 rounded-lg flex items-center justify-center transition-colors duration-300"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
            </div>
            <p className="font-body text-xs text-white/30 leading-relaxed">
              Marabut, Samar Province<br />Philippines
            </p>
          </div>

        </div>
      </div>

      {/* Copyright row */}
      <div className="border-t border-white/8">
        <div className="max-w-7xl mx-auto section-x py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="font-body text-xs text-white/30">
            &copy; {year} Western Highway Lodge. All rights reserved.
          </p>
          <p className="font-body text-xs text-white/20">
            Basey-Marabut-Pinamitinan Rd, Marabut 6721, Samar, Philippines
          </p>
        </div>
      </div>
    </footer>
  );
}
