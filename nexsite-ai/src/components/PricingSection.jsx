export default function PricingSection({ title = "Pricing Plans", plans = [] }) {
  if (!plans || plans.length === 0) {
    plans = [
      { name: "Basic", price: "$9/mo", features: ["Feature 1"], cta: "Start Basic" },
      { name: "Pro", price: "$29/mo", features: ["Feature 1", "Feature 2"], highlight: true, cta: "Go Pro" }
    ];
  }
  return (
    <section style={{ padding: "30px", borderRadius: "16px", backgroundColor: "rgba(255,255,255,0.05)", backdropFilter: "blur(10px)" }}>
      <h2 style={{ marginBottom: "30px", textAlign: "center", fontSize: "2rem" }}>{title}</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "20px" }}>
        {plans.map((plan, idx) => (
          <div key={idx} style={{ 
            padding: "40px 30px", 
            background: plan.highlight ? "var(--current-text, #ffffff)" : "rgba(0,0,0,0.2)", 
            color: plan.highlight ? "var(--current-bg, #000000)" : "var(--current-text, #ffffff)",
            borderRadius: "16px",
            border: plan.highlight ? "none" : "1px solid rgba(255,255,255,0.1)",
            transform: plan.highlight ? "scale(1.05)" : "scale(1)",
            boxShadow: "none"
          }}>
            <h3 style={{ fontSize: "1.4rem", marginBottom: "10px", color: plan.highlight ? "white" : "rgba(255,255,255,0.8)" }}>{plan.name}</h3>
            <div style={{ fontSize: "2.5rem", fontWeight: "800", marginBottom: "20px", color: plan.highlight ? "#60a5fa" : "white" }}>{plan.price}</div>
            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 25px 0", textAlign: "center" }}>
              {plan.features?.map((f, i) => (
                <li key={i} style={{ marginBottom: "12px", fontSize: "0.95rem", color: "rgba(255,255,255,0.7)" }}>
                  <span style={{ color: "#a855f7", marginRight: "8px" }}>✓</span> {f}
                </li>
              ))}
            </ul>
            <button style={{ 
              padding: "12px 24px", 
              borderRadius: "8px", 
              border: "none", 
              background: plan.highlight ? "var(--current-bg, #000000)" : "rgba(255,255,255,0.1)", 
              color: plan.highlight ? "var(--current-text, #ffffff)" : "white", 
              fontWeight: "bold",
              cursor: "pointer", 
              width: "100%",
              transition: "0.3s"
            }}>
              {plan.cta || "Select Plan"}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
