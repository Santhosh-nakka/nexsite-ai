function ProjectsSection({ title = "Projects", projects = [] }) {
  // Mock projects if none provided initially
  const displayProjects = projects.length > 0 ? projects : [
    { name: "Placeholder Project", description: "This is a sample project to showcase the layout." }
  ];

  return (
    <section style={{ padding: "30px", borderRadius: "16px", backgroundColor: "rgba(255,255,255,0.1)", backdropFilter: "blur(10px)" }}>
      <h2 style={{ marginBottom: "20px" }}>{title}</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px" }}>
        {displayProjects.map((proj, idx) => (
          <div key={idx} style={{ padding: "15px", borderRadius: "10px", backgroundColor: "rgba(0,0,0,0.2)" }}>
            <h3 style={{ marginBottom: "10px", fontSize: "1.2rem" }}>{proj.name}</h3>
            <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.8)" }}>{proj.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;