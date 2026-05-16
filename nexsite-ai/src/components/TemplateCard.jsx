function TemplateCard({
  title,
  description,
  onClick,
}) {
  return (
    <div
      onClick={onClick}
      style={{
        padding: "22px",

        borderRadius: "24px",

        background:
          "linear-gradient(135deg,rgba(15,23,42,0.72),rgba(30,41,59,0.58))",

        backdropFilter: "blur(18px)",

        cursor: "pointer",

        transition: "0.35s ease",

        marginBottom: "18px",

        border:
          "1px solid rgba(255,255,255,0.06)",

        boxShadow:
          "0 10px 30px rgba(0,0,0,0.18)",

        overflow: "hidden",

        position: "relative",
      }}

      onMouseOver={(e) => {
        e.currentTarget.style.transform =
          "translateY(-6px) scale(1.02)";

        e.currentTarget.style.boxShadow =
          "0 20px 40px rgba(147,51,234,0.25)";
      }}

      onMouseOut={(e) => {
        e.currentTarget.style.transform =
          "translateY(0px) scale(1)";

        e.currentTarget.style.boxShadow =
          "0 10px 30px rgba(0,0,0,0.18)";
      }}
    >
      <div
        style={{
          height: "130px",

          borderRadius: "18px",

          marginBottom: "18px",

          background:
            "linear-gradient(135deg,#7c3aed,#2563eb)",

          position: "relative",

          overflow: "hidden",

          boxShadow:
            "0 10px 30px rgba(124,58,237,0.3)",
        }}
      >
        <div
          style={{
            position: "absolute",

            inset: 0,

            background:
              "linear-gradient(135deg,rgba(255,255,255,0.15),transparent)",

            backdropFilter: "blur(10px)",
          }}
        />
      </div>

      <h3
        style={{
          marginBottom: "10px",

          fontSize: "28px",

          fontWeight: "700",

          color: "white",
        }}
      >
        {title}
      </h3>

      <p
        style={{
          opacity: 0.82,

          lineHeight: "1.7",

          fontSize: "15px",

          color:
            "rgba(255,255,255,0.78)",
        }}
      >
        {description}
      </p>
    </div>
  );
}

export default TemplateCard;