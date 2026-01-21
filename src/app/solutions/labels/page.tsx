import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Check, ArrowRight, Disc3, TrendingUp, Users, FileText, Share2, BarChart3 } from "lucide-react";
import Link from "next/link";

const features = [
  "Artist roster management & development",
  "Release planning & distribution tracking",
  "Royalty & revenue analytics",
  "Contract & rights management",
  "Spotify & streaming analytics integration",
  "Marketing & promotion tools",
];

const capabilities = [
  {
    icon: Disc3,
    title: "Release Management",
    description: "Plan, schedule, and track releases across all platforms. Manage pre-saves, release links, and promotional campaigns."
  },
  {
    icon: TrendingUp,
    title: "Streaming Analytics",
    description: "Connect Spotify, Apple Music, and more. Track plays, saves, and playlist additions in real-time."
  },
  {
    icon: Users,
    title: "Artist Development",
    description: "Manage your roster with detailed profiles, career milestones, and growth tracking."
  },
  {
    icon: FileText,
    title: "Contract Management",
    description: "Digital contracts with e-signature support. Track rights, royalties, and obligations."
  },
  {
    icon: Share2,
    title: "Social Media Planning",
    description: "Coordinate social content across your roster. Schedule posts and track engagement."
  },
  {
    icon: BarChart3,
    title: "Revenue Tracking",
    description: "Comprehensive royalty tracking, splits calculation, and financial reporting."
  }
];

const testimonial = {
  quote: "VAYO has streamlined our entire operation. From release planning to royalty tracking, everything is in one place.",
  author: "Marcus Chen",
  role: "A&R Director, Horizon Records",
};

export default function LabelsPage() {
  return (
    <>
      <Header />
      <main className="pt-24 bg-white min-h-screen">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-violet-50 text-violet-600 text-sm font-bold">
                  For Record Labels
                </span>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: "var(--font-syne)" }}>
                  The Complete Platform for <span className="text-[#00d4aa]">Record Labels</span>
                </h1>
                <p className="text-lg text-gray-500 mb-8 font-medium">
                  Manage your roster, releases, and revenue all in one place. 
                  From indie labels to major operations, VAYO scales with your ambitions.
                </p>
                <ul className="space-y-3 mb-8">
                  {features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#00d4aa]/10 flex items-center justify-center">
                        <Check className="w-4 h-4 text-[#00d4aa]" />
                      </div>
                      <span className="text-gray-600 font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/login" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#00d4aa] text-white font-bold rounded-xl hover:bg-[#00b894] transition-all shadow-lg shadow-[#00d4aa]/20">
                    Start Free Trial
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link href="/demo/label" className="inline-flex items-center justify-center px-6 py-3 bg-gray-100 text-gray-900 font-bold rounded-xl hover:bg-gray-200 transition-all">
                    View Demo
                  </Link>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-violet-200/50 to-purple-200/50 blur-xl" />
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border-2 border-gray-100 shadow-2xl">
                  <img 
                    src="/images/Afbeelding3.jpg" 
                    alt="Record label studio"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Capabilities Grid */}
            <div className="mt-24">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center" style={{ fontFamily: "var(--font-syne)" }}>
                Everything You Need to <span className="text-[#00d4aa]">Run Your Label</span>
              </h2>
              <p className="text-gray-500 text-center mb-12 max-w-2xl mx-auto font-medium">
                From A&R to accounting, VAYO provides all the tools modern labels need.
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {capabilities.map((cap) => (
                  <div key={cap.title} className="bg-white border-2 border-gray-100 rounded-2xl p-6 hover:border-violet-200 hover:shadow-lg transition-all">
                    <div className="w-12 h-12 rounded-xl bg-violet-50 flex items-center justify-center mb-4">
                      <cap.icon className="w-6 h-6 text-violet-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{cap.title}</h3>
                    <p className="text-gray-500 text-sm font-medium">{cap.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonial */}
            <div className="mt-20 p-8 rounded-3xl bg-gradient-to-br from-violet-50 to-purple-50 border-2 border-violet-100">
              <p className="text-xl text-gray-900 mb-4 font-medium">&ldquo;{testimonial.quote}&rdquo;</p>
              <p className="text-violet-600 font-bold">{testimonial.author}</p>
              <p className="text-sm text-gray-500 font-medium">{testimonial.role}</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
