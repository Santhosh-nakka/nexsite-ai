import { useState, useEffect } from "react";

import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import SectionRenderer from "../components/SectionRenderer";
import StatsPanel from "../components/StatsPanel";
import TemplateCard from "../components/TemplateCard";
import BackgroundEffects from "../components/BackgroundEffects";
import HexagonBackground from "../components/HexagonBackground";
import Footer from "../components/Footer";

import websiteConfigs from "../data/websiteConfigs";
import themes from "../styles/themes";

function Home() {
  const [websiteType, setWebsiteType] =
    useState("portfolio");

  const [isLoading, setIsLoading] =
    useState(false);

  const [customTitle, setCustomTitle] =
    useState("");

  const [customSubtitle, setCustomSubtitle] =
    useState("");

  const [activeSections, setActiveSections] =
    useState(
      websiteConfigs.portfolio.sections
    );

  const [themeType, setThemeType] =
  useState("dark");

const [aiPrompt, setAiPrompt] =
  useState("");

const [
  customBackgroundColor,
    setCustomBackgroundColor,
  ] = useState("");

  const [
    customTextColor,
    setCustomTextColor,
  ] = useState("");

  const currentWebsite =
    websiteConfigs[websiteType];

  const currentTheme = {
    backgroundColor:
      customBackgroundColor ||
      themes[themeType].backgroundColor,

    textColor:
      customTextColor ||
      themes[themeType].textColor,
  };

  useEffect(() => {
    const savedConfig =
      localStorage.getItem(
        "nexsite-config"
      );

    if (savedConfig) {
      const config =
        JSON.parse(savedConfig);

      setWebsiteType(
        config.websiteType || "portfolio"
      );

      setThemeType(
        config.themeType || "dark"
      );

      setCustomTitle(
        config.customTitle || ""
      );

      setCustomSubtitle(
        config.customSubtitle || ""
      );

      setActiveSections(
        config.activeSections ||
          websiteConfigs.portfolio.sections
      );

      setCustomBackgroundColor(
        config.customBackgroundColor || ""
      );

      setCustomTextColor(
        config.customTextColor || ""
      );
    }
  }, []);

  useEffect(() => {
    const config = {
      websiteType,
      themeType,
      customTitle,
      customSubtitle,
      activeSections,
      customBackgroundColor,
      customTextColor,
    };

    localStorage.setItem(
      "nexsite-config",
      JSON.stringify(config)
    );
  }, [
    websiteType,
    themeType,
    customTitle,
    customSubtitle,
    activeSections,
    customBackgroundColor,
    customTextColor,
  ]);

  useEffect(() => {
    document.body.style.backgroundColor =
      currentTheme.backgroundColor;
  }, [currentTheme]);

  const changeWebsite = (type) => {
    setIsLoading(true);

    setTimeout(() => {
      setWebsiteType(type);

      setThemeType(
        websiteConfigs[type].theme
      );

      setActiveSections(
        websiteConfigs[type].sections
      );

      setIsLoading(false);
    }, 600);
  };

 const toggleSection = (section) => {
  if (activeSections.includes(section)) {
    setActiveSections(
      activeSections.filter(
        (item) => item !== section
      )
    );
  } else {
    setActiveSections([
      ...activeSections,
      section,
    ]);
  }
};

const generateWebsiteFromPrompt =
  () => {
    const prompt =
      aiPrompt.toLowerCase();

    if (
      prompt.includes("fitness") ||
      prompt.includes("gym")
    ) {
      setWebsiteType("business");

      setThemeType("dark");

      setCustomTitle(
        "PowerFit Gym"
      );

      setCustomSubtitle(
        "Transform Your Body With Expert Training"
      );

      setActiveSections([
        "about",
        "services",
        "projects",
      ]);
    }

    else if (
      prompt.includes("photography") ||
      prompt.includes("camera")
    ) {
      setWebsiteType(
        "portfolio"
      );

      setThemeType("purple");

      setCustomTitle(
        "LensCraft Studio"
      );

      setCustomSubtitle(
        "Capturing Moments That Matter"
      );

      setActiveSections([
        "about",
        "projects",
      ]);
    }

    else if (
      prompt.includes("startup") ||
      prompt.includes("saas")
    ) {
      setWebsiteType("startup");

      setThemeType("dark");

      setCustomTitle(
        "NextGen AI"
      );

      setCustomSubtitle(
        "Building Future AI Solutions"
      );

      setActiveSections([
        "about",
        "services",
        "projects",
      ]);
    }

    else if (
      prompt.includes("restaurant") ||
      prompt.includes("food")
    ) {
      setWebsiteType("business");

      setThemeType("dark");

      setCustomTitle(
        "Royal Taste"
      );

      setCustomSubtitle(
        "Delicious Food Experience"
      );

      setActiveSections([
        "about",
        "services",
        "projects",
      ]);
    }

    else if (
      prompt.includes("developer") ||
      prompt.includes("programmer")
    ) {
      setWebsiteType(
        "portfolio"
      );

      setThemeType("purple");

      setCustomTitle(
        "Alex Developer"
      );

      setCustomSubtitle(
        "Full Stack Web Developer"
      );

      setActiveSections([
        "about",
        "projects",
      ]);
    }

    else if (
      prompt.includes("designer")
    ) {
      setWebsiteType(
        "portfolio"
      );

      setThemeType("purple");

      setCustomTitle(
        "Creative Designer"
      );

      setCustomSubtitle(
        "Designing Modern Experiences"
      );

      setActiveSections([
        "about",
        "projects",
      ]);
    }

    else if (
      prompt.includes("travel")
    ) {
      setWebsiteType("business");

      setThemeType("dark");

      setCustomTitle(
        "Explore World"
      );

      setCustomSubtitle(
        "Travel Beyond Limits"
      );

      setActiveSections([
        "about",
        "services",
        "projects",
      ]);
    }

    else if (
      prompt.includes("gaming") ||
      prompt.includes("game")
    ) {
      setWebsiteType("startup");

      setThemeType("purple");

      setCustomTitle(
        "GameVerse"
      );

      setCustomSubtitle(
        "Enter The Next Gaming Era"
      );

      setActiveSections([
        "about",
        "projects",
        "services",
      ]);
    }

    else if (
      prompt.includes("doctor") ||
      prompt.includes("hospital")
    ) {
      setWebsiteType("business");

      setThemeType("light");

      setCustomTitle(
        "HealthCare Plus"
      );

      setCustomSubtitle(
        "Caring For Better Tomorrow"
      );

      setActiveSections([
        "about",
        "services",
      ]);
    }

    else if (
      prompt.includes("lawyer")
    ) {
      setWebsiteType("business");

      setThemeType("dark");

      setCustomTitle(
        "Justice Law Firm"
      );

      setCustomSubtitle(
        "Professional Legal Services"
      );

      setActiveSections([
        "about",
        "services",
      ]);
    }

    else {
      setWebsiteType(
        "portfolio"
      );

      setThemeType("dark");

      setCustomTitle(
        "Creative Portfolio"
      );

      setCustomSubtitle(
        "Modern Digital Experiences"
      );

      setActiveSections([
        "about",
        "projects",
      ]);
    }
  };
  const exportConfiguration = () => {
    const config = {
      websiteType,
      themeType,
      customTitle,
      customSubtitle,
      activeSections,
      customBackgroundColor,
      customTextColor,
    };

    const configText = JSON.stringify(
      config,
      null,
      2
    );

    const blob = new Blob(
      [configText],
      {
        type: "application/json",
      }
    );

    const url =
      URL.createObjectURL(blob);

    const link =
      document.createElement("a");

    link.href = url;

    link.download =
      "website-config.json";

    link.click();

    URL.revokeObjectURL(url);
  };

  const importConfiguration = (event) => {
    const file = event.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = (e) => {
      const config = JSON.parse(
        e.target.result
      );

      setWebsiteType(
        config.websiteType || "portfolio"
      );

      setThemeType(
        config.themeType || "dark"
      );

      setCustomTitle(
        config.customTitle || ""
      );

      setCustomSubtitle(
        config.customSubtitle || ""
      );

      setActiveSections(
        config.activeSections ||
          websiteConfigs.portfolio.sections
      );

      setCustomBackgroundColor(
        config.customBackgroundColor || ""
      );

      setCustomTextColor(
        config.customTextColor || ""
      );
    };

    reader.readAsText(file);
  };

  const resetBuilder = () => {
    setWebsiteType("portfolio");

    setThemeType("dark");

    setCustomTitle("");

    setCustomSubtitle("");

    setActiveSections(
      websiteConfigs.portfolio.sections
    );

    setCustomBackgroundColor("");

    setCustomTextColor("");

    localStorage.removeItem(
      "nexsite-config"
    );
  };

  const buttonStyle = {
    padding: "12px 18px",

    margin: "5px",

    border: "none",

    borderRadius: "12px",

    cursor: "pointer",

    fontSize: "15px",

    fontWeight: "600",

    transition: "0.3s",

    background:
      "linear-gradient(135deg,#9333ea,#2563eb)",

    color: "white",

    boxShadow:
      "0 6px 18px rgba(147,51,234,0.3)",
  };

  const inputStyle = {
    padding: "12px",

    margin: "10px",

    borderRadius: "12px",

    border:
      "1px solid rgba(255,255,255,0.08)",

    width: "100%",

    maxWidth: "300px",

    background:
      "rgba(255,255,255,0.06)",

    color: "white",

    backdropFilter: "blur(12px)",
  };

  const hoverIn = (e) => {
    e.target.style.transform =
      "translateY(-3px) scale(1.03)";
  };

  const hoverOut = (e) => {
    e.target.style.transform =
      "translateY(0px) scale(1)";
  };

  return (
    <div
      style={{
        position: "relative",

overflow: "hidden",

zIndex: 1,
        backgroundColor:
          currentTheme.backgroundColor,

        color: currentTheme.textColor,

        minHeight: "100vh",

        padding: "20px",

        transition: "0.3s",
      }}
    >
      <HexagonBackground />

<BackgroundEffects />

      <Navbar />

      <div
        style={{
          maxWidth: "1400px",

          margin: "0 auto",

          display: "flex",

          gap: "30px",

          alignItems: "flex-start",

          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            width: "350px",

            position: "sticky",

            top: "20px",

           background:
  "rgba(10,15,30,0.45)",

            backdropFilter: "blur(18px)",

            border:
              "1px solid rgba(255,255,255,0.06)",

            boxShadow:
              "0 10px 30px rgba(0,0,0,0.25)",

            padding: "20px",

            borderRadius: "24px",
          }}
        >
          <div
            style={{
              marginBottom: "30px",
            }}
          >
            <h2>
              Active Website:
              {" "}
              {websiteType.toUpperCase()}
            </h2>

            <p>
              Current Theme:
              {" "}
              {themeType.toUpperCase()}
            </p>
          </div>

          <StatsPanel
            websiteType={websiteType}
            themeType={themeType}
            activeSections={activeSections}
            customTitle={customTitle}
          />

          <div
            style={{
              marginBottom: "20px",
            }}
          >
            <TemplateCard
              title="Portfolio Website"
              description="Personal portfolio and showcase website"
              onClick={() =>
                changeWebsite("portfolio")
              }
            />

            <TemplateCard
              title="Business Website"
              description="Modern business landing page"
              onClick={() =>
                changeWebsite("business")
              }
            />

            <TemplateCard
              title="Startup Website"
              description="Startup SaaS product website"
              onClick={() =>
                changeWebsite("startup")
              }
            />
          </div>

          <div
  style={{
    marginBottom: "30px",
  }}
>
  <h2
    style={{
      marginBottom: "15px",
    }}
  >
    AI Website Generator
  </h2>

  <input
    type="text"
    placeholder="Describe your website..."
    value={aiPrompt}
    onChange={(e) =>
      setAiPrompt(
        e.target.value
      )
    }
    style={inputStyle}
  />

  <button
    style={buttonStyle}
    onMouseOver={hoverIn}
    onMouseOut={hoverOut}
    onClick={
      generateWebsiteFromPrompt
    }
  >
    Generate AI Website
  </button>
</div>

<div
  style={{
    marginTop: "20px",
    marginBottom: "20px",
  }}
>
            <button
              style={buttonStyle}
              onMouseOver={hoverIn}
              onMouseOut={hoverOut}
              onClick={() =>
                setThemeType("dark")
              }
            >
              Dark
            </button>

            <button
              style={buttonStyle}
              onMouseOver={hoverIn}
              onMouseOut={hoverOut}
              onClick={() =>
                setThemeType("light")
              }
            >
              Light
            </button>

            <button
              style={buttonStyle}
              onMouseOver={hoverIn}
              onMouseOut={hoverOut}
              onClick={() =>
                setThemeType("purple")
              }
            >
              Purple
            </button>
          </div>

          <div
            style={{
              marginTop: "20px",
              marginBottom: "20px",
            }}
          >
            <p>Background Color</p>

            <input
              type="color"
              value={
                customBackgroundColor ||
                "#000000"
              }
              onChange={(e) =>
                setCustomBackgroundColor(
                  e.target.value
                )
              }
            />

            <p>Text Color</p>

            <input
              type="color"
              value={
                customTextColor ||
                "#ffffff"
              }
              onChange={(e) =>
                setCustomTextColor(
                  e.target.value
                )
              }
            />
          </div>

          <div
            style={{
              marginBottom: "30px",
            }}
          >
            <input
              type="text"
              placeholder="Enter website title"
              value={customTitle}
              onChange={(e) =>
                setCustomTitle(
                  e.target.value
                )
              }
              style={inputStyle}
            />

            <input
              type="text"
              placeholder="Enter website subtitle"
              value={customSubtitle}
              onChange={(e) =>
                setCustomSubtitle(
                  e.target.value
                )
              }
              style={inputStyle}
            />
          </div>

          <div
            style={{
              marginBottom: "30px",
            }}
          >
            <button
              style={buttonStyle}
              onMouseOver={hoverIn}
              onMouseOut={hoverOut}
              onClick={() =>
                toggleSection("about")
              }
            >
              Toggle About
            </button>

            <button
              style={buttonStyle}
              onMouseOver={hoverIn}
              onMouseOut={hoverOut}
              onClick={() =>
                toggleSection("projects")
              }
            >
              Toggle Projects
            </button>

            <button
              style={buttonStyle}
              onMouseOver={hoverIn}
              onMouseOut={hoverOut}
              onClick={() =>
                toggleSection("services")
              }
            >
              Toggle Services
            </button>

            <button
              style={buttonStyle}
              onMouseOver={hoverIn}
              onMouseOut={hoverOut}
              onClick={exportConfiguration}
            >
              Export Configuration
            </button>

            <button
              style={buttonStyle}
              onMouseOver={hoverIn}
              onMouseOut={hoverOut}
              onClick={resetBuilder}
            >
              Reset Builder
            </button>

            <div
              style={{
                marginTop: "15px",
              }}
            >
              <input
                type="file"
                accept=".json"
                onChange={
                  importConfiguration
                }
              />
            </div>
          </div>
        </div>

        <div
          style={{
            flex: 1,
            minWidth: "300px",
          }}
        >
          {isLoading && (
            <div
              style={{
                padding: "30px",

                borderRadius: "24px",

                marginBottom: "20px",

                textAlign: "center",
background:
  "rgba(10,15,30,0.45)",

                backdropFilter: "blur(18px)",

                border:
                  "1px solid rgba(255,255,255,0.06)",

                boxShadow:
                  "0 10px 30px rgba(0,0,0,0.25)",
              }}
            >
              <h2>
                Generating Website...
              </h2>

              <p>
                Building AI powered layout
              </p>
            </div>
          )}

          <div
            style={{
              marginTop: "20px",

              padding: "30px",

              borderRadius: "24px",

             background:
  "rgba(10,15,30,0.45)",

              backdropFilter: "blur(18px)",

              border:
                "1px solid rgba(255,255,255,0.06)",

              boxShadow:
                "0 10px 30px rgba(0,0,0,0.25)",
            }}
          >
            <h2
              style={{
                marginBottom: "30px",
              }}
            >
              Generated Website Preview
            </h2>

            <HeroSection
              title={
                customTitle ||
                currentWebsite.title
              }
              subtitle={
                customSubtitle ||
                currentWebsite.subtitle
              }
            />

            <div
              style={{
                display: "flex",

                flexWrap: "wrap",

                gap: "20px",

                justifyContent: "center",
              }}
            >
              {activeSections.map(
                (section, index) => (
                  <SectionRenderer
                    key={index}
                    section={section}
                  />
                )
              )}
            </div>

            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;