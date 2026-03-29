import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BrandStatement from "@/components/BrandStatement";
import Specs from "@/components/Specs";
import Amenities from "@/components/Amenities";
import Gallery from "@/components/Gallery";
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
      
      {/* Heritage & Brand Highlights */}
      <BrandStatement />
      
      {/* Lifestyle & Architecture Narrative */}
      <Amenities />
      
      {/* Visual Archive */}
      <Gallery />
      
      {/* Technical Layouts - Gated High-Res Unlock */}
      <FloorPlans />
      
      {/* Refined Technical Finishes */}
      <Specs />

      <Footer />
    </main>
  );
}
