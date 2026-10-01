export default function CallToActionSection({ title = "Ready to start?", subtitle = "Join thousands of happy users today.", buttonText = "Get Started" }) {
  return (
    <section style={{ 
      padding: "80px 40px", 
      background: "#1f2937", 
      color: "#ffffff", 
      borderRadius: "24px", 
      textAlign: "center",
      margin: "40px 0",
      border: "1px solid #374151"
    }}>
      <h2 style={{ fontSize: "2.5rem", marginBottom: "15px", fontWeight: "800", color: "#ffffff" }}>{title}</h2>
      <p style={{ fontSize: "1.2rem", marginBottom: "30px", opacity: 0.9, color: "#ffffff" }}>{subtitle}</p>
      <button style={{ 
        padding: "15px 40px", 
        fontSize: "1.1rem", 
        fontWeight: "bold", 
        background: "#7F00FF", 
        color: "#ffffff", 
        border: "none", 
        borderRadius: "12px", 
        cursor: "pointer" 
      }}>
        {buttonText}
      </button>
    </section>
  );
}
