import Header from "@/components/Header";
import Footer from "@/components/Footer";
import UnderConstruction from "@/components/UnderConstruction";

export default function BlogPage() {
  return (
    <>
      <Header />
      <UnderConstruction 
        title="Blog"
        description="Insights, tips, and stories from the music industry. Learn how agencies, artists, labels, and festivals are transforming their workflows."
      />
      <Footer />
    </>
  );
}
