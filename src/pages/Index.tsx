import Sidebar from "@/components/Sidebar";
import HeroSection from "@/components/HeroSection";
import MetricsSection from "@/components/MetricsSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="md:flex md:items-start min-h-screen">
      <Sidebar />
      <main className="flex-1 min-w-0">
        <HeroSection />
        <MetricsSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <EducationSection />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
};

export default Index;
