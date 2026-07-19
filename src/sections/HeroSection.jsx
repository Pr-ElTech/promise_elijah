import HeroText from "../components/HeroText";
import HeroImage from "../components/HeroImage";
import CTAButtons from "../components/CTAButtons";
import FloatingCard from "../components/FloatingCard";

import heroBg from "../assets/image/hero-bg.png";

const HeroSection = () => {
  return (
    <section id="about" className="relative overflow-hidden bg-[#050816]">
      {/* Background */}
      <div
        className="absolute inset-0 opacity-20 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroBg})`,
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050816]/40 to-[#050816]" />

      {/* Content */}
      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-between gap-20 px-6 pt-36 pb-20 lg:flex-row lg:px-10">
        {/* Left */}

        <div className="flex-1">
          <HeroText />

          <CTAButtons />
        </div>

        {/* Right */}

        <div className="relative flex flex-1 justify-center">
          <HeroImage />

          <FloatingCard />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
