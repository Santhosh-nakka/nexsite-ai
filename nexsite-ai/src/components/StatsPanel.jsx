function StatsPanel({
  websiteType,
  themeType,
  activeSections,
  customTitle,
}) {
  const statCardStyle = {
    flex: "1",

    minWidth: "120px",

    padding: "16px",

    borderRadius: "18px",

    background:
      "rgba(255,255,255,0.05)",

    border:
      "1px solid rgba(255,255,255,0.06)",

    backdropFilter: "blur(12px)",

    textAlign: "center",

    boxShadow:
      "0 6px 20px rgba(0,0,0,0.18)",
  };

  return (
    <div
      style={{
        padding: "28px",

        borderRadius: "28px",

        background:
          "linear-gradient(135deg,rgba(15,23,42,0.72),rgba(30,41,59,0.58))",

        backdropFilter: "blur(18px)",

        marginBottom: "30px",

        border:
          "1px solid rgba(255,255,255,0.06)",

        boxShadow:
          "0 12px 35px rgba(0,0,0,0.25)",
      }}
    >
      <h2
        style={{
          marginBottom: "24px",

          fontSize: "30px",

          fontWeight: "800",

          background:
            "linear-gradient(90deg,#c084fc,#60a5fa)",

          WebkitBackgroundClip: "text",

          WebkitTextFillColor:
            "transparent",
        }}
      >
        Website Statistics
      </h2>

      <div
        style={{
          display: "flex",

          flexWrap: "wrap",

          gap: "16px",
        }}
      >
        <div style={statCardStyle}>
          <h3
            style={{
              fontSize: "15px",

              marginBottom: "10px",

              opacity: 0.7,
            }}
          >
            Website Type
          </h3>

          <p
            style={{
              fontSize: "20px",

              fontWeight: "700",

              color: "white",
            }}
          >
            {websiteType}
          </p>
        </div>

        <div style={statCardStyle}>
          <h3
            style={{
              fontSize: "15px",

              marginBottom: "10px",

              opacity: 0.7,
            }}
          >
            Active Theme
          </h3>

          <p
            style={{
              fontSize: "20px",

              fontWeight: "700",

              color: "white",
            }}
          >
            {themeType}
          </p>
        </div>

        <div style={statCardStyle}>
          <h3
            style={{
              fontSize: "15px",

              marginBottom: "10px",

              opacity: 0.7,
            }}
          >
            Sections
          </h3>

          <p
            style={{
              fontSize: "20px",

              fontWeight: "700",

              color: "white",
            }}
          >
            {activeSections.length}
          </p>
        </div>

        <div style={statCardStyle}>
          <h3
            style={{
              fontSize: "15px",

              marginBottom: "10px",

              opacity: 0.7,
            }}
          >
            Custom Title
          </h3>

          <p
            style={{
              fontSize: "20px",

              fontWeight: "700",

              color: "white",
            }}
          >
            {customTitle
              ? "Enabled"
              : "Default"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default StatsPanel;