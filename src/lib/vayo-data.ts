// VAYO Shared Data Model
// Single source of truth for all modules - Artist, Agency, Label, Festival

// =============================================================================
// CORE ENTITIES
// =============================================================================

export interface Artist {
  id: string;
  name: string;
  genre: string;
  location: string;
  country: string;
  agencyId: string | null;
  labelId: string | null;
  email: string;
  phone: string;
  spotifyId?: string;
  instagramHandle?: string;
  streams: string;
  monthlyListeners: string;
  rating: number;
  status: "active" | "inactive" | "pending";
  avatar?: string;
  bio?: string;
  technicalRider?: string;
  hospitalityRider?: string;
  pressKit?: string;
  createdAt: string;
}

export interface Agency {
  id: string;
  name: string;
  location: string;
  country: string;
  email: string;
  phone: string;
  website?: string;
  vatNumber?: string;
  commissionRate: number; // percentage
  status: "active" | "inactive";
}

export interface Label {
  id: string;
  name: string;
  location: string;
  country: string;
  email: string;
  genre: string;
  distributionPartner?: string;
  status: "active" | "inactive";
}

export interface Festival {
  id: string;
  name: string;
  location: string;
  country: string;
  dates: { start: string; end: string };
  capacity: number;
  stages: Stage[];
  budget: number;
  status: "planning" | "confirmed" | "completed" | "cancelled";
}

export interface Stage {
  id: string;
  name: string;
  capacity: number;
  budget: number;
  spent: number;
}

// =============================================================================
// BOOKING & EVENTS
// =============================================================================

export type BookingStatus = 
  | "inquiry" 
  | "negotiating" 
  | "contract_sent" 
  | "pending" 
  | "confirmed" 
  | "cancelled";

export type ContractStatus = 
  | "draft" 
  | "sent" 
  | "awaiting_signature" 
  | "signed" 
  | "expired" 
  | "cancelled";

export type AdvancingStatus = 
  | "not_started" 
  | "in_progress" 
  | "action_needed" 
  | "completed";

export interface Booking {
  id: string;
  artistId: string;
  artistName: string;
  agencyId: string | null;
  venueId?: string;
  festivalId?: string;
  venue: string;
  city: string;
  country: string;
  date: string;
  time: string;
  duration: number; // minutes
  fee: number;
  currency: string;
  status: BookingStatus;
  contractId?: string;
  contractStatus: ContractStatus;
  promoter: string;
  promoterEmail?: string;
  type: "venue" | "festival" | "private";
  advancingStatus?: AdvancingStatus;
  advancingSteps?: AdvancingStep[];
  travelBooked: boolean;
  accommodationBooked: boolean;
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

export interface AdvancingStep {
  id: string;
  name: string;
  status: "pending" | "in_progress" | "completed";
  completedAt?: string;
  completedBy?: string;
  notes?: string;
}

// =============================================================================
// CONTRACTS
// =============================================================================

export interface Contract {
  id: string;
  title: string;
  bookingId: string;
  artistId: string;
  artistName: string;
  promoter: string;
  promoterEmail?: string;
  showDate: string;
  venue: string;
  value: number;
  currency: string;
  status: ContractStatus;
  type: "performance" | "recording" | "licensing" | "management";
  createdAt: string;
  sentAt?: string;
  signedAt?: string;
  expiresAt?: string;
  signatureProvider?: "hellosign" | "docusign" | "manual";
  documentUrl?: string;
  signedDocumentUrl?: string;
}

// =============================================================================
// INVOICES & FINANCE
// =============================================================================

export type InvoiceStatus = "draft" | "sent" | "pending" | "paid" | "overdue" | "cancelled";

export interface Invoice {
  id: string;
  bookingId?: string;
  contractId?: string;
  artistId?: string;
  artistName: string;
  client: string;
  clientEmail?: string;
  clientAddress?: string;
  clientVatNumber?: string;
  description: string;
  items: InvoiceItem[];
  subtotal: number;
  vatRate: number;
  vatAmount: number;
  total: number;
  currency: string;
  status: InvoiceStatus;
  issueDate: string;
  dueDate: string;
  paidDate?: string;
  paymentMethod?: string;
  paymentReference?: string;
  notes?: string;
}

export interface InvoiceItem {
  description: string;
  quantity: number;
  unitPrice: number;
  total: number;
}

// =============================================================================
// RELEASES (Labels)
// =============================================================================

export type ReleaseStatus = 
  | "planning" 
  | "recording" 
  | "mastering" 
  | "ready" 
  | "scheduled" 
  | "released";

export interface Release {
  id: string;
  title: string;
  artistId: string;
  artistName: string;
  labelId: string;
  type: "single" | "ep" | "album";
  genre: string;
  releaseDate: string;
  status: ReleaseStatus;
  coverArt?: string;
  tracks: Track[];
  spotifyUrl?: string;
  appleMusicUrl?: string;
  youtubeUrl?: string;
  streams: number;
  isrc?: string;
  upc?: string;
  royaltySplit: RoyaltySplit[];
  distributionStatus?: string;
}

export interface Track {
  id: string;
  title: string;
  duration: number; // seconds
  isrc?: string;
  streams: number;
  position: number;
}

export interface RoyaltySplit {
  recipientId: string;
  recipientName: string;
  recipientType: "artist" | "label" | "producer" | "writer";
  percentage: number;
}

// =============================================================================
// SOCIAL MEDIA
// =============================================================================

export type PostStatus = "draft" | "scheduled" | "published" | "failed";
export type Platform = "instagram" | "twitter" | "facebook" | "tiktok" | "linkedin";

export interface SocialPost {
  id: string;
  artistId: string;
  artistName: string;
  content: string;
  mediaUrls?: string[];
  platforms: Platform[];
  scheduledAt?: string;
  publishedAt?: string;
  status: PostStatus;
  createdBy: string;
  createdByRole: "artist" | "label" | "management";
  approvedBy?: string;
  approvedAt?: string;
  engagement?: {
    likes: number;
    comments: number;
    shares: number;
    reach: number;
  };
}

// =============================================================================
// ANALYTICS
// =============================================================================

export interface AnalyticsSnapshot {
  id: string;
  artistId: string;
  date: string;
  spotify: {
    monthlyListeners: number;
    followers: number;
    streams: number;
    topCities: { city: string; listeners: number }[];
  };
  instagram: {
    followers: number;
    engagement: number;
    reachLast30Days: number;
  };
  youtube?: {
    subscribers: number;
    views: number;
  };
  tiktok?: {
    followers: number;
    likes: number;
    views: number;
  };
}

// =============================================================================
// NOTIFICATIONS
// =============================================================================

export type NotificationType = 
  | "booking_created"
  | "booking_confirmed"
  | "booking_cancelled"
  | "contract_sent"
  | "contract_signed"
  | "invoice_sent"
  | "invoice_paid"
  | "invoice_overdue"
  | "advancing_update"
  | "release_scheduled"
  | "release_published"
  | "social_post_scheduled"
  | "social_post_approval"
  | "welcome"
  | "system";

export interface Notification {
  id: string;
  type: NotificationType;
  title: string;
  message: string;
  recipientId: string;
  recipientType: "artist" | "agency" | "label" | "festival";
  read: boolean;
  actionUrl?: string;
  createdAt: string;
}

// =============================================================================
// TRAVEL & LOGISTICS
// =============================================================================

export interface TravelBooking {
  id: string;
  bookingId: string;
  artistId: string;
  type: "flight" | "train" | "car" | "hotel";
  status: "pending" | "booked" | "confirmed" | "cancelled";
  details: {
    outbound?: {
      from: string;
      to: string;
      date: string;
      time: string;
      carrier?: string;
      reference?: string;
    };
    inbound?: {
      from: string;
      to: string;
      date: string;
      time: string;
      carrier?: string;
      reference?: string;
    };
    hotel?: {
      name: string;
      address: string;
      checkIn: string;
      checkOut: string;
      reference?: string;
    };
  };
  cost: number;
  currency: string;
  paidBy: "agency" | "promoter" | "artist";
}

// =============================================================================
// DEMO DATA
// =============================================================================

export const DEMO_AGENCIES: Agency[] = [
  {
    id: "agency-001",
    name: "Dutch Dance Agency",
    location: "Amsterdam",
    country: "NL",
    email: "info@dutchdance.nl",
    phone: "+31 20 123 4567",
    website: "https://dutchdance.nl",
    vatNumber: "NL123456789B01",
    commissionRate: 15,
    status: "active",
  },
  {
    id: "agency-002",
    name: "Bass Nation",
    location: "Bristol",
    country: "UK",
    email: "bookings@bassnation.co.uk",
    phone: "+44 117 123 4567",
    commissionRate: 15,
    status: "active",
  },
];

export const DEMO_LABELS: Label[] = [
  {
    id: "label-001",
    name: "VAYO Records",
    location: "Amsterdam",
    country: "NL",
    email: "info@vayorecords.com",
    genre: "Electronic",
    distributionPartner: "DistroKid",
    status: "active",
  },
];

export const DEMO_ARTISTS: Artist[] = [
  {
    id: "artist-001",
    name: "DJ Storm",
    genre: "Techno / House",
    location: "Amsterdam",
    country: "NL",
    agencyId: "agency-001",
    labelId: "label-001",
    email: "storm@djstorm.com",
    phone: "+31 6 12345678",
    spotifyId: "spotify:artist:abc123",
    instagramHandle: "@djstorm",
    streams: "12.5M",
    monthlyListeners: "850K",
    rating: 4.9,
    status: "active",
    createdAt: "2020-01-15",
  },
  {
    id: "artist-002",
    name: "Aurora Beats",
    genre: "Progressive House",
    location: "Berlin",
    country: "DE",
    agencyId: "agency-001",
    labelId: "label-001",
    email: "aurora@aurorabeats.de",
    phone: "+49 30 12345678",
    streams: "8.2M",
    monthlyListeners: "620K",
    rating: 4.8,
    status: "active",
    createdAt: "2021-03-20",
  },
  {
    id: "artist-003",
    name: "The Waves",
    genre: "Indie Rock",
    location: "London",
    country: "UK",
    agencyId: null,
    labelId: null,
    email: "contact@thewaves.co.uk",
    phone: "+44 20 12345678",
    streams: "6.8M",
    monthlyListeners: "480K",
    rating: 4.7,
    status: "active",
    createdAt: "2019-06-10",
  },
  {
    id: "artist-004",
    name: "Neon Dreams",
    genre: "Synthwave",
    location: "Paris",
    country: "FR",
    agencyId: null,
    labelId: null,
    email: "hello@neondreams.fr",
    phone: "+33 1 12345678",
    streams: "4.1M",
    monthlyListeners: "290K",
    rating: 4.6,
    status: "active",
    createdAt: "2022-01-05",
  },
  {
    id: "artist-005",
    name: "Pulse",
    genre: "Drum & Bass",
    location: "Bristol",
    country: "UK",
    agencyId: "agency-002",
    labelId: null,
    email: "pulse@pulsemusic.uk",
    phone: "+44 117 12345678",
    streams: "15.2M",
    monthlyListeners: "1.1M",
    rating: 4.9,
    status: "active",
    createdAt: "2018-09-12",
  },
];

export const DEMO_BOOKINGS: Booking[] = [
  {
    id: "BK-2026-001",
    artistId: "artist-001",
    artistName: "DJ Storm",
    agencyId: "agency-001",
    venue: "Paradiso",
    city: "Amsterdam",
    country: "NL",
    date: "2026-01-24",
    time: "23:00",
    duration: 90,
    fee: 4500,
    currency: "EUR",
    status: "confirmed",
    contractId: "CTR-2026-001",
    contractStatus: "signed",
    promoter: "ID&T",
    promoterEmail: "bookings@idt.nl",
    type: "venue",
    travelBooked: true,
    accommodationBooked: true,
    createdAt: "2025-11-15",
    updatedAt: "2026-01-10",
  },
  {
    id: "BK-2026-002",
    artistId: "artist-003",
    artistName: "The Waves",
    agencyId: null,
    venue: "O2 Arena",
    city: "London",
    country: "UK",
    date: "2026-01-28",
    time: "20:00",
    duration: 120,
    fee: 12000,
    currency: "GBP",
    status: "pending",
    contractId: "CTR-2026-002",
    contractStatus: "sent",
    promoter: "Live Nation",
    type: "venue",
    travelBooked: false,
    accommodationBooked: false,
    createdAt: "2025-12-01",
    updatedAt: "2026-01-05",
  },
  {
    id: "BK-2026-003",
    artistId: "artist-001",
    artistName: "DJ Storm",
    agencyId: "agency-001",
    festivalId: "festival-001",
    venue: "Summer Sounds Festival",
    city: "Amsterdam",
    country: "NL",
    date: "2026-07-15",
    time: "23:00",
    duration: 90,
    fee: 45000,
    currency: "EUR",
    status: "confirmed",
    contractId: "CTR-2026-003",
    contractStatus: "signed",
    promoter: "Summer Sounds",
    type: "festival",
    advancingStatus: "in_progress",
    advancingSteps: [
      { id: "adv-1", name: "Contract", status: "completed", completedAt: "2025-12-01" },
      { id: "adv-2", name: "Technical Rider", status: "completed", completedAt: "2025-12-15" },
      { id: "adv-3", name: "Travel Info", status: "in_progress" },
      { id: "adv-4", name: "Hospitality", status: "pending" },
      { id: "adv-5", name: "Guestlist", status: "pending" },
    ],
    travelBooked: false,
    accommodationBooked: false,
    createdAt: "2025-10-01",
    updatedAt: "2026-01-15",
  },
  {
    id: "BK-2026-004",
    artistId: "artist-002",
    artistName: "Aurora Beats",
    agencyId: "agency-001",
    venue: "Berghain",
    city: "Berlin",
    country: "DE",
    date: "2026-02-02",
    time: "23:00",
    duration: 120,
    fee: 6000,
    currency: "EUR",
    status: "confirmed",
    contractId: "CTR-2026-004",
    contractStatus: "signed",
    promoter: "Ostgut Ton",
    type: "venue",
    travelBooked: true,
    accommodationBooked: true,
    createdAt: "2025-11-20",
    updatedAt: "2026-01-08",
  },
  {
    id: "BK-2026-005",
    artistId: "artist-002",
    artistName: "Aurora Beats",
    agencyId: "agency-001",
    festivalId: "festival-002",
    venue: "Fusion Festival",
    city: "Lärz",
    country: "DE",
    date: "2026-06-20",
    time: "22:00",
    duration: 90,
    fee: 35000,
    currency: "EUR",
    status: "confirmed",
    contractId: "CTR-2026-005",
    contractStatus: "signed",
    promoter: "Fusion Festival",
    type: "festival",
    advancingStatus: "completed",
    advancingSteps: [
      { id: "adv-1", name: "Contract", status: "completed", completedAt: "2025-11-01" },
      { id: "adv-2", name: "Technical Rider", status: "completed", completedAt: "2025-11-15" },
      { id: "adv-3", name: "Travel Info", status: "completed", completedAt: "2025-12-01" },
      { id: "adv-4", name: "Hospitality", status: "completed", completedAt: "2025-12-15" },
      { id: "adv-5", name: "Guestlist", status: "completed", completedAt: "2026-01-05" },
    ],
    travelBooked: true,
    accommodationBooked: true,
    createdAt: "2025-09-15",
    updatedAt: "2026-01-10",
  },
  {
    id: "BK-2026-006",
    artistId: "artist-005",
    artistName: "Pulse",
    agencyId: "agency-002",
    venue: "Fabric",
    city: "London",
    country: "UK",
    date: "2026-02-05",
    time: "22:00",
    duration: 120,
    fee: 4000,
    currency: "GBP",
    status: "confirmed",
    contractId: "CTR-2026-006",
    contractStatus: "signed",
    promoter: "Fabric London",
    type: "venue",
    travelBooked: true,
    accommodationBooked: false,
    createdAt: "2025-12-10",
    updatedAt: "2026-01-12",
  },
];

export const DEMO_CONTRACTS: Contract[] = [
  {
    id: "CTR-2026-001",
    title: "Performance Agreement - Paradiso",
    bookingId: "BK-2026-001",
    artistId: "artist-001",
    artistName: "DJ Storm",
    promoter: "ID&T",
    promoterEmail: "bookings@idt.nl",
    showDate: "2026-01-24",
    venue: "Paradiso, Amsterdam",
    value: 4500,
    currency: "EUR",
    status: "signed",
    type: "performance",
    createdAt: "2025-11-15",
    sentAt: "2025-11-16",
    signedAt: "2025-11-20",
    signatureProvider: "hellosign",
  },
  {
    id: "CTR-2026-002",
    title: "Performance Agreement - O2 Arena",
    bookingId: "BK-2026-002",
    artistId: "artist-003",
    artistName: "The Waves",
    promoter: "Live Nation",
    showDate: "2026-01-28",
    venue: "O2 Arena, London",
    value: 12000,
    currency: "GBP",
    status: "awaiting_signature",
    type: "performance",
    createdAt: "2025-12-01",
    sentAt: "2025-12-02",
    signatureProvider: "hellosign",
  },
  {
    id: "CTR-2026-003",
    title: "Festival Performance - Summer Sounds",
    bookingId: "BK-2026-003",
    artistId: "artist-001",
    artistName: "DJ Storm",
    promoter: "Summer Sounds",
    showDate: "2026-07-15",
    venue: "Summer Sounds Festival, Amsterdam",
    value: 45000,
    currency: "EUR",
    status: "signed",
    type: "performance",
    createdAt: "2025-10-01",
    sentAt: "2025-10-02",
    signedAt: "2025-10-10",
    signatureProvider: "hellosign",
  },
];

export const DEMO_INVOICES: Invoice[] = [
  {
    id: "INV-2026-001",
    bookingId: "BK-2026-001",
    contractId: "CTR-2026-001",
    artistId: "artist-001",
    artistName: "DJ Storm",
    client: "ID&T",
    clientEmail: "finance@idt.nl",
    clientAddress: "Contactweg 36, 1014 AN Amsterdam",
    clientVatNumber: "NL001234567B01",
    description: "Performance fee - Paradiso Amsterdam",
    items: [
      { description: "Performance fee - DJ Storm at Paradiso", quantity: 1, unitPrice: 4500, total: 4500 },
    ],
    subtotal: 4500,
    vatRate: 21,
    vatAmount: 945,
    total: 5445,
    currency: "EUR",
    status: "pending",
    issueDate: "2026-01-20",
    dueDate: "2026-02-20",
  },
  {
    id: "INV-2026-002",
    bookingId: "BK-2026-003",
    contractId: "CTR-2026-003",
    artistId: "artist-001",
    artistName: "DJ Storm",
    client: "Summer Sounds Festival",
    clientEmail: "finance@summersounds.nl",
    description: "Festival performance fee (50% deposit)",
    items: [
      { description: "Performance fee - DJ Storm at Summer Sounds (50% deposit)", quantity: 1, unitPrice: 22500, total: 22500 },
    ],
    subtotal: 22500,
    vatRate: 21,
    vatAmount: 4725,
    total: 27225,
    currency: "EUR",
    status: "paid",
    issueDate: "2025-10-15",
    dueDate: "2025-11-15",
    paidDate: "2025-11-10",
    paymentMethod: "Bank Transfer",
    paymentReference: "SUMSO-DEP-2026",
  },
];

export const DEMO_RELEASES: Release[] = [
  {
    id: "REL-2026-001",
    title: "Midnight Sessions EP",
    artistId: "artist-001",
    artistName: "DJ Storm",
    labelId: "label-001",
    type: "ep",
    genre: "Techno",
    releaseDate: "2026-02-01",
    status: "mastering",
    tracks: [
      { id: "t1", title: "Midnight Drive", duration: 420, streams: 0, position: 1 },
      { id: "t2", title: "City Lights", duration: 385, streams: 0, position: 2 },
      { id: "t3", title: "After Hours", duration: 445, streams: 0, position: 3 },
      { id: "t4", title: "Dawn Break", duration: 398, streams: 0, position: 4 },
    ],
    streams: 0,
    royaltySplit: [
      { recipientId: "artist-001", recipientName: "DJ Storm", recipientType: "artist", percentage: 70 },
      { recipientId: "label-001", recipientName: "VAYO Records", recipientType: "label", percentage: 30 },
    ],
  },
  {
    id: "REL-2026-002",
    title: "Echoes",
    artistId: "artist-002",
    artistName: "Aurora Beats",
    labelId: "label-001",
    type: "single",
    genre: "Progressive House",
    releaseDate: "2026-02-15",
    status: "ready",
    tracks: [
      { id: "t1", title: "Echoes", duration: 395, streams: 0, position: 1 },
    ],
    streams: 0,
    royaltySplit: [
      { recipientId: "artist-002", recipientName: "Aurora Beats", recipientType: "artist", percentage: 70 },
      { recipientId: "label-001", recipientName: "VAYO Records", recipientType: "label", percentage: 30 },
    ],
  },
  {
    id: "REL-2025-003",
    title: "Neon City",
    artistId: "artist-004",
    artistName: "Neon Dreams",
    labelId: "label-001",
    type: "single",
    genre: "Synthwave",
    releaseDate: "2025-12-15",
    status: "released",
    spotifyUrl: "https://open.spotify.com/track/xyz",
    tracks: [
      { id: "t1", title: "Neon City", duration: 312, streams: 1200000, position: 1 },
    ],
    streams: 1200000,
    royaltySplit: [
      { recipientId: "artist-004", recipientName: "Neon Dreams", recipientType: "artist", percentage: 70 },
      { recipientId: "label-001", recipientName: "VAYO Records", recipientType: "label", percentage: 30 },
    ],
  },
];

export const DEMO_SOCIAL_POSTS: SocialPost[] = [
  {
    id: "POST-001",
    artistId: "artist-001",
    artistName: "DJ Storm",
    content: "Can't wait for tonight's show at Paradiso! See you on the dancefloor 🎧🔥",
    platforms: ["instagram", "twitter"],
    scheduledAt: "2026-01-24T18:00:00Z",
    status: "scheduled",
    createdBy: "artist-001",
    createdByRole: "artist",
  },
  {
    id: "POST-002",
    artistId: "artist-001",
    artistName: "DJ Storm",
    content: "New EP 'Midnight Sessions' dropping February 1st! Pre-save link in bio.",
    platforms: ["instagram", "twitter", "facebook"],
    scheduledAt: "2026-01-28T12:00:00Z",
    status: "scheduled",
    createdBy: "label-001",
    createdByRole: "label",
    approvedBy: "artist-001",
    approvedAt: "2026-01-20T10:00:00Z",
  },
  {
    id: "POST-003",
    artistId: "artist-002",
    artistName: "Aurora Beats",
    content: "Just finished the final mix for 'Echoes'. This one is special ✨",
    platforms: ["instagram"],
    status: "draft",
    createdBy: "artist-002",
    createdByRole: "artist",
  },
];

export const DEMO_NOTIFICATIONS: Notification[] = [
  {
    id: "notif-001",
    type: "booking_confirmed",
    title: "Booking Confirmed",
    message: "DJ Storm's booking at Paradiso has been confirmed by the promoter.",
    recipientId: "agency-001",
    recipientType: "agency",
    read: false,
    actionUrl: "/demo/agency/bookings",
    createdAt: "2026-01-20T10:30:00Z",
  },
  {
    id: "notif-002",
    type: "contract_signed",
    title: "Contract Signed",
    message: "Summer Sounds Festival contract has been signed by all parties.",
    recipientId: "agency-001",
    recipientType: "agency",
    read: true,
    actionUrl: "/demo/agency/contracts",
    createdAt: "2025-10-10T14:00:00Z",
  },
  {
    id: "notif-003",
    type: "advancing_update",
    title: "Advancing Update",
    message: "Technical rider received for DJ Storm at Summer Sounds Festival.",
    recipientId: "artist-001",
    recipientType: "artist",
    read: false,
    actionUrl: "/demo/artist/schedule",
    createdAt: "2026-01-15T09:00:00Z",
  },
  {
    id: "notif-004",
    type: "release_scheduled",
    title: "Release Scheduled",
    message: "Your single 'Echoes' is scheduled for release on February 15, 2026.",
    recipientId: "artist-002",
    recipientType: "artist",
    read: false,
    actionUrl: "/demo/artist/releases",
    createdAt: "2026-01-18T11:00:00Z",
  },
  {
    id: "notif-005",
    type: "invoice_sent",
    title: "Invoice Sent",
    message: "Invoice INV-2026-001 has been sent to ID&T.",
    recipientId: "agency-001",
    recipientType: "agency",
    read: false,
    actionUrl: "/demo/agency/finance",
    createdAt: "2026-01-20T12:00:00Z",
  },
];

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================

export function getArtistById(id: string): Artist | undefined {
  return DEMO_ARTISTS.find(a => a.id === id);
}

export function getBookingsByArtist(artistId: string): Booking[] {
  return DEMO_BOOKINGS.filter(b => b.artistId === artistId);
}

export function getBookingsByAgency(agencyId: string): Booking[] {
  return DEMO_BOOKINGS.filter(b => b.agencyId === agencyId);
}

export function getContractsByArtist(artistId: string): Contract[] {
  return DEMO_CONTRACTS.filter(c => c.artistId === artistId);
}

export function getInvoicesByArtist(artistId: string): Invoice[] {
  return DEMO_INVOICES.filter(i => i.artistId === artistId);
}

export function getReleasesByArtist(artistId: string): Release[] {
  return DEMO_RELEASES.filter(r => r.artistId === artistId);
}

export function getReleasesByLabel(labelId: string): Release[] {
  return DEMO_RELEASES.filter(r => r.labelId === labelId);
}

export function getSocialPostsByArtist(artistId: string): SocialPost[] {
  return DEMO_SOCIAL_POSTS.filter(p => p.artistId === artistId);
}

export function getNotificationsByRecipient(recipientId: string): Notification[] {
  return DEMO_NOTIFICATIONS.filter(n => n.recipientId === recipientId);
}

export function formatCurrency(amount: number, currency: string = "EUR"): string {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency,
    minimumFractionDigits: 0,
  }).format(amount);
}

export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export function formatDateTime(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

// =============================================================================
// WORKFLOW STATE MACHINE
// =============================================================================

export const BOOKING_WORKFLOW = {
  inquiry: { next: ["negotiating", "cancelled"], label: "Inquiry" },
  negotiating: { next: ["contract_sent", "cancelled"], label: "Negotiating" },
  contract_sent: { next: ["pending", "cancelled"], label: "Contract Sent" },
  pending: { next: ["confirmed", "cancelled"], label: "Pending" },
  confirmed: { next: ["cancelled"], label: "Confirmed" },
  cancelled: { next: [], label: "Cancelled" },
};

export const CONTRACT_WORKFLOW = {
  draft: { next: ["sent", "cancelled"], label: "Draft" },
  sent: { next: ["awaiting_signature", "cancelled"], label: "Sent" },
  awaiting_signature: { next: ["signed", "expired", "cancelled"], label: "Awaiting Signature" },
  signed: { next: [], label: "Signed" },
  expired: { next: ["sent"], label: "Expired" },
  cancelled: { next: [], label: "Cancelled" },
};

export const INVOICE_WORKFLOW = {
  draft: { next: ["sent", "cancelled"], label: "Draft" },
  sent: { next: ["pending"], label: "Sent" },
  pending: { next: ["paid", "overdue"], label: "Pending" },
  paid: { next: [], label: "Paid" },
  overdue: { next: ["paid"], label: "Overdue" },
  cancelled: { next: [], label: "Cancelled" },
};

export const ADVANCING_STEPS = [
  { id: "contract", name: "Contract", order: 1 },
  { id: "technical_rider", name: "Technical Rider", order: 2 },
  { id: "travel", name: "Travel Info", order: 3 },
  { id: "hospitality", name: "Hospitality", order: 4 },
  { id: "guestlist", name: "Guestlist", order: 5 },
];

// =============================================================================
// BELGIUM COMPANY INFO (for legal pages)
// =============================================================================

export const COMPANY_INFO = {
  name: "VAYO BV",
  legalName: "VAYO BV",
  address: {
    street: "Koningsstraat 123",
    city: "Brussel",
    postalCode: "1000",
    country: "België",
  },
  vatNumber: "BE0123.456.789",
  companyNumber: "0123.456.789",
  email: {
    general: "info@vayo.io",
    support: "support@vayo.io",
    privacy: "privacy@vayo.io",
    legal: "legal@vayo.io",
    billing: "billing@vayo.io",
  },
  phone: "+32 2 123 45 67",
  bankAccount: {
    name: "VAYO BV",
    iban: "BE12 3456 7890 1234",
    bic: "GEBABEBB",
    bank: "BNP Paribas Fortis",
  },
};
