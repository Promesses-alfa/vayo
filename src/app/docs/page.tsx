import Header from "@/components/Header";
import Footer from "@/components/Footer";
import UnderConstruction from "@/components/UnderConstruction";

export default function DocumentationPage() {
  return (
    <>
      <Header />
      <UnderConstruction 
        title="Documentation"
        description="Comprehensive guides, tutorials, and API documentation to help you get the most out of VAYO."
      />
      <Footer />
    </>
  );
}
