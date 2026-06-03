import type { Room, GalleryItem, Testimonial, NavLink } from "@/types";

export const NAV_LINKS: NavLink[] = [
  { label: "About",     href: "#about" },
  { label: "Rooms",     href: "#rooms" },
  { label: "Amenities", href: "#amenities" },
  { label: "Gallery",   href: "#gallery" },
  { label: "Contact",   href: "#contact" },
];

export const ROOM_TYPE_LABELS: Record<string, string> = {
  SINGLE:          "Delux Single Room",
  EN_SUITE_SINGLE: "En Suite Single Room",
  DOUBLE_BUNK:     "Double Bunks Single Room",
  STUDIO:         "Super Delux Studio",
  STUDIO_BALCONY: "Super Delux Studio with Balcony",
  TWIN:           "Superior Delux Twin Room",
  FAMILY_STUDIO:  "Superior Delux Family Studio",
  SUITE:          "Superior Delux Suite",
};

export const ROOMS: Room[] = [
  {
    id: "delux-single",
    name: "Delux Single Room",
    type: "SINGLE",
    description:
      "Full-size single bed with en-suite shower, air conditioning, ceiling fan, fridge, satellite TV, kettle, mineral water, and complimentary toiletries. Ground floor (GF6 & GF7). Second person sharing +₱250/night.",
    price: "950",
    capacity: 2,
    amenities: ["Air Conditioning", "Ceiling Fan", "Fridge", "Satellite TV", "En-Suite Shower", "Kettle", "Mineral Water", "Complimentary Toiletries"],
    images: ["/room1.jpeg"],
  },
  {
    id: "suite-single",
    name: "En Suite Single Room",
    type: "EN_SUITE_SINGLE",
    description:
      "Full-size single bed with en-suite shower, air conditioning, fridge, satellite TV, kettle, and complimentary toiletries. Comfortable and value-packed for the solo traveller.",
    price: "950",
    capacity: 2,
    amenities: ["Air Conditioning", "Fridge", "Satellite TV", "En-Suite Shower", "Kettle", "Complimentary Toiletries"],
    images: ["/enSuiteSingleRoom.jpeg"],
  },
  {
    id: "double-bunk",
    name: "Double Bunks Single Room",
    type: "DOUBLE_BUNK",
    description:
      "Single-size bunk beds (up and down) with shared bathroom. Air conditioning, ceiling fan, kettle, mineral water, and complimentary toiletries. Ground floor annex (GR11 & GR12). Single occupant ₱500/night.",
    price: "900",
    capacity: 2,
    amenities: ["Air Conditioning", "Ceiling Fan", "Bunk Beds", "Shared Bathroom", "Kettle", "Mineral Water", "Complimentary Toiletries"],
    images: ["/western-lodge.png"],
  },
  {
    id: "super-studio",
    name: "Super Delux Studio",
    type: "STUDIO",
    description:
      "Queen size bed plus full-size single bed with en-suite hot/cold shower. Air conditioning, ceiling fan, fridge, satellite TV, kettle, and mineral water. Sleeps up to 3. 1–2 Pax ₱1,500 · 3 Pax ₱1,950. Extra person +₱600/night.",
    price: "1500",
    capacity: 3,
    amenities: ["Air Conditioning", "Ceiling Fan", "Queen & Single Bed", "Fridge", "Satellite TV", "En-Suite Hot/Cold Shower", "Kettle", "Mineral Water", "Complimentary Toiletries"],
    images: ["/room4.png"],
  },
  {
    id: "studio-balcony",
    name: "Super Delux Studio with Balcony",
    type: "STUDIO_BALCONY",
    description:
      "Queen size bed with sofa set and private balcony. En-suite hot/cold shower, air conditioning, ceiling fan, fridge, satellite TV, and kettle. Sleeps 2. 1–2 Pax ₱1,400. Extra person +₱600/night.",
    price: "1400",
    capacity: 2,
    amenities: ["Air Conditioning", "Ceiling Fan", "Private Balcony", "Queen Bed & Sofa", "Fridge", "Satellite TV", "En-Suite Hot/Cold Shower", "Kettle", "Mineral Water", "Complimentary Toiletries"],
    images: ["/room2.png"],
  },
  {
    id: "twin-room",
    name: "Superior Delux Twin Room",
    type: "TWIN",
    description:
      "Two full-size single beds with en-suite hot/cold shower. Air conditioning, ceiling fan, fridge, satellite TV, kettle, and mineral water. Ground floor annex (R14). Sleeps 2. 2 Pax ₱1,500. Extra person +₱600/night.",
    price: "1500",
    capacity: 2,
    amenities: ["Air Conditioning", "Ceiling Fan", "Twin Beds", "Fridge", "Satellite TV", "En-Suite Hot/Cold Shower", "Kettle", "Mineral Water", "Complimentary Toiletries"],
    images: ["/western-lodge.png"],
  },
  {
    id: "family-studio",
    name: "Superior Delux Family Studio",
    type: "FAMILY_STUDIO",
    description:
      "Double bed and full-size single bed with adjoining bunk room (2 full-size bunk beds). En-suite hot/cold shower, AC, ceiling fan, satellite TV, fridge, vanity unit, and storage cabinets. Sleeps 5. 3 Pax ₱2,000 · 4 Pax ₱2,600 · 5 Pax ₱3,250. Extra person +₱600/night.",
    price: "2000",
    capacity: 5,
    amenities: ["Air Conditioning", "Ceiling Fan", "Double + Single + Bunk Beds", "Fridge", "Satellite TV", "En-Suite Hot/Cold Shower", "Vanity Unit", "Storage Cabinets", "Kettle", "Mineral Water", "Complimentary Toiletries"],
    images: ["/room3.png"],
  },
  {
    id: "superior-suite",
    name: "Superior Delux Suite",
    type: "SUITE",
    description:
      "Three-bedroom family apartment sleeping up to 8. Bedroom 1: queen bed, single bed, and baby crib. Bedroom 2: twin bunk beds. Bedroom 3: three full-size singles with spacious en-suite. Dining table, fridge, mineral water dispenser, multiple ACs, and satellite TV. 5 Pax ₱3,250 · 6 Pax ₱3,900 · 8 Pax ₱5,200. Extra person +₱500/night.",
    price: "3250",
    capacity: 8,
    amenities: ["3 Bedrooms", "Multiple Bathrooms", "Multiple ACs", "Ceiling Fans", "Dining Table", "Fridge", "Mineral Water Dispenser", "Satellite TV", "Kettle", "Baby Crib", "Complimentary Toiletries"],
    images: ["/room5.png"],
  },
];

export const AMENITIES = [
  { icon: "Sunset",         label: "Rooftop Bar",      description: "Craft cocktails with panoramic sea views at golden hour" },
  { icon: "UtensilsCrossed",label: "Restaurant",        description: "Filipino cuisine featuring fresh local seafood and produce" },
  { icon: "Sparkles",       label: "Spa & Massage",     description: "Traditional Hilot and Swedish massage treatments" },
  { icon: "TreePalm",       label: "Tropical Garden",   description: "Lush native flora and tranquil morning garden walks" },
  { icon: "Wifi",           label: "High-Speed WiFi",   description: "Fiber connectivity across all rooms and common areas" },
  { icon: "ParkingCircle",  label: "Free Parking",      description: "Secure guarded parking for all guests, 24 hours" },
] as const;

export const ATTRACTIONS = [
  {
    name: "Marabut Marine Park",
    description: "Snorkel and island-hop among breathtaking limestone karst formations rising from turquoise waters.",
    icon: "Fish",
    distance: "10 min by boat",
    color: "teal",
  },
  {
    name: "Lauaan Beach",
    description: "Pristine white sand and crystal-clear waters just steps from the lodge — perfect for sunrise swims.",
    icon: "Waves",
    distance: "5 min walk",
    color: "tropical",
  },
  {
    name: "Eastern Samar Natural Park",
    description: "Rainforest trekking, rare wildlife encounters, and hidden waterfalls in lush jungle terrain.",
    icon: "TreePine",
    distance: "30 min drive",
    color: "tropical",
  },
  {
    name: "Calicoan Island",
    description: "World-class surfing breaks and premier diving spots along the Pacific coastline.",
    icon: "Sailboat",
    distance: "45 min drive",
    color: "teal",
  },
] as const;

export const GALLERY: GalleryItem[] = [
  { id: "1", url: "/food.jpeg", alt: "Western Highway Lodge — coastal panorama",       category: "EXTERIOR",     order: 1 },
  { id: "2", url: "/frontDoor.jpeg", alt: "The lodge facade at golden hour",                category: "EXTERIOR",     order: 2 },
  { id: "3", url: "/restaurant.jpeg", alt: "Limestone karst formations from the lodge",      category: "SURROUNDINGS", order: 3 },
  { id: "4", url: "/sign.jpeg", alt: "Tropical garden grounds",                        category: "EXTERIOR",     order: 4 },
  { id: "5", url: "/conference.png", alt: "Marabut bay view at dawn",                       category: "SURROUNDINGS", order: 5 },
  { id: "6", url: "/terrace.png", alt: "The lodge overlooking the Leyte Gulf",           category: "EXTERIOR",     order: 6 },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    guestName: "Maria Santos",
    location: "Manila, Philippines",
    rating: 5,
    review: "Waking up to the sound of waves from our balcony was something I'll never forget. The suite was breathtaking — every detail felt intentional and luxurious. The staff's warmth made it feel like coming home.",
    date: "2024-11-15",
    featured: true,
  },
  {
    id: "2",
    guestName: "James Whitfield",
    location: "Sydney, Australia",
    rating: 5,
    review: "The Coastal Suite exceeded every expectation. I've stayed at luxury hotels across Southeast Asia, and Western Highway Lodge stands out for its genuine character and exceptional service. The rooftop bar at sunset is magical.",
    date: "2024-10-22",
    featured: true,
  },
  {
    id: "3",
    guestName: "David Chen",
    location: "Singapore",
    rating: 5,
    review: "One of the most beautiful views I've experienced anywhere in the world. Watching the sun dip behind the limestone islands while sipping a craft cocktail — pure magic. The food was also surprisingly excellent.",
    date: "2024-09-18",
    featured: true,
  },
  {
    id: "4",
    guestName: "Rina Nakamura",
    location: "Osaka, Japan",
    rating: 5,
    review: "The staff warmth is truly unmatched. From the moment we arrived to checkout, every interaction felt personal. The traditional massage was deeply restorative. Marabut's natural beauty paired with this lodge is a hidden treasure.",
    date: "2024-12-03",
    featured: false,
  },
];

export const CONTACT_INFO = [
  {
    label: "Address",
    value: "Basey-Marabut-Pinamitinan Rd\nMarabut 6721, Samar, Philippines",
    href: null as string | null,
    icon: "MapPin",
  },
  {
    label: "Phone",
    value: "+63 (939) 150-4286",
    href: "tel:+639391504286",
    icon: "Phone",
  },
  {
    label: "Email",
    value: "westernhighwaylodgehotel@hotmail.com",
    href: "mailto:westernhighwaylodgehotel@hotmail.com",
    icon: "Mail",
  },
  {
    label: "Hours",
    value: "Front Desk: 24 hours\nCheck-in: 2:00 PM · Check-out: 12:00 PM",
    href: null as string | null,
    icon: "Clock",
  },
];
