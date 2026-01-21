import Header from "@/components/Header";
import Footer from "@/components/Footer";
import UnderConstruction from "@/components/UnderConstruction";

export default function IntegrationsPage() {
  return (
    <>
      <Header />
      <UnderConstruction 
        title="Integrations"
        description="Connect VAYO with your favorite tools. QuickBooks, Xero, Google Calendar, Spotify, and 50+ more integrations coming soon."
      />
      <Footer />
    </>
  );
}
