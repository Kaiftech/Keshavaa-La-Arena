import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProjectMetrics from "@/components/ProjectMetrics";
import BrandStatement from "@/components/BrandStatement";
import Gallery from "@/components/Gallery";
import Amenities from "@/components/Amenities";
import FloorPlans from "@/components/FloorPlans";
import Footer from "@/components/Footer";
import Popup from "@/components/Popup";

export default function Home() {
  return (
    <main className="app-layout">
      {/* Essential Modern Pop-up - Triggered by user intent */}
      <Popup />
      
      <Header />
      
      {/* High-Impact Turquoise-Noir Hero */}
      <Hero />

      {/* Standalone Project Stats belt - Positioned 'under' the banner */}
      <ProjectMetrics />
      
      {/* Heritage & Brand Highlights - Short & Sweet Luxury Intro */}
      <BrandStatement />
      
      {/* Technical Layouts - Moved Up */}
      <FloorPlans />
      
      {/* Visual Archive (Gallery) */}
      <Gallery />
      
      {/* Curated Features & Location Map */}
      <Amenities />

      <Footer />
    </main>
  );
}
