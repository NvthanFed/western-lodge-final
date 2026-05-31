import { MapPin, Compass, Star } from "lucide-react";

const FEATURES = [
  {
    Icon: MapPin,
    title: "Prime Location",
    blurb:
      "Where crystal-clear rivers, cascading waterfalls, and white-sand beaches create an unforgettable escape.",
  },
  {
    Icon: Compass,
    title: "Local Experiences",
    blurb:
      "Visitors can also enjoy river cruises, guided eco-tours, and cultural encounters in nearby communities.",
  },
  {
    Icon: Star,
    title: "Texas Feel",
    blurb:
      "Where the bold spirit of Texas meets the tropical charm of Samar. Find south-western flair here.",
  },
];

export function DescriptionBand() {
  return (
    <section
      style={{ backgroundColor: "#D8C3A5", minHeight: "297px" }}
      className="flex items-center py-12"
    >
      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[68px]">
          {FEATURES.map(({ Icon, title, blurb }) => (
            <div key={title} className="flex flex-col items-center text-center">
              {/* Icon placeholder ~69×73 */}
              <div className="mb-4 flex items-center justify-center" style={{ width: "69px", height: "73px" }}>
                <Icon className="w-12 h-12 text-white" strokeWidth={1.5} />
              </div>

              {/* Title: 24px League Spartan Bold, white */}
              <h3
                style={{
                  fontFamily: "var(--font-league-spartan)",
                  fontSize: "24px",
                  fontWeight: 700,
                }}
                className="text-white mb-3"
              >
                {title}
              </h3>

              {/* Blurb: 16px Montserrat SemiBold, white */}
              <p
                style={{
                  fontFamily: "var(--font-montserrat)",
                  fontSize: "16px",
                  fontWeight: 600,
                }}
                className="text-white leading-relaxed"
              >
                {blurb}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
