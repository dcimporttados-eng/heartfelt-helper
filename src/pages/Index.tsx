import HeroSection from "@/components/landing/HeroSection";
import MathSection from "@/components/landing/MathSection";
import ValueStack from "@/components/landing/ValueStack";
import ForWhoSection from "@/components/landing/ForWhoSection";
import HowItWorks from "@/components/landing/HowItWorks";
import GuaranteeSection from "@/components/landing/GuaranteeSection";
import FaqSection from "@/components/landing/FaqSection";
import FinalCta from "@/components/landing/FinalCta";
import Footer from "@/components/landing/Footer";

const Index = () => (
  <main className="min-h-screen overflow-x-hidden">
    <HeroSection />
    <MathSection />
    <ValueStack />
    <ForWhoSection />
    <HowItWorks />
    <GuaranteeSection />
    <FaqSection />
    <FinalCta />
    <Footer />
  </main>
);

export default Index;
