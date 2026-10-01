export default function FAQSection({ title = "Frequently Asked Questions", questions = [] }) {
  if (!questions || questions.length === 0) {
    questions = [{ question: "Placeholder Question?", answer: "Placeholder Answer." }];
  }
  return (
    <section style={{ padding: "40px", borderRadius: "16px", backgroundColor: "rgba(255,255,255,0.05)", backdropFilter: "blur(10px)" }}>
      <h2 style={{ marginBottom: "30px", fontSize: "2rem" }}>{title}</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        {questions.map((q, idx) => (
          <div key={idx} style={{ 
            padding: "20px", 
            borderRadius: "12px", 
            background: "rgba(0,0,0,0.2)", 
            borderLeft: "4px solid #60a5fa",
            transition: "0.2s"
          }}>
            <h4 style={{ marginBottom: "10px", fontSize: "1.1rem", color: "white" }}>{q.question}</h4>
            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.95rem", lineHeight: "1.6" }}>{q.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
