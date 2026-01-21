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
      <main className="pt-24">
        {/* Hero Section */}
        <section className="section relative overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-30" />
          <div className="hero-glow top-0 left-1/4 opacity-30" />
          
          <div className="container mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="badge mb-4">For Performing Arts</span>
                <h1 className="text-4xl md:text-5xl font-bold text-[var(--vayo-white)] mb-6" style={{ fontFamily: "var(--font-syne)" }}>
                  Elevate Your <span className="text-gradient">Performing Arts</span> Agency
                </h1>
                <p className="text-lg text-[var(--vayo-gray-400)] mb-8">
                  Whether you represent theaters, dance companies, or orchestras, 
                  VAYO provides specialized tools for the performing arts industry.
                </p>
                <ul className="space-y-3 mb-8">
                  {features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-[var(--vayo-accent)]/20 flex items-center justify-center">
                        <Check className="w-3 h-3 text-[var(--vayo-accent)]" />
                      </div>
                      <span className="text-[var(--vayo-gray-300)]">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/login" className="btn-primary">
                    Start Free Trial
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link href="/pricing" className="btn-secondary">
                    View Pricing
                  </Link>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-emerald-500/30 to-teal-500/30 blur-xl opacity-50" />
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[var(--vayo-gray-800)]">
                  <img 
                    src="/images/Afbeelding9.JPG" 
                    alt="Performing arts stage"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--vayo-black)]/60 to-transparent" />
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
