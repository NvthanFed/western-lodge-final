import type { Room, GalleryItem, Testimonial, NavLink } from "@/types";

export const NAV_LINKS: NavLink[] = [
  { label: "About",     href: "#about" },
  { label: "Rooms",     href: "#rooms" },
  { label: "Amenities", href: "#amenities" },
  { label: "Gallery",   href: "#gallery" },
  { label: "Contact",   href: "#contact" },
];

export const ROOM_TYPE_LABELS: Record<string, string> = {
  SINGLE:         "Delux Single Room",
  DOUBLE_BUNK:    "Double Bunks Single Room",
  STUDIO:         "Super Delux Studio",
  STUDIO_BALCONY: "Super Delux Studio with Balcony",
  TWIN:           "Superior Delux Twin Room",
  FAMILY_STUDIO:  "Superior Delux Family Studio",
  SUITE:          "Superior Delux Suite",
};

export const ROOMS: Room[] = [
  {
    id: "single-room",
    name: "Delux Single Room",
    type: "SINGLE",
    description:
      "Comfortable solo sanctuary with a full-size bed, en-suite bathroom, and all the essentials. Perfect for travelers seeking simplicity and comfort without the extra space.",
    price: "950",
    capacity: 1,
    amenities: ["Air Conditioning", "Ceiling Fan", "Satellite TV", "En-Suite Bathroom", "Mineral Water", "Complimentary Toiletries"],
    images: ["/western-lodge.png"],
  },
  {
    id: "double-bunk",
    name: "Double Bunks Single Room",
    type: "DOUBLE_BUNK",
    description:
      "Budget-friendly bunk room ideal for backpackers and group travelers. Features single-size bunk beds with AC, shared facilities, and communal comfort at an unbeatable price.",
    price: "900",
    capacity: 2,
    amenities: ["Air Conditioning", "Ceiling Fan", "Bunk Beds", "Shared Bathroom", "Mineral Water", "Complimentary Toiletries"],
    images: ["/western-lodge.png"],
  },
  {
    id: "super-studio",
    name: "Super Delux Studio",
    type: "STUDIO",
    description:
      "Spacious studio with queen and single bed combination, mini fridge, and hot/cold shower. The perfect balance of space and value for small groups or couples seeking more room.",
    price: "1500",
    capacity: 3,
    amenities: ["Air Conditioning", "Ceiling Fan", "Queen & Single Bed", "Mini Fridge", "Satellite TV", "En-Suite Bathroom"],
    images: ["/western-lodge.png"],
  },
  {
    id: "studio-balcony",
    name: "Super Delux Studio with Balcony",
    type: "STUDIO_BALCONY",
    description:
      "Charming studio with private balcony, queen bed, and sofa lounge. Ideal for couples who want to wake up to coastal breezes and enjoy morning views from their own outdoor space.",
    price: "1400",
    capacity: 2,
    amenities: ["Air Conditioning", "Ceiling Fan", "Private Balcony", "Queen Bed & Sofa", "Mini Fridge", "En-Suite Bathroom"],
    images: ["/western-lodge.png"],
  },
  {
    id: "twin-room",
    name: "Superior Delux Twin Room",
    type: "TWIN",
    description:
      "Classic twin room with two full-size beds, perfect for friends or colleagues traveling together. Features modern amenities and a comfortable en-suite bathroom with hot water.",
    price: "1500",
    capacity: 2,
    amenities: ["Air Conditioning", "Ceiling Fan", "Twin Beds", "Mini Fridge", "Satellite TV", "En-Suite Bathroom"],
    images: ["/western-lodge.png"],
  },
  {
    id: "family-studio",
    name: "Superior Delux Family Studio",
    type: "FAMILY_STUDIO",
    description:
      "Spacious two-room suite with separate bedroom and lounge area. Sleeps up to 5 with multiple bed configurations. Pricing: ₱2,000 (3 Pax) · ₱2,600 (4 Pax) · ₱3,250 (5 Pax). Perfect for families wanting shared living space.",
    price: "2000",
    capacity: 5,
    amenities: ["Air Conditioning", "Separate Bedroom & Lounge", "Multiple Beds", "Mini Fridge", "Satellite TV", "En-Suite Bathroom"],
    images: ["/western-lodge.png"],
  },
  {
    id: "superior-suite",
    name: "Superior Delux Suite – Family Apartment",
    type: "SUITE",
    description:
      "Premier three-bedroom apartment sleeps up to 8 guests. Complete with multiple bathrooms, dining area, kitchen access. Pricing: ₱3,250 (5 Pax) · ₱3,900 (6 Pax) · ₱5,200 (8 Pax). Ideal for extended family stays and group retreats.",
    price: "3250",
    capacity: 8,
    amenities: ["3 Bedrooms", "Multiple Bathrooms", "Kitchen Access", "Dining Area", "Satellite TV", "Air Conditioning"],
    images: ["/western-lodge.png"],
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
  { id: "1", url: "/western-lodge.png", alt: "Western Highway Lodge — coastal panorama",       category: "EXTERIOR",     order: 1 },
  { id: "2", url: "/western-lodge.png", alt: "The lodge facade at golden hour",                category: "EXTERIOR",     order: 2 },
  { id: "3", url: "/western-lodge.png", alt: "Limestone karst formations from the lodge",      category: "SURROUNDINGS", order: 3 },
  { id: "4", url: "/western-lodge.png", alt: "Tropical garden grounds",                        category: "EXTERIOR",     order: 4 },
  { id: "5", url: "/western-lodge.png", alt: "Marabut bay view at dawn",                       category: "SURROUNDINGS", order: 5 },
  { id: "6", url: "/western-lodge.png", alt: "The lodge overlooking the Leyte Gulf",           category: "EXTERIOR",     order: 6 },
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
