import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Users, Globe, Heart, Zap } from "lucide-react";
import Link from "next/link";

const stats = [
  { label: "Active Agencies", value: "500+" },
  { label: "Artists Managed", value: "50K+" },
  { label: "Shows Booked", value: "2.5M+" },
  { label: "Countries", value: "45+" },
];

const values = [
  {
    icon: Heart,
    title: "Artist-First",
    description: "We build tools that put artists and their teams at the center of everything.",
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "We're constantly pushing boundaries to create the most powerful booking platform.",
  },
  {
    icon: Users,
    title: "Community",
    description: "We believe in the power of community and collaboration in the music industry.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Supporting agencies and artists across 45+ countries worldwide.",
  },
];

const team = [
  { name: "Fabian H.", role: "Creative Engine", image: "/images/Afbeelding3.jpg" },
  { name: "Ties H.", role: "Young Hansler", image: "/images/Afbeelding3.jpg" },
  { name: "Jaime H.", role: "Legal Bricker", image: "/images/Afbeelding3.jpg" },
  { name: "Didier H.", role: "Senior Pusher", image: "/images/Afbeelding3.jpg" },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-24">
        {/* Hero with Video Background */}
        <section className="section relative overflow-hidden">
          {/* Video Background */}
          <div className="absolute inset-0 z-0">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover opacity-20"
            >
              <source src="/videos/Vid6.MP4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-[var(--vayo-black)]/80" />
          </div>
          <div className="absolute inset-0 bg-grid opacity-30 z-[1]" />
          <div className="hero-glow top-0 left-1/4 opacity-30 z-[1]" />
          
          <div className="container mx-auto relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <span className="badge mb-4">About Us</span>
              <h1 className="text-4xl md:text-6xl font-bold text-[var(--vayo-white)] mb-6" style={{ fontFamily: "var(--font-syne)" }}>
                Building the Future of <span className="text-gradient">Artist Booking</span>
              </h1>
              <p className="text-lg text-[var(--vayo-gray-400)]">
                We&apos;re on a mission to empower booking agencies with the tools they need 
                to succeed in the modern music industry.
              </p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 border-y border-[var(--vayo-gray-800)]">
          <div className="container mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-3xl md:text-4xl font-bold text-gradient mb-2">{stat.value}</p>
                  <p className="text-[var(--vayo-gray-400)]">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Story with Video and Images */}
        <section className="section">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--vayo-white)] mb-6" style={{ fontFamily: "var(--font-syne)" }}>
                  Our Story
                </h2>
                <div className="space-y-4 text-[var(--vayo-gray-400)]">
                  <p>
                    VAYO was born out of frustration. As former booking agents ourselves, 
                    we experienced firsthand the chaos of managing artists with spreadsheets, 
                    scattered emails, and disconnected tools.
                  </p>
                  <p>
                    In 2020, we set out to build the platform we always wished existed — 
                    one that brings together everything an agency needs into a single, 
                    beautiful, and powerful system.
                  </p>
                  <p>
                    Today, VAYO powers hundreds of agencies worldwide, from boutique 
                    DJ agencies to major international booking operations. We&apos;re proud 
                    to be part of the music industry ecosystem and committed to helping 
                    agencies thrive.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-video rounded-2xl overflow-hidden border border-[var(--vayo-gray-800)]">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  >
                    <source src="/videos/Vid7.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="section bg-[var(--vayo-dark)]">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--vayo-white)] mb-4" style={{ fontFamily: "var(--font-syne)" }}>
                Our Values
              </h2>
              <p className="text-[var(--vayo-gray-400)] max-w-xl mx-auto">
                The principles that guide everything we do at VAYO.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="p-6 rounded-2xl bg-[var(--vayo-gray-900)] border border-[var(--vayo-gray-800)]"
                >
                  <div className="w-12 h-12 rounded-xl bg-[var(--vayo-accent)]/20 flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-[var(--vayo-accent)]" />
                  </div>
                  <h3 className="text-lg font-semibold text-[var(--vayo-white)] mb-2">{value.title}</h3>
                  <p className="text-sm text-[var(--vayo-gray-400)]">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Festival Image Banner */}
        <section className="relative h-[400px] overflow-hidden">
          <img 
            src="/images/Afbeelding5.JPG" 
            alt="Festival crowd"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--vayo-black)] via-transparent to-[var(--vayo-black)]/50" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-4xl md:text-6xl font-bold text-white drop-shadow-2xl" style={{ fontFamily: "var(--font-syne)" }}>
                Where <span className="text-gradient">Music</span> Happens
              </h2>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="section">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--vayo-white)] mb-4" style={{ fontFamily: "var(--font-syne)" }}>
                Meet the Team
              </h2>
              <p className="text-[var(--vayo-gray-400)] max-w-xl mx-auto">
                The passionate people behind VAYO.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member) => (
                <div key={member.name} className="text-center group">
                  {/* Profile Image with Black Bar Effect */}
                  <div className="relative w-32 h-32 mx-auto rounded-2xl overflow-hidden mb-4 border-2 border-[var(--vayo-gray-800)] group-hover:border-[var(--vayo-accent)] transition-colors">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all"
                    />
                    {/* Black bar over eyes effect */}
                    <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 h-6 bg-black" />
                  </div>
                  <h3 className="text-lg font-semibold text-[var(--vayo-white)]">{member.name}</h3>
                  <p className="text-sm text-[var(--vayo-accent)]">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA with Background Image */}
        <section className="section">
          <div className="container mx-auto">
            <div className="relative rounded-3xl overflow-hidden">
              {/* Background Image */}
              <img 
                src="/images/Afbeelding6.jpg" 
                alt="Stage with artists"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--vayo-black)]/90 via-[var(--vayo-black)]/70 to-[var(--vayo-black)]/90" />
              <div className="relative z-10 p-12 md:p-20 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-syne)" }}>
                  Join the VAYO Community
                </h2>
                <p className="text-gray-300 max-w-xl mx-auto mb-8">
                  Ready to transform how you manage your agency? Start your free trial today.
                </p>
                <Link href="/login" className="btn-primary">
                  Get Started Free
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
