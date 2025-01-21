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
      {data.map((d, i) => (
        <circle key={i} cx={x(i)} cy={y(d)} r="2.5" />
      ))}
    </>
  );
};

export default LineChart;
