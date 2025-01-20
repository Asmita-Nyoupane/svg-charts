import React from "react";

const LineChart = ({ precomputedData }) => {
  // Create line path
  const linePath = precomputedData
    .map(
      (point, index) =>
        `${index === 0 ? "M" : "L"} ${point.xPosition} ${point.yPosition}`
    )
    .join(" ");

  return (
    <>
      {/* Draw Line */}
      <path d={linePath} fill="none" stroke="blueviolet" strokeWidth="2" />

      {/* Draw Points */}
      {precomputedData.map((point, index) => (
        <circle
          key={`point-${index}`}
          cx={point.xPosition}
          cy={point.yPosition}
          r={2}
          fill="red"
        />
      ))}
    </>
  );
};

export default LineChart;
