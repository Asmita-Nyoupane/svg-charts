import React from "react";
import {
  calculateYPosition,
  getNestedValue,
  highestValue,
} from "../lib/utility";
import { CHART_HEIGHT, LINE_CHART_WIDTH } from "../lib/constant";

const LineChart = ({ data, valueKey }) => {
  const max = highestValue(data, valueKey);
  const pointGap = LINE_CHART_WIDTH / (data.length - 1);

  // Calculate points
  const points = data.map((item, index) => {
    const value = getNestedValue(item, valueKey);
    const x = index * pointGap;
    const y = calculateYPosition(value, max, CHART_HEIGHT);

    return { x, y };
  });

  // Create line path
  const linePath = points
    .map((point, index) => `${index === 0 ? "M" : "L"} ${point.x} ${point.y}`)
    .join(" ");

  return (
    <>
      {/* Draw Line */}
      <path d={linePath} fill="none" stroke="blueviolet" strokeWidth="2" />

      {/* Draw Points */}
      {points.map((point, index) => (
        <circle
          key={`point-${index}`}
          cx={point.x}
          cy={point.y}
          r={2}
          fill="red"
        />
      ))}
    </>
  );
};

export default LineChart;
