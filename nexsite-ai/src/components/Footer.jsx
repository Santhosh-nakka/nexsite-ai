import {
  FaGithub,
  FaLinkedin,
  FaGlobe,
} from "react-icons/fa";

function Footer() {
  return (
    <footer
      style={{
        marginTop: "50px",

        padding: "35px 25px",

        borderRadius: "28px",

        background:
          "linear-gradient(135deg,rgba(15,23,42,0.72),rgba(30,41,59,0.58))",

        backdropFilter: "blur(18px)",

        textAlign: "center",

        border:
          "1px solid rgba(255,255,255,0.06)",

        boxShadow:
          "0 12px 35px rgba(0,0,0,0.25)",

        position: "relative",

        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",

          width: "240px",

          height: "240px",

          background:
            "rgba(168,85,247,0.12)",

          borderRadius: "50%",

          filter: "blur(100px)",

          top: "-100px",

          right: "-100px",
        }}
      />

      <h2
        style={{
          fontSize: "32px",

          marginBottom: "12px",

          fontWeight: "800",

          background:
            "linear-gradient(90deg,#c084fc,#60a5fa)",

          WebkitBackgroundClip: "text",

          WebkitTextFillColor:
            "transparent",

          position: "relative",

          zIndex: 1,
        }}
      >
        NexSite AI
      </h2>

      <p
        style={{
          color:
            "rgba(255,255,255,0.75)",

          fontSize: "16px",

          marginBottom: "24px",

          position: "relative",

          zIndex: 1,
        }}
      >
        AI Powered Website Builder
        with futuristic UI & smart
        generation system.
      </p>

      <div
        style={{
          display: "flex",

          justifyContent: "center",

          gap: "18px",

          marginBottom: "25px",

          position: "relative",

          zIndex: 1,
        }}
      >
        <div
          style={{
            width: "46px",

            height: "46px",

            borderRadius: "50%",

            display: "flex",

            alignItems: "center",

            justifyContent: "center",

            background:
              "rgba(255,255,255,0.06)",

            cursor: "pointer",

            transition: "0.3s",
          }}
        >
          <FaGithub color="white" />
        </div>

        <div
          style={{
            width: "46px",

            height: "46px",

            borderRadius: "50%",

            display: "flex",

            alignItems: "center",

            justifyContent: "center",

            background:
              "rgba(255,255,255,0.06)",

            cursor: "pointer",

            transition: "0.3s",
          }}
        >
          <FaLinkedin color="white" />
        </div>

        <div
          style={{
            width: "46px",

            height: "46px",

            borderRadius: "50%",

            display: "flex",

            alignItems: "center",

            justifyContent: "center",

            background:
              "rgba(255,255,255,0.06)",

            cursor: "pointer",

            transition: "0.3s",
          }}
        >
          <FaGlobe color="white" />
        </div>
      </div>

      <p
        style={{
          color:
            "rgba(255,255,255,0.55)",

          fontSize: "14px",

          position: "relative",

          zIndex: 1,
        }}
      >
        © 2026 NexSite AI — Built
        with React & Creative AI
        Concepts
      </p>
    </footer>
  );
}

export default Footer;