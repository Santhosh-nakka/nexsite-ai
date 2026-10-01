export default function DotsBackground() {
  return (
    <div style={{
      position: "absolute",
      inset: 0,
      zIndex: 0,
      opacity: 0.3,
      backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.4) 2px, transparent 2px)",
      backgroundSize: "30px 30px"
    }} />
  );
}
