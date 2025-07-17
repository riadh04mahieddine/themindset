import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import AdvantagesSection from "../components/AdvantagesSection";
import TestimonialsSection from "../components/TestimonialsSection";
import CtaSection from "../components/CtaSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-400 via-sky-800 to-gray-900">
      <div className="container mx-auto py-4 px-4">
        <Header />
      </div>
      <HeroSection />
      <FeaturesSection />
      <AdvantagesSection />
      <TestimonialsSection />
      <CtaSection />
      <Footer />
    </div>
  );
}
