import HeroSection from "@/components/HeroSection";
import About from "@/components/About";
import Project from "@/components/Project";
import Contact from "@/components/Contact";
import ScrollAnimationAbout from "@/components/ScrollAnimationAbout";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <About />
      <Project />
      <ScrollAnimationAbout />
      <Contact />
      <Footer />
    </div>
  );
}
