import Navbar from "../components/navbar";
import Hero from "../components/Hero";
import PopularRoutes from "../components/PopularRoutes";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import FloatingButtons from "../components/FloatingButtons";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Navigation */}
      <Navbar />

      {/* Hero + Fare Calculator */}
      <Hero />

      {/* Popular Routes */}
      <PopularRoutes />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Customer Reviews */}
      <Testimonials />

      {/* Footer */}
      <Footer />

      {/* Sticky Conversion Buttons */}
      <FloatingButtons />
    </main>
  );
}