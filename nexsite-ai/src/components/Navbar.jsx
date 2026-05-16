import {
  FaHome,
  FaLayerGroup,
  FaTools,
  FaEnvelope,
} from "react-icons/fa";

function Navbar() {
  const navItemStyle = {
    display: "flex",

    alignItems: "center",

    gap: "8px",

    cursor: "pointer",

    transition: "0.3s",

    padding: "10px 16px",

    borderRadius: "12px",

    color: "white",

    fontWeight: "600",
  };

  const hoverIn = (e) => {
    e.currentTarget.style.background =
      "rgba(255,255,255,0.08)";

    e.currentTarget.style.transform =
      "translateY(-2px) scale(1.03)";

    e.currentTarget.style.boxShadow =
      "0 6px 20px rgba(147,51,234,0.25)";
  };

  const hoverOut = (e) => {
    e.currentTarget.style.background =
      "transparent";

    e.currentTarget.style.transform =
      "translateY(0px) scale(1)";

    e.currentTarget.style.boxShadow =
      "none";
  };

  return (
    <nav
      style={{
        padding: "20px 30px",

        marginBottom: "30px",

        borderRadius: "24px",

        background:
          "linear-gradient(135deg,rgba(15,23,42,0.72),rgba(30,41,59,0.58))",

        backdropFilter: "blur(18px)",

        border:
          "1px solid rgba(255,255,255,0.06)",

        boxShadow:
          "0 10px 30px rgba(0,0,0,0.25)",

        display: "flex",

        justifyContent: "space-between",

        alignItems: "center",

        flexWrap: "wrap",

        gap: "20px",
      }}
    >
      <h2
        style={{
          margin: 0,

          fontSize: "30px",

          fontWeight: "800",

          background:
            "linear-gradient(135deg,#c084fc,#60a5fa)",

          WebkitBackgroundClip: "text",

          WebkitTextFillColor:
            "transparent",

          letterSpacing: "1px",
        }}
      >
        NexSite AI
      </h2>

      <div
        style={{
          display: "flex",

          gap: "12px",

          flexWrap: "wrap",
        }}
      >
        <div
          style={navItemStyle}
          onMouseOver={hoverIn}
          onMouseOut={hoverOut}
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
        >
          <FaHome />
          Home
        </div>

        <div
          style={navItemStyle}
          onMouseOver={hoverIn}
          onMouseOut={hoverOut}
          onClick={() =>
            window.scrollTo({
              top: 500,
              behavior: "smooth",
            })
          }
        >
          <FaLayerGroup />
          Templates
        </div>

        <div
          style={navItemStyle}
          onMouseOver={hoverIn}
          onMouseOut={hoverOut}
          onClick={() =>
            window.scrollTo({
              top: 900,
              behavior: "smooth",
            })
          }
        >
          <FaTools />
          Builder
        </div>

        <div
          style={navItemStyle}
          onMouseOver={hoverIn}
          onMouseOut={hoverOut}
          onClick={() =>
            window.scrollTo({
              top: document.body.scrollHeight,
              behavior: "smooth",
            })
          }
        >
          <FaEnvelope />
          Contact
        </div>
      </div>
    </nav>
  );
}

export default Navbar;