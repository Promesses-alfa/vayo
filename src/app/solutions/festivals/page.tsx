import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Check, ArrowRight, Calendar, Users, Music, DollarSign, Clock, GripVertical } from "lucide-react";
import Link from "next/link";

const features = [
  "Drag & drop lineup builder",
  "Artist database with search & filters",
  "Multi-stage scheduling",
  "Budget tracking & artist fees",
  "Direct artist/agency communication",
  "Timetable export & publishing",
];

const capabilities = [
  {
    icon: GripVertical,
    title: "Drag & Drop Lineup",
    description: "Build your perfect lineup by dragging artists directly onto stage slots. Visual scheduling made simple."
  },
  {
    icon: Users,
    title: "Artist Database",
    description: "Search our database of DJs and artists. Filter by genre, fee range, availability, and more."
  },
  {
    icon: Calendar,
    title: "Stage Scheduling",
    description: "Manage multiple stages with detailed timetables. Avoid conflicts and optimize set times."
  },
  {
    icon: DollarSign,
    title: "Budget Management",
    description: "Track artist fees, production costs, and overall budget in real-time."
  },
  {
    icon: Music,
    title: "Artist Advancing",
    description: "Collect riders, technical requirements, and travel details from confirmed artists."
  },
  {
    icon: Clock,
    title: "Timetable Export",
    description: "Export professional timetables for print, web, or app integration."
  }
];

const testimonial = {
  quote: "VAYO's lineup builder saved us countless hours. Drag and drop made scheduling our 5-stage festival a breeze.",
  author: "Emma Rodriguez",
  role: "Programming Director, SunWave Festival",
};

export default function FestivalsPage() {
  return (
    <>
      <Header />
      <main className="pt-24 bg-white min-h-screen">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-pink-50 text-pink-600 text-sm font-bold">
                  For Festivals
                </span>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: "var(--font-syne)" }}>
                  Plan Unforgettable <span className="text-[#00d4aa]">Festival Experiences</span>
                </h1>
                <p className="text-lg text-gray-500 mb-8 font-medium">
                  From intimate gatherings to massive multi-stage events, VAYO gives you 
                  the tools to curate lineups, manage budgets, and coordinate artists effortlessly.
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
                  <Link href="/demo/festival" className="inline-flex items-center justify-center px-6 py-3 bg-gray-100 text-gray-900 font-bold rounded-xl hover:bg-gray-200 transition-all">
                    View Demo
                  </Link>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-pink-200/50 to-rose-200/50 blur-xl" />
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border-2 border-gray-100 shadow-2xl">
                  <img 
                    src="/images/Afbeelding1.jpg" 
                    alt="Festival crowd"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Capabilities Grid */}
            <div className="mt-24">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center" style={{ fontFamily: "var(--font-syne)" }}>
                Everything You Need to <span className="text-[#00d4aa]">Run Your Festival</span>
              </h2>
              <p className="text-gray-500 text-center mb-12 max-w-2xl mx-auto font-medium">
                Professional festival management tools trusted by organizers worldwide.
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {capabilities.map((cap) => (
                  <div key={cap.title} className="bg-white border-2 border-gray-100 rounded-2xl p-6 hover:border-pink-200 hover:shadow-lg transition-all">
                    <div className="w-12 h-12 rounded-xl bg-pink-50 flex items-center justify-center mb-4">
                      <cap.icon className="w-6 h-6 text-pink-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{cap.title}</h3>
                    <p className="text-gray-500 text-sm font-medium">{cap.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonial */}
            <div className="mt-20 p-8 rounded-3xl bg-gradient-to-br from-pink-50 to-rose-50 border-2 border-pink-100">
              <p className="text-xl text-gray-900 mb-4 font-medium">&ldquo;{testimonial.quote}&rdquo;</p>
              <p className="text-pink-600 font-bold">{testimonial.author}</p>
              <p className="text-sm text-gray-500 font-medium">{testimonial.role}</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
