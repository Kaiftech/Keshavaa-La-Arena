import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LeadForm from "@/components/LeadForm";
import Specs from "@/components/Specs";
import Amenities from "@/components/Amenities";
import Gallery from "@/components/Gallery";
import FloorPlans from "@/components/FloorPlans";
import Footer from "@/components/Footer";
import Popup from "@/components/Popup";

export default function Home() {
  return (
    <div className="app-layout">
      <Popup />
      <div className="content-column">
        <Header />
        <Hero />
        <div className="main-content-wrapper">
          <Specs />
          <Gallery />
          <FloorPlans />
          <Amenities />
        </div>
        <Footer />
      </div>
      
      <aside className="form-column">
        <LeadForm />
      </aside>
      {/* Invisible Grid Reservation to protect content from sliding behind form */}
      <div className="grid-reservation mobile-hide"></div>
    </div>
  );
}
