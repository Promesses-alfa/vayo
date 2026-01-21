import type { Metadata } from "next";
import { DM_Sans, Syne } from "next/font/google";
import "./globals.css";
import ClientWrapper from "@/components/ClientWrapper";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  title: "VAYO | The Future of Artist Booking",
  description: "VAYO is the all-in-one platform for artist booking agencies. Manage bookings, contracts, finances, and tours in one powerful system. Built for modern agencies.",
  keywords: ["artist booking", "booking agency", "artist management", "tour management", "music industry", "concert booking", "DJ booking", "event management"],
  authors: [{ name: "VAYO" }],
  openGraph: {
    title: "VAYO | The Future of Artist Booking",
    description: "The all-in-one platform for artist booking agencies. Manage everything in one powerful system.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "VAYO | The Future of Artist Booking",
    description: "The all-in-one platform for artist booking agencies.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${dmSans.variable} ${syne.variable} antialiased`}>
        <ClientWrapper>
          {children}
        </ClientWrapper>
      </body>
    </html>
  );
}
