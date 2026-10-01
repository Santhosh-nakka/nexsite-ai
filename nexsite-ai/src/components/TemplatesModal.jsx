import { presetTemplates } from "../data/templates";

export default function TemplatesModal({ onSelectTemplate, onClose }) {
  return (
    <div style={{
      position: "fixed",
      inset: 0,
      background: "rgba(0,0,0,0.85)",
      zIndex: 9999,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "20px"
    }}>
      <div style={{
        background: "#1f2937",
        border: "1px solid #374151",
        borderRadius: "24px",
        padding: "40px",
        maxWidth: "900px",
        width: "100%",
        maxHeight: "90vh",
        display: "flex",
        flexDirection: "column",
        color: "white",
      }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "30px" }}>
          <h2 style={{ fontSize: "2rem", margin: 0, color: "#ffffff" }}>Select a Template</h2>
          <button onClick={onClose} style={{ background: "transparent", border: "none", color: "#f87171", fontSize: "2rem", cursor: "pointer", fontWeight: "bold" }}>&times;</button>
        </div>
        
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", 
          gap: "20px",
          overflowY: "auto",
          paddingRight: "10px",
          paddingBottom: "20px"
        }}>
          {presetTemplates.map(template => (
            <div key={template.id} style={{
              background: "#111827",
              border: "1px solid #374151",
              borderRadius: "16px",
              padding: "25px",
              cursor: "pointer",
              transition: "0.2s",
            }}
            onMouseOver={(e) => { e.currentTarget.style.borderColor = "#7F00FF"; e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseOut={(e) => { e.currentTarget.style.borderColor = "#374151"; e.currentTarget.style.transform = "translateY(0)"; }}
            onClick={() => onSelectTemplate(template.config)}
            >
              <h3 style={{ fontSize: "1.4rem", marginBottom: "10px", color: "#ffffff" }}>{template.name}</h3>
              <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.7)", marginBottom: "20px" }}>{template.description}</p>
              <div style={{ fontSize: "0.85rem", color: "#7F00FF", fontWeight: "bold" }}>+ Click to apply</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
