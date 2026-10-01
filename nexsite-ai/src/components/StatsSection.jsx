export default function StatsSection({ stats = [] }) {
  if (!stats || stats.length === 0) {
    stats = [
      { label: "Active Users", value: "10K+" },
      { label: "Uptime", value: "99.9%" },
      { label: "Support", value: "24/7" }
    ];
  }
  return (
    <section style={{ padding: "40px", borderRadius: "16px", backgroundColor: "rgba(255,255,255,0.03)", backdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.05)" }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "30px", textAlign: "center" }}>
        {stats.map((stat, idx) => (
          <div key={idx} style={{ padding: "10px" }}>
            <div style={{ fontSize: "3rem", fontWeight: "900", color: "var(--current-text, #ffffff)", marginBottom: "10px" }}>
              {stat.value}
            </div>
            <div style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.7)", fontWeight: "600", textTransform: "uppercase", letterSpacing: "1px" }}>
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
