export default function Footer() {
  return (
    <footer style={{ marginTop: "60px", padding: "60px 40px", borderTop: "1px solid rgba(255,255,255,0.1)", background: "#1f2937", borderRadius: "24px 24px 0 0" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "40px" }}>
        
        <div>
          <h2 style={{ fontSize: "1.8rem", fontWeight: "800", color: "var(--current-text, #ffffff)", marginBottom: "20px" }}>
            NexSite AI
          </h2>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.95rem" }}>
            Empowering creators to build stunning digital experiences in seconds, not weeks.
          </p>
        </div>

        <div>
          <h3 style={{ fontSize: "1.2rem", marginBottom: "15px", color: "var(--current-text, #ffffff)" }}>Links</h3>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
            <li><a href="#" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>Home</a></li>
            <li><a href="#" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>Features</a></li>
            <li><a href="#" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>Pricing</a></li>
          </ul>
        </div>

        <div>
          <h3 style={{ fontSize: "1.2rem", marginBottom: "15px", color: "var(--current-text, #ffffff)" }}>Legal</h3>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
            <li><a href="#" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>Privacy Policy</a></li>
            <li><a href="#" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>Terms of Service</a></li>
          </ul>
        </div>

      </div>
      
      <div style={{ textAlign: "center", marginTop: "40px", paddingTop: "20px", borderTop: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.4)", fontSize: "0.85rem" }}>
        © {new Date().getFullYear()} NexSite AI. All rights reserved.
      </div>
    </footer>
  );
}