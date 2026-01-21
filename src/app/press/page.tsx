import Header from "@/components/Header";
import Footer from "@/components/Footer";
import UnderConstruction from "@/components/UnderConstruction";

export default function PressPage() {
  return (
    <>
      <Header />
      <UnderConstruction 
        title="Press Kit"
        description="Download our brand assets, logos, and press materials. For media inquiries, contact press@vayo.io"
      />
      <Footer />
    </>
  );
}
