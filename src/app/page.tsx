import { BookingModalProvider } from "@/context/BookingModalContext";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BookingModal } from "@/components/booking/BookingModal";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { RoomsSection } from "@/components/sections/RoomsSection";
import { AmenitiesSection } from "@/components/sections/AmenitiesSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { ContactSection } from "@/components/sections/ContactSection";
import { GALLERY } from "@/data/content";

export default function HomePage() {
  return (
    <BookingModalProvider>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <RoomsSection />
        <AmenitiesSection />
        <GallerySection items={GALLERY} />
        <ContactSection />
      </main>
      <Footer />
      <BookingModal />
    </BookingModalProvider>
  );
}
