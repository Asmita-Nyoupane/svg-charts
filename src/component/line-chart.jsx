import React from "react";
import { getNestedValue } from "../lib/utility";
import AxisLabel from "./axis-label";
import { CHART_HEIGHT, LINE_CHART_WIDTH } from "../lib/constant";

const LineChart = ({ data, labelKey, valueKey, heighestValue, ticks }) => {
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
      {/* Render Horizontal axis */}
      {points.map((point, index) => (
        <g
          key={`x-tick-${index}`}
          transform={`translate(${point.x}, ${CHART_HEIGHT})`}
        >
          <line x1={0} x2={0} y1={0} y2={6} stroke="black" />
          <AxisLabel
            key={index}
            y={15}
            textAnchor={"middle"}
            label={point.label}
          />
        </g>
      ))}

      {/* Render Vertical Axis Ticks  */}
      {ticks.map((tickValue, index) => {
        const yPosition =
          CHART_HEIGHT - (tickValue / heighestValue) * (CHART_HEIGHT - 50);

        return (
          <g key={`tick-${index}`} transform={`translate(0, ${yPosition})`}>
            <line x1={0} x2={-6} stroke="black" />
            <AxisLabel
              key={`tick-${index}`}
              x={-10}
              textAnchor={"end"}
              label={tickValue.toLocaleString()}
            />
          </g>
        );
      })}
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
