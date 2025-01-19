import React from "react";
import { getNestedValue } from "../lib/utility";

import { CHART_HEIGHT, LINE_CHART_WIDTH } from "../lib/constant";
import XAxis from "./x-axis";

const LineChart = ({ data, labelKey, valueKey, heighestValue }) => {
  // Calculate points
  const pointGap = LINE_CHART_WIDTH / (data.length - 1);

  const points = data.map((item, index) => {
    const value = getNestedValue(item, valueKey);
    const x = index * pointGap;
    const y = CHART_HEIGHT - (value / heighestValue) * (CHART_HEIGHT - 50);
    return { x, y, label: getNestedValue(item, labelKey), value };
  });

  // Create line path
  const linePath = points
    .map((point, index) => `${index === 0 ? "M" : "L"} ${point.x} ${point.y}`)
    .join(" ");

  return (
    <>
      <XAxis
        width={LINE_CHART_WIDTH}
        data={data}
        labelKey={labelKey}
        type="line"
        pointGap={pointGap}
      />
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
