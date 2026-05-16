import { motion } from "framer-motion";

function HeroSection({
  title,
  subtitle,
}) {
  return (
    <motion.section
      initial={{
        opacity: 0,
        y: 40,
      }}

      animate={{
        opacity: 1,
        y: 0,
      }}

      transition={{
        duration: 0.8,
      }}

      style={{
        padding: "100px 40px",

        borderRadius: "36px",

        background:
          "linear-gradient(135deg,rgba(15,23,42,0.72),rgba(30,41,59,0.45))",

        backdropFilter: "blur(22px)",

        border:
          "1px solid rgba(255,255,255,0.06)",

        marginBottom: "50px",

        boxShadow:
          "0 25px 60px rgba(0,0,0,0.35)",

        transform:
          "perspective(1200px) rotateX(2deg)",

        position: "relative",

        overflow: "hidden",

        textAlign: "center",
      }}
    >
      <div
        style={{
          position: "absolute",

          width: "350px",

          height: "350px",

          background:
            "rgba(168,85,247,0.18)",

          borderRadius: "50%",

          filter: "blur(120px)",

          top: "-120px",

          right: "-120px",
        }}
      />

      <div
        style={{
          position: "absolute",

          width: "280px",

          height: "280px",

          background:
            "rgba(37,99,235,0.16)",

          borderRadius: "50%",

          filter: "blur(110px)",

          bottom: "-120px",

          left: "-120px",
        }}
      />

      <motion.h1
        initial={{
          opacity: 0,
          scale: 0.9,
        }}

        animate={{
          opacity: 1,
          scale: 1,
        }}

        transition={{
          delay: 0.2,
          duration: 0.7,
        }}

        style={{
          position: "relative",

          zIndex: 1,

          fontSize: "72px",

          fontWeight: "800",

          lineHeight: "1.1",

          letterSpacing: "-2px",

          marginBottom: "24px",

          background:
            "linear-gradient(90deg,#ffffff,#c084fc,#60a5fa)",

          WebkitBackgroundClip: "text",

          WebkitTextFillColor:
            "transparent",

          textShadow:
            "0 0 40px rgba(168,85,247,0.35)",
        }}
      >
        {title}
      </motion.h1>

      <motion.p
        initial={{
          opacity: 0,
          y: 20,
        }}

        animate={{
          opacity: 1,
          y: 0,
        }}

        transition={{
          delay: 0.4,
          duration: 0.7,
        }}

        style={{
          fontSize: "24px",

          maxWidth: "760px",

          marginInline: "auto",

          position: "relative",

          zIndex: 1,

          lineHeight: "1.8",

          color:
            "rgba(255,255,255,0.82)",
        }}
      >
        {subtitle}
      </motion.p>

      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}

        animate={{
          opacity: 1,
          y: 0,
        }}

        transition={{
          delay: 0.6,
          duration: 0.7,
        }}

        style={{
          marginTop: "35px",

          position: "relative",

          zIndex: 1,
        }}
      >
        <button
          style={{
            padding: "14px 28px",

            border: "none",

            borderRadius: "14px",

            background:
              "linear-gradient(135deg,#9333ea,#2563eb)",

            color: "white",

            fontSize: "16px",

            fontWeight: "700",

            cursor: "pointer",

            boxShadow:
              "0 10px 30px rgba(147,51,234,0.35)",

            transition: "0.3s",
          }}
        >
          Explore AI Builder
        </button>
      </motion.div>
    </motion.section>
  );
}

export default HeroSection;