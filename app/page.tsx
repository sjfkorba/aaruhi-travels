import Navbar from "../components/navbar";
import Hero from "../components/Hero";
import PopularRoutes from "../components/PopularRoutes";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import FloatingButtons from "../components/FloatingButtons";
import TaxiServices from "@/components/TaxiServices";
import PremiumFleet from "@/components/PremiumFleet";
import PromotionPopup from "@/components/PromotionPopup";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#FFFAF5]">
      <Navbar />
      <Hero />
      <PopularRoutes />
      <TaxiServices/>
      <PremiumFleet/>
      <WhyChooseUs />
      {/* <Testimonials /> */}
      <Footer />
      <PromotionPopup/>
    </main>
  );
}