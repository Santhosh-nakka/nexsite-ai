function ServicesSection({ title = "Services", services = [] }) {
  // Mock services if none provided initially
  const displayServices = services.length > 0 ? services : [
    { name: "Placeholder Service", description: "This is a sample service offering." }
  ];

  return (
    <section style={{ padding: "30px", borderRadius: "16px", backgroundColor: "rgba(255,255,255,0.1)", backdropFilter: "blur(10px)" }}>
      <h2 style={{ marginBottom: "20px" }}>{title}</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px" }}>
        {displayServices.map((svc, idx) => (
          <div key={idx} style={{ padding: "15px", borderRadius: "10px", backgroundColor: "rgba(0,0,0,0.2)", border: "1px solid rgba(255,255,255,0.05)" }}>
            <h3 style={{ marginBottom: "10px", fontSize: "1.2rem", color: "#60a5fa" }}>{svc.name}</h3>
            <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.8)" }}>{svc.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ServicesSection;