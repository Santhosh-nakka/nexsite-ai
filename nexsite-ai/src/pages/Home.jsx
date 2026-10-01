import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import SectionRenderer from "../components/SectionRenderer";
import BackgroundEffects from "../components/BackgroundEffects";
import HexagonBackground from "../components/HexagonBackground";
import GridBackground from "../components/GridBackground";
import WaveBackground from "../components/WaveBackground";
import DotsBackground from "../components/DotsBackground";
import Footer from "../components/Footer";
import ChatSidebar from "../components/ChatSidebar";
import TemplatesModal from "../components/TemplatesModal";

import themes from "../styles/themes";
import { generateWebsite } from "../services/ai";

const defaultInitialConfig = {
  websiteType: "business",
  themeType: "dark",
  backgroundType: "hexagon",
  customTitle: "NexSite AI Builder",
  customSubtitle: "Enter a prompt on the left to start generating your custom website.",
  sections: [
    {
      type: "cta",
      props: {
        title: "AI Website Generator",
        subtitle: "Enter a prompt on the left to start generating your custom website.",
        buttonText: "Explore AI Builder"
      }
    }
  ]
};

export default function Home() {
  const [apiKey, setApiKey] = useState(import.meta.env.VITE_GEMINI_API_KEY || "");
  const [siteConfig, setSiteConfig] = useState(() => {
    const saved = localStorage.getItem("nexsite-gen-config");
    return saved ? JSON.parse(saved) : defaultInitialConfig;
  });
  const [chatHistory, setChatHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showTemplatesModal, setShowTemplatesModal] = useState(false);

  useEffect(() => {
    localStorage.setItem("nexsite-gen-config", JSON.stringify(siteConfig));
  }, [siteConfig]);

  const currentTheme = {
    backgroundColor: siteConfig.customBackgroundColor || (themes[siteConfig.themeType] ? themes[siteConfig.themeType].backgroundColor : themes.dark.backgroundColor),
    textColor: siteConfig.customTextColor || (themes[siteConfig.themeType] ? themes[siteConfig.themeType].textColor : themes.dark.textColor),
  };

  useEffect(() => {
    document.body.style.backgroundColor = currentTheme.backgroundColor;
  }, [currentTheme]);

  const handleGenerate = async (prompt) => {
    setIsLoading(true);
    const newHistory = [...chatHistory, { role: 'user', text: prompt }];
    setChatHistory(newHistory);

    try {
      const newConfig = await generateWebsite(apiKey, prompt, siteConfig);
      setSiteConfig(newConfig);
      setChatHistory([...newHistory, { role: 'ai', text: 'Website updated successfully!' }]);
    } catch (error) {
      setChatHistory([...newHistory, { role: 'ai', text: `Error: ${error.message}` }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setSiteConfig(defaultInitialConfig);
    setChatHistory([]);
    localStorage.removeItem("nexsite-gen-config");
  };

  const handleExport = () => {
    const previewElement = document.getElementById("export-preview-container");
    if (!previewElement) return;
    const htmlContent = previewElement.innerHTML;

    let cssContent = "";
    document.querySelectorAll("style, link[rel='stylesheet']").forEach(el => {
      cssContent += el.outerHTML + "\n";
    });

    const fullHTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${siteConfig.customTitle || "NexSite Export"}</title>
  <link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Anton&family=Bebas+Neue&family=Cinzel:wght@400;700&family=Cormorant+Garamond:wght@400;600;700&family=Fira+Code:wght@400;700&family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;700&family=Lora:wght@400;700&family=Merriweather:wght@400;700&family=Montserrat:wght@300;400;500;600;700;800;900&family=Oswald:wght@400;700&family=Outfit:wght@300;400;500;600;700;800;900&family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,900;1,400&family=Poppins:wght@300;400;500;600;700;800;900&family=Righteous&family=Roboto:wght@300;400;500;700&family=Space+Mono:ital,wght@0,400;0,700;1,400&family=Syne:wght@400;700;800&display=swap" rel="stylesheet">
  ${cssContent}
  <style>
    body { 
      margin: 0; padding: 0; 
      background-color: ${currentTheme.backgroundColor}; 
      color: ${currentTheme.textColor}; 
      font-family: ${siteConfig.fontFamily || "'Inter', sans-serif"}; 
      --current-bg: ${currentTheme.backgroundColor};
      --current-text: ${currentTheme.textColor};
    }
  </style>
</head>
<body>
  <div style="max-width: 1200px; margin: 0 auto; padding: 40px 20px;">
    ${htmlContent}
  </div>
</body>
</html>`;

    const blob = new Blob([fullHTML], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "my-nexsite-portfolio.html";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div style={{
      "--current-bg": currentTheme.backgroundColor,
      "--current-text": currentTheme.textColor,
      position: "relative",
      overflow: "hidden",
      zIndex: 1,
      backgroundColor: currentTheme.backgroundColor,
      color: currentTheme.textColor,
      fontFamily: siteConfig.fontFamily || "'Inter', sans-serif",
      minHeight: "100vh",
      transition: "0.3s",
    }}>
      {showTemplatesModal && (
        <TemplatesModal 
          onClose={() => setShowTemplatesModal(false)} 
          onSelectTemplate={(config) => {
            setSiteConfig(config);
            setChatHistory([...chatHistory, { role: 'ai', text: 'Template applied successfully! Feel free to modify it further.' }]);
            setShowTemplatesModal(false);
          }} 
        />
      )}

      {/* Flat solid backgrounds only */}
      
      <Navbar 
        onHomeClick={() => {
          handleReset();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onTemplatesClick={() => setShowTemplatesModal(true)}
        onBuilderClick={() => document.getElementById('ai-prompt-input')?.focus()}
        onContactClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
        onExportClick={handleExport}
      />
      
      <div style={{ 
        display: "flex", 
        maxWidth: "1600px", 
        margin: "0 auto", 
        padding: "0 20px", 
        gap: "40px", 
        alignItems: "flex-start" 
      }}>
        {/* Left Sidebar */}
        <ChatSidebar 
          apiKey={apiKey}
          onGenerate={handleGenerate}
          onReset={handleReset}
          isLoading={isLoading}
          history={chatHistory}
        />

        {/* Right Main Content */}
        <main style={{ flex: 1, paddingBottom: "40px", minHeight: "80vh" }}>
          <div id="export-preview-container">
            <div style={{ textAlign: "center", marginBottom: "60px", paddingTop: "20px" }}>
              <h1 style={{ fontSize: "3.5rem", fontWeight: "800", marginBottom: "15px", letterSpacing: "-1px" }}>
                {siteConfig.customTitle}
              </h1>
              <p style={{ fontSize: "1.2rem", opacity: 0.8, maxWidth: "600px", margin: "0 auto" }}>
                {siteConfig.customSubtitle}
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "25px" }}>
              {siteConfig.sections?.map((section, idx) => (
                <SectionRenderer key={idx} section={section} />
              ))}
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}