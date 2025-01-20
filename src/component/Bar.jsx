import React from "react";
import {
  calculateYPosition,
  getNestedValue,
  highestValue,
} from "../lib/utility";
import { BAR_MARGIN, BAR_WIDTH, CHART_HEIGHT } from "../lib/constant";

const BarChart = ({ data, valueKey }) => {
  const max = highestValue(data, valueKey);
  return (
    <>
      {data.map((item, index) => {
        const value = getNestedValue(item, valueKey);
        const yPosition = calculateYPosition(value, max, CHART_HEIGHT);
        const scaledHeight = CHART_HEIGHT - yPosition;

        return (
          <rect
            key={`bar-${index}`}
            x={index * (BAR_WIDTH + BAR_MARGIN)}
            y={yPosition}
            width={BAR_WIDTH}
            height={scaledHeight}
            fill={value === max ? "red" : "blueviolet"}
          />
        );
      })}
    </>
  );
};

export default BarChart;
