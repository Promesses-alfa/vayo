import Header from "@/components/Header";
import Footer from "@/components/Footer";
import UnderConstruction from "@/components/UnderConstruction";

export default function ChangelogPage() {
  return (
    <>
      <Header />
      <UnderConstruction 
        title="Changelog"
        description="Stay up to date with all the latest features, improvements, and fixes we're shipping to VAYO."
      />
      <Footer />
    </>
  );
}
