import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Ecosystem from "@/components/Ecosystem";
import Stats from "@/components/Stats";
import Features from "@/components/Features";
import MobileApp from "@/components/MobileApp";
import Comparison from "@/components/Comparison";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Ecosystem />
        <Stats />
        <Features />
        <MobileApp />
        <Comparison />
        <Testimonials />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
