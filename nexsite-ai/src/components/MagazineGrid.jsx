export default function MagazineGrid({ items = [] }) {
  if (!items || items.length === 0) {
    items = [
      { category: "Design", title: "BOLD INNOVATIONS", description: "Breaking the mold." },
      { category: "Art", title: "VISUAL POETRY", description: "Crafting aesthetics." }
    ];
  }

  return (
    <section style={{ 
      display: "grid", 
      gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", 
      gap: "0", 
      border: "4px solid var(--current-text, #000)", 
      margin: "60px 0", 
      boxShadow: "16px 16px 0px 0px var(--current-text, #000)",
      backgroundColor: "var(--current-bg, #fff)"
    }}>
      {items.map((item, i) => (
        <div key={i} style={{ 
          padding: "60px 40px", 
          borderRight: i !== items.length - 1 ? "4px solid var(--current-text, #000)" : "none", 
          display: "flex", 
          flexDirection: "column", 
          justifyContent: "space-between", 
          background: i % 2 === 0 ? "transparent" : "rgba(0,0,0,0.05)"
        }}>
          <div style={{ 
            fontSize: "1rem", 
            textTransform: "uppercase", 
            marginBottom: "40px", 
            fontWeight: "900", 
            letterSpacing: "2px", 
            borderBottom: "4px solid var(--current-text, #000)", 
            paddingBottom: "10px", 
            display: "inline-block",
            color: "var(--current-text, #000)"
          }}>
            0{i + 1} // {item.category}
          </div>
          <div>
            <h3 style={{ 
              fontSize: "clamp(2rem, 5vw, 4rem)", 
              margin: "0 0 20px 0", 
              lineHeight: 0.9, 
              fontWeight: 900, 
              textTransform: "uppercase", 
              letterSpacing: "-0.03em",
              color: "var(--current-text, #000)"
            }}>
              {item.title}
            </h3>
            <p style={{ 
              fontSize: "1.2rem", 
              fontWeight: 600,
              color: "var(--current-text, #000)"
            }}>
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}
