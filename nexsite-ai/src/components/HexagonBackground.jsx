function HexagonBackground() {
  return (
    <div className="hexagon-bg">
      {Array.from({ length: 120 }).map(
        (_, index) => (
          <span
            key={index}
            className="hexagon"
          />
        )
      )}
    </div>
  );
}

export default HexagonBackground;