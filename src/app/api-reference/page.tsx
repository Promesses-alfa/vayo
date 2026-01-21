import Header from "@/components/Header";
import Footer from "@/components/Footer";
import UnderConstruction from "@/components/UnderConstruction";

export default function ApiReferencePage() {
  return (
    <>
      <Header />
      <UnderConstruction 
        title="API Reference"
        description="Build custom integrations with our REST API. Full documentation with examples in multiple languages."
      />
      <Footer />
    </>
  );
}
