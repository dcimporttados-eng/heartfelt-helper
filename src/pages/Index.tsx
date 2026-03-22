import HeroSection from "@/components/landing/HeroSection";
import MathSection from "@/components/landing/MathSection";
import ValueStack from "@/components/landing/ValueStack";
import ForWhoSection from "@/components/landing/ForWhoSection";
import HowItWorks from "@/components/landing/HowItWorks";
import GuaranteeSection from "@/components/landing/GuaranteeSection";
import FaqSection from "@/components/landing/FaqSection";
import FinalCta from "@/components/landing/FinalCta";
import Footer from "@/components/landing/Footer";

const Divider = () => <div className="section-divider mx-auto max-w-5xl px-4" />;

/** Ambient background orbs that persist across the full page */
const AmbientBackground = () => (
  <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
    {/* Top-center primary orb */}
    <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[1000px] h-[700px] bg-primary/5 rounded-full blur-[200px] animate-float-slow" />
    {/* Mid-right accent orb */}
    <div className="absolute top-[40%] right-[-10%] w-[600px] h-[600px] bg-accent/4 rounded-full blur-[160px] animate-float-medium" style={{ animationDelay: "-5s" }} />
    {/* Bottom-left primary orb */}
    <div className="absolute bottom-[10%] left-[-5%] w-[500px] h-[500px] bg-primary/4 rounded-full blur-[140px] animate-float-fast" style={{ animationDelay: "-3s" }} />
    {/* Subtle dot grid overlay */}
    <div
      className="absolute inset-0 opacity-[0.018]"
      style={{
        backgroundImage: "radial-gradient(hsl(var(--foreground)) 1px, transparent 1px)",
        backgroundSize: "40px 40px",
      }}
    />
  </div>
);

const Index = () => (
  <main className="relative min-h-screen overflow-x-hidden">
    <AmbientBackground />
    <div className="relative z-10">
      <HeroSection />
      <Divider />
      <MathSection />
      <Divider />
      <ValueStack />
      <Divider />
      <ForWhoSection />
      <Divider />
      <HowItWorks />
      <Divider />
      <GuaranteeSection />
      <Divider />
      <FaqSection />
      <FinalCta />
      <Footer />
    </div>
  </main>
);

export default Index;
