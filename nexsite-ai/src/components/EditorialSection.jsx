export default function EditorialSection({ headline = "VISUAL POETRY", text = "Elevating the human experience through design.", imageKeyword = "fashion", reverse = false }) {
  // Use Pollinations AI to accurately generate an image based on the exact prompt
  const imageUrl = `https://image.pollinations.ai/prompt/${encodeURIComponent(imageKeyword)}?width=800&height=1000&nologo=true`;
  
  return (
    <section style={{ 
      display: "flex", 
      flexDirection: reverse ? "row-reverse" : "row", 
      flexWrap: "wrap", 
      border: "4px solid var(--current-text, #000)", 
      margin: "60px 0",
      backgroundColor: "var(--current-bg, #fff)", 
      boxShadow: "16px 16px 0px 0px var(--current-text, #000)", 
      borderRadius: "0px", 
      overflow: "hidden"
    }}>
      <div style={{ 
        flex: "1 1 400px", 
        padding: "80px 60px", 
        display: "flex", 
        flexDirection: "column", 
        justifyContent: "center", 
        borderRight: reverse ? "none" : "4px solid var(--current-text, #000)", 
        borderLeft: reverse ? "4px solid var(--current-text, #000)" : "none" 
      }}>
        <h2 style={{ 
          fontSize: "clamp(3.5rem, 8vw, 7rem)", 
          fontWeight: 900, 
          textTransform: "uppercase", 
          lineHeight: 0.85, 
          margin: "0 0 30px 0", 
          letterSpacing: "-0.04em", 
          color: "var(--current-text, #000)" 
        }}>
          {headline}
        </h2>
        <p style={{ 
          fontSize: "1.4rem", 
          lineHeight: 1.5, 
          fontWeight: 600, 
          color: "var(--current-text, #000)",
          borderLeft: "8px solid var(--current-text, #000)",
          paddingLeft: "20px"
        }}>
          {text}
        </p>
      </div>
      <div style={{ 
        flex: "1 1 400px", 
        minHeight: "600px", 
        backgroundImage: `url(${imageUrl})`, 
        backgroundSize: "cover", 
        backgroundPosition: "center", 
        filter: "contrast(120%) saturate(110%)" 
      }} />
    </section>
  );
}
