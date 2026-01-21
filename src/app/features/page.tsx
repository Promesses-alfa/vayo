import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Calendar,
  FileText,
  DollarSign,
  Truck,
  Users,
  Check,
  ArrowRight,
  LucideIcon,
} from "lucide-react";
import Link from "next/link";

interface Feature {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  benefits: string[];
  color: string;
  media: { type: "video" | "image"; src: string };
}

const features: Feature[] = [
  {
    id: "booking",
    icon: Calendar,
    title: "Smart Booking Management",
    description: "Streamline your entire booking workflow from inquiry to confirmation.",
    benefits: [
      "Automated booking confirmations",
      "Real-time availability checking",
      "Smart calendar sync across all platforms",
      "AI-powered booking suggestions",
      "Conflict detection and resolution",
      "Custom booking forms for your website",
    ],
    color: "from-orange-500 to-amber-500",
    media: { type: "video", src: "/videos/Vid1.mp4" },
  },
  {
    id: "contracts",
    icon: FileText,
    title: "Contract & Document Hub",
    description: "Create, send, and manage contracts with ease. E-signatures included.",
    benefits: [
      "Unlimited e-signatures included",
      "Visual template builder",
      "Auto-merge riders with contracts",
      "Version history and tracking",
      "Multi-language support",
      "Automated reminder system",
    ],
    color: "from-blue-500 to-cyan-500",
    media: { type: "image", src: "/images/Afbeelding3.jpg" },
  },
  {
    id: "finance",
    icon: DollarSign,
    title: "Financial Tools",
    description: "Complete financial management from invoicing to revenue forecasting.",
    benefits: [
      "Professional invoice generation",
      "Real-time currency conversion",
      "Revenue forecasting & analytics",
      "Commission tracking",
      "QuickBooks & Xero integration",
      "Automated payment reminders",
    ],
    color: "from-emerald-500 to-teal-500",
    media: { type: "video", src: "/videos/Vid2.mp4" },
  },
  {
    id: "tours",
    icon: Truck,
    title: "Tour Logistics",
    description: "Plan and execute tours with precision. Every detail, organized.",
    benefits: [
      "Flight and train booking integration",
      "Hotel and transport management",
      "Interactive PDF itineraries",
      "Real-time delay notifications",
      "Carbon footprint tracking",
      "Budget tracking per tour",
    ],
    color: "from-purple-500 to-pink-500",
    media: { type: "image", src: "/images/Afbeelding4.JPG" },
  },
  {
    id: "team",
    icon: Users,
    title: "Team Collaboration",
    description: "Work together seamlessly with your entire team and artists.",
    benefits: [
      "Real-time collaboration",
      "In-app messaging system",
      "Task management with Kanban",
      "Artist & crew portals",
      "Role-based permissions",
      "Activity feeds and notifications",
    ],
    color: "from-red-500 to-orange-500",
    media: { type: "image", src: "/images/Afbeelding6.jpg" },
  },
];

export default function FeaturesPage() {
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
              <source src="/videos/Vid3.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-[var(--vayo-black)]/80" />
          </div>
          <div className="absolute inset-0 bg-grid opacity-30 z-[1]" />
          <div className="hero-glow top-0 left-1/4 opacity-30 z-[1]" />
          
          <div className="container mx-auto relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <span className="badge mb-4">Features</span>
              <h1 className="text-4xl md:text-6xl font-bold text-[var(--vayo-white)] mb-6" style={{ fontFamily: "var(--font-syne)" }}>
                Everything You Need to <span className="text-gradient">Scale Your Agency</span>
              </h1>
              <p className="text-lg text-[var(--vayo-gray-400)] mb-8">
                From booking management to financial reporting, VAYO provides all the tools 
                you need to run a successful artist booking agency.
              </p>
              <Link href="/login" className="btn-primary">
                Start Free Trial
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Full-width Feature Image */}
        <section className="relative h-[300px] overflow-hidden">
          <img 
            src="/images/Afbeelding5.JPG" 
            alt="Festival atmosphere"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--vayo-black)] via-transparent to-[var(--vayo-black)]" />
        </section>

        {/* Features */}
        <section className="section">
          <div className="container mx-auto">
            <div className="space-y-32">
              {features.map((feature, index) => (
                <div
                  key={feature.id}
                  id={feature.id}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6`}>
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-[var(--vayo-white)] mb-4" style={{ fontFamily: "var(--font-syne)" }}>
                      {feature.title}
                    </h2>
                    <p className="text-lg text-[var(--vayo-gray-400)] mb-8">
                      {feature.description}
                    </p>
                    <ul className="grid sm:grid-cols-2 gap-4">
                      {feature.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-[var(--vayo-accent)]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check className="w-3 h-3 text-[var(--vayo-accent)]" />
                          </div>
                          <span className="text-[var(--vayo-gray-300)]">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={`${index % 2 === 1 ? "lg:order-1" : ""} relative`}>
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.color} opacity-20`} />
                    <div className="relative aspect-video rounded-2xl overflow-hidden border border-[var(--vayo-gray-800)]">
                      {feature.media.type === "video" ? (
                        <video
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="w-full h-full object-cover"
                        >
                          <source src={feature.media.src} type="video/mp4" />
                        </video>
                      ) : (
                        <img 
                          src={feature.media.src} 
                          alt={feature.title}
                          className="w-full h-full object-cover"
                        />
                      )}
                      {/* Gradient overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-tr ${feature.color} opacity-10`} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA with Video */}
        <section className="section">
          <div className="container mx-auto">
            <div className="relative rounded-3xl overflow-hidden">
              {/* Video Background */}
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src="/videos/Vid4.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--vayo-black)]/90 via-[var(--vayo-accent)]/30 to-purple-500/30" />
              <div className="relative z-10 p-12 md:p-20 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-syne)" }}>
                  Ready to Transform Your Agency?
                </h2>
                <p className="text-[var(--vayo-gray-300)] max-w-xl mx-auto mb-8">
                  Join hundreds of agencies already using VAYO to streamline their operations.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/login" className="btn-primary">
                    Start Free Trial
                  </Link>
                  <Link href="/pricing" className="btn-secondary">
                    View Pricing
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
