export default function GridBackground() {
  return (
    <div style={{
      position: "absolute",
      inset: 0,
      zIndex: 0,
      opacity: 0.15,
      backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.2) 1px, transparent 1px)",
      backgroundSize: "40px 40px"
    }} />
  );
}
