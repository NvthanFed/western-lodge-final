import { BookingModalProvider } from "@/context/BookingModalContext";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BookingModal } from "@/components/booking/BookingModal";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { RoomsSection } from "@/components/sections/RoomsSection";
import { AmenitiesSection } from "@/components/sections/AmenitiesSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { AttractionsSection } from "@/components/sections/AttractionsSection";
import { BookingCtaSection } from "@/components/sections/BookingCtaSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { ROOMS, GALLERY } from "@/data/content";

export default function HomePage() {
  return (
    <BookingModalProvider>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <RoomsSection rooms={ROOMS} />
        <AmenitiesSection />
        <GallerySection items={GALLERY} />
        <AttractionsSection />
        <BookingCtaSection />
        <ContactSection />
      </main>
      <Footer />
      <BookingModal />
    </BookingModalProvider>
  );
}
