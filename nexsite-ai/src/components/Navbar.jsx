export default function Navbar({ onHomeClick, onTemplatesClick, onBuilderClick, onContactClick, onExportClick }) {
  return (
    <nav style={{ 
      padding: "20px 30px", 
      marginBottom: "30px", 
      background: "#1f2937", 
      borderBottom: "1px solid #374151",
      display: "flex", 
      justifyContent: "space-between", 
      alignItems: "center", 
      flexWrap: "wrap", 
      gap: "20px" 
    }}>
      <h2 style={{ margin: 0, fontSize: "28px", fontWeight: "800", color: "#7F00FF", letterSpacing: "0px" }}>
        NexSite AI
      </h2>

      <div style={{ display: "flex", gap: "25px", flexWrap: "wrap", alignItems: "center" }}>
        <button onClick={onHomeClick} style={navBtnStyle}>Home</button>
        <button onClick={onTemplatesClick} style={navBtnStyle}>Templates</button>
        <button onClick={onBuilderClick} style={navBtnStyle}>Builder</button>
        <button onClick={onContactClick} style={navBtnStyle}>Contact</button>
        <button 
          onClick={onExportClick} 
          style={{ ...navBtnStyle, background: "#7F00FF", padding: "8px 20px", borderRadius: "8px", color: "white" }}
        >
          Export HTML
        </button>
      </div>
    </nav>
  );
}

const navBtnStyle = {
  background: "transparent",
  border: "none",
  color: "white",
  fontSize: "16px",
  fontWeight: "600",
  cursor: "pointer",
  transition: "0.2s",
};