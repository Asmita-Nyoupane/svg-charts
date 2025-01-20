import React from "react";
import { BAR_WIDTH } from "../lib/constant";

const BarChart = ({ precomputedData, max, value }) => {
  return (
    <>
      {precomputedData.map((item, index) => {
        return (
          <rect
            key={`bar-${index}`}
            x={item.xPosition}
            y={item.yPosition}
            width={BAR_WIDTH}
            height={item.height}
            fill={value === max ? "red" : "blueviolet"}
          />
        );
      })}
    </>
  );
};

export default BarChart;
