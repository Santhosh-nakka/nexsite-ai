import { motion } from "framer-motion";

import AboutSection from "./AboutSection";
import ProjectsSection from "./ProjectsSection";
import ServicesSection from "./ServicesSection";
import TestimonialsSection from "./TestimonialsSection";
import PricingSection from "./PricingSection";
import FAQSection from "./FAQSection";
import CallToActionSection from "./CallToActionSection";
import StatsSection from "./StatsSection";
import EditorialSection from "./EditorialSection";
import MagazineGrid from "./MagazineGrid";

function SectionRenderer({ section }) {
  const renderSection = () => {
    // Support both old string format and new structured AI format
    const sectionType = typeof section === "string" ? section : section.type;
    const sectionProps = typeof section === "string" ? {} : (section.props || {});

    if (sectionType === "about") {
      return <AboutSection {...sectionProps} />;
    }
    if (sectionType === "projects") {
      return <ProjectsSection {...sectionProps} />;
    }
    if (sectionType === "services") {
      return <ServicesSection {...sectionProps} />;
    }
    if (sectionType === "testimonials") {
      return <TestimonialsSection {...sectionProps} />;
    }
    if (sectionType === "pricing") {
      return <PricingSection {...sectionProps} />;
    }
    if (sectionType === "faq") {
      return <FAQSection {...sectionProps} />;
    }
    if (sectionType === "cta") {
      return <CallToActionSection {...sectionProps} />;
    }
    if (sectionType === "stats") {
      return <StatsSection {...sectionProps} />;
    }
    if (sectionType === "editorial") {
      return <EditorialSection {...sectionProps} />;
    }
    if (sectionType === "magazine") {
      return <MagazineGrid {...sectionProps} />;
    }
    return null;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{ marginBottom: "20px" }}
    >
      {renderSection()}
    </motion.div>
  );
}

export default SectionRenderer;