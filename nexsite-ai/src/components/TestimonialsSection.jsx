export default function TestimonialsSection({ title = "What People Say", testimonials = [] }) {
  if (!testimonials || testimonials.length === 0) {
    testimonials = [{ quote: "An absolutely fantastic experience!", author: "Happy Client" }];
  }
  return (
    <section style={{ padding: "30px", borderRadius: "16px", backgroundColor: "rgba(255,255,255,0.05)", backdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.1)" }}>
      <h2 style={{ marginBottom: "25px", textAlign: "center", fontSize: "2rem" }}>{title}</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px" }}>
        {testimonials.map((t, idx) => (
          <div key={idx} style={{ padding: "20px", borderRadius: "12px", background: "rgba(0,0,0,0.3)", position: "relative", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div>
              <div style={{ fontSize: "3rem", color: "#a855f7", opacity: 0.3, position: "absolute", top: -10, left: 10 }}>"</div>
              <p style={{ fontStyle: "italic", marginBottom: "20px", position: "relative", zIndex: 1, padding: "10px", lineHeight: "1.6", color: "rgba(255,255,255,0.9)" }}>{t.quote}</p>
            </div>
            <div style={{ textAlign: "right", fontWeight: "bold", color: "#60a5fa" }}>- {t.author}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
