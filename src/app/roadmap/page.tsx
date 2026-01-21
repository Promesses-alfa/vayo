import Header from "@/components/Header";
import Footer from "@/components/Footer";
import UnderConstruction from "@/components/UnderConstruction";

export default function RoadmapPage() {
  return (
    <>
      <Header />
      <UnderConstruction 
        title="Product Roadmap"
        description="See what's coming next for VAYO. We're building the future of artist booking in public."
      />
      <Footer />
    </>
  );
}
