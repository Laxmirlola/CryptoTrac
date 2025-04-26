import React from "react";

const MiniChart = ({ points }) => {
  if (!points || points.length === 0) return null;

  const width = 100;
  const height = 40;
  const max = Math.max(...points);
  const min = Math.min(...points);

  // Normalize points between 0 and height
  const normalizedPoints = points.map(
    (p) => height - ((p - min) / (max - min)) * height
  );

  const pointString = normalizedPoints
    .map(
      (p, i) =>
        `${(i * (width / (points.length - 1))).toFixed(2)},${p.toFixed(2)}`
    )
    .join(" ");

  return (
    <svg width={width} height={height}>
      <polyline
        fill="none"
        stroke="#3b8"
        strokeWidth="2"
        points={pointString}
      />
    </svg>
  );
};

export default MiniChart;
