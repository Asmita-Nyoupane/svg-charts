import React from "react";
import { getNestedValue } from "../lib/utility";
import { BAR_MARGIN, BAR_WIDTH, CHART_HEIGHT } from "../lib/constant";
import XAxis from "./x-axis";

const BarChart = ({ data, valueKey, heighestValue, labelKey }) => {
  const barChartWidth = data.length * (BAR_MARGIN + BAR_WIDTH);
  return (
    <>
      <XAxis
        width={barChartWidth}
        data={data}
        labelKey={labelKey}
        type={"bar"}
      />
      {data.map((item, index) => {
        const barValue = getNestedValue(item, valueKey);
        const scaledHeight = (barValue / heighestValue) * (CHART_HEIGHT - 50);
        const yPosition = CHART_HEIGHT - scaledHeight;

        return (
          <rect
            key={`bar-${index}`}
            x={index * (BAR_WIDTH + BAR_MARGIN)}
            y={yPosition}
            width={BAR_WIDTH}
            height={scaledHeight}
            fill={barValue === heighestValue ? "red" : "blueviolet"}
          />
        );
      })}
    </>
  );
};

export default BarChart;
