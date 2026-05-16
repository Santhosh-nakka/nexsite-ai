import { motion } from "framer-motion";

import AboutSection from "./AboutSection";
import ProjectsSection from "./ProjectsSection";
import ServicesSection from "./ServicesSection";

function SectionRenderer({
  section,
}) {
  const cardStyle = {
    flex: "1 1 320px",

    padding: "35px",

    borderRadius: "28px",

    background:
      "rgba(255,255,255,0.03)",

    backdropFilter: "blur(20px)",

    border:
      "1px solid rgba(255,255,255,0.08)",

    boxShadow:
      "0 15px 40px rgba(0,0,0,0.25)",

    cursor: "pointer",

    position: "relative",

    overflow: "hidden",
  };

  const renderSection = () => {
    if (section === "about") {
      return <AboutSection />;
    }

    if (section === "projects") {
      return <ProjectsSection />;
    }

    if (section === "services") {
      return <ServicesSection />;
    }

    return null;
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}

      whileInView={{
        opacity: 1,
        y: 0,
      }}

      whileHover={{
        y: -10,
        scale: 1.02,
      }}

      transition={{
        duration: 0.5,
      }}

      style={cardStyle}
    >
      <div
        style={{
          position: "absolute",

          width: "220px",

          height: "220px",

          background:
            "rgba(168,85,247,0.12)",

          filter: "blur(90px)",

          top: "-80px",

          right: "-80px",

          borderRadius: "50%",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 1,
        }}
      >
        {renderSection()}
      </div>
    </motion.div>
  );
}

export default SectionRenderer;