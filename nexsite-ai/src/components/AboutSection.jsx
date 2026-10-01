function AboutSection({ title = "About Us", description = "We create modern digital experiences and responsive websites for users." }) {
  return (
    <section style={{ padding: "30px", borderRadius: "16px", backgroundColor: "rgba(255,255,255,0.1)", backdropFilter: "blur(10px)" }}>
      <h2 style={{ marginBottom: "15px" }}>{title}</h2>
      <p style={{ lineHeight: "1.6", color: "rgba(255,255,255,0.8)" }}>{description}</p>
    </section>
  );
}

export default AboutSection;