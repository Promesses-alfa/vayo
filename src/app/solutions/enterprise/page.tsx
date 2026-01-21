import Header from "@/components/Header";
import Footer from "@/components/Footer";
import UnderConstruction from "@/components/UnderConstruction";

export default function EnterprisePage() {
  return (
    <>
      <Header />
      <UnderConstruction 
        title="Enterprise Solutions"
        description="Custom solutions for large agencies, major labels, and festival groups. Dedicated support, custom integrations, and enterprise-grade security."
      />
      <Footer />
    </>
  );
}
