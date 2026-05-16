import { useEffect, useState } from "react";

function BackgroundEffects() {
  const [position, setPosition] =
    useState({
      x: 0,
      y: 0,
    });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({
        x: e.clientX / 25,
        y: e.clientY / 25,
      });
    };

    window.addEventListener(
      "mousemove",
      handleMouseMove
    );

    return () => {
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );
    };
  }, []);

  const blobStyle = {
    position: "fixed",

    borderRadius: "50%",

    filter: "blur(120px)",

    zIndex: -1,

    transition: "0.2s ease-out",

    pointerEvents: "none",
  };

  return (
    <>
      <div
        style={{
          ...blobStyle,

          width: "450px",

          height: "450px",

          background:
            "radial-gradient(circle,#9333ea,#7e22ce)",

          top: `${-120 + position.y}px`,

          left: `${-120 + position.x}px`,

          opacity: 0.9,
        }}
      />

      <div
        style={{
          ...blobStyle,

          width: "500px",

          height: "500px",

          background:
            "radial-gradient(circle,#06b6d4,#2563eb)",

          bottom: `${-140 - position.y}px`,

          right: `${-140 - position.x}px`,

          opacity: 0.8,
        }}
      />

      <div
        style={{
          ...blobStyle,

          width: "350px",

          height: "350px",

          background:
            "radial-gradient(circle,#60a5fa,#2563eb)",

          top: `calc(40% + ${position.y}px)`,

          left: `calc(50% + ${position.x}px)`,

          opacity: 0.7,
        }}
      />
    </>
  );
}

export default BackgroundEffects;