import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";

const features = [
  "Complex production scheduling",
  "Cast and crew management",
  "Venue and theater coordination",
  "Rehearsal scheduling",
  "Production budget tracking",
  "Multi-show run management",
];

export default function PerformingArtsPage() {
  return (
    <>
      <Header />
      <main className="pt-24 bg-white min-h-screen">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-cyan-50 text-cyan-600 text-sm font-bold">
                  For Performing Arts
                </span>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: "var(--font-syne)" }}>
                  Elevate Your <span className="text-[#00d4aa]">Performing Arts</span> Agency
                </h1>
                <p className="text-lg text-gray-500 mb-8 font-medium">
                  Whether you represent theaters, dance companies, or orchestras, 
                  VAYO provides specialized tools for the performing arts industry.
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
                  <Link href="/pricing" className="inline-flex items-center justify-center px-6 py-3 bg-gray-100 text-gray-900 font-bold rounded-xl hover:bg-gray-200 transition-all">
                    View Pricing
                  </Link>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-cyan-200/50 to-blue-200/50 blur-xl" />
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border-2 border-gray-100 shadow-2xl">
                  <img 
                    src="/images/Afbeelding9.JPG" 
                    alt="Performing arts stage"
                    className="w-full h-full object-cover"
                  />
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
