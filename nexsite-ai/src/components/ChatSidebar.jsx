import { useState } from 'react';

export default function ChatSidebar({ apiKey, onGenerate, onReset, isLoading, history }) {
  const [prompt, setPrompt] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (prompt.trim() && apiKey && !isLoading) {
      onGenerate(prompt);
      setPrompt("");
    }
  };

  return (
    <div style={{
      width: "350px",
      height: "calc(100vh - 120px)",
      position: "sticky",
      top: "100px",
      background: "#1f2937",
      border: "1px solid #374151",
      borderRadius: "0px",
      padding: "20px",
      display: "flex",
      flexDirection: "column",
      gap: "20px"
    }}>
      <div>
        <h2 style={{ fontSize: "1.4rem", marginBottom: "8px", color: "#7F00FF", fontWeight: "bold" }}>NexSite Copilot</h2>
        <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.7)" }}>Iteratively generate and refine your website with AI.</p>
      </div>

      {!apiKey && (
        <div style={{ padding: "10px", background: "#7f1d1d", border: "1px solid #b91c1c", color: "white", fontSize: "0.85rem" }}>
          <strong>Missing API Key:</strong> Please add your <code>VITE_GEMINI_API_KEY</code> to the <code>.env</code> file.
        </div>
      )}

      <div style={{ flex: 1, overflowY: "auto", display: "flex", flexDirection: "column", gap: "15px", padding: "5px" }}>
        {history && history.length === 0 && (
           <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.85rem", textAlign: "center", marginTop: "20px" }}>
             Start by describing the website you want to build...
           </p>
        )}
        {history && history.map((msg, idx) => (
          <div key={idx} style={{ 
            alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start',
            background: msg.role === 'user' ? '#7F00FF' : '#374151',
            padding: '10px 14px',
            borderRadius: '4px',
            maxWidth: '85%',
            fontSize: '0.9rem',
            color: 'white'
          }}>
            {msg.text}
          </div>
        ))}
        {isLoading && (
          <div style={{
            alignSelf: 'flex-start',
            background: '#374151',
            padding: "10px 14px",
            borderRadius: "4px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            fontSize: "0.9rem",
            color: 'white'
          }}>
            <span>⏳</span>
            Generating...
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <textarea
          id="ai-prompt-input"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="E.g., Make the hero section more professional..."
          style={{ 
            padding: "12px", 
            border: "1px solid #374151", 
            background: "#111827", 
            color: "white", 
            minHeight: "80px", 
            resize: "none", 
            outline: "none" 
          }}
          onFocus={(e) => e.target.style.borderColor = "#7F00FF"}
          onBlur={(e) => e.target.style.borderColor = "#374151"}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              handleSubmit(e);
            }
          }}
        />
        <div style={{ display: 'flex', gap: '10px' }}>
          <button 
            type="submit" 
            disabled={isLoading || !prompt.trim() || !apiKey}
            style={{ 
              flex: 1,
              padding: "12px", 
              background: isLoading || !prompt.trim() || !apiKey ? "#374151" : "#7F00FF", 
              color: "white", 
              border: "none", 
              cursor: isLoading || !prompt.trim() || !apiKey ? "not-allowed" : "pointer",
              fontWeight: "600",
            }}
          >
            {isLoading ? "Thinking..." : "Send"}
          </button>
          <button
            type="button"
            onClick={onReset}
            style={{
              padding: "12px",
              background: "transparent",
              color: "#f87171",
              border: "1px solid #b91c1c",
              cursor: "pointer",
              fontWeight: "600",
            }}
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}
