import React from "react";
import { getNestedValue } from "../lib/utility";
import AxisLabel from "./axis-label";
import { BAR_MARGIN, BAR_WIDTH, CHART_HEIGHT } from "../lib/constant";

const BarChart = ({ data, valueKey, labelKey, heighestValue, ticks }) => {
  return (
    <>
      {/* Horizontal rendering of labels */}
      {data?.map((item, index) => (
        <g
          key={`x-tick-${index}`}
          transform={`translate(${
            index * (BAR_WIDTH + BAR_MARGIN) + BAR_WIDTH / 2
          }, ${CHART_HEIGHT})`}
        >
          <line x1={0} x2={0} y1={0} y2={6} stroke="black" />
          <AxisLabel
            key={index}
            y={15}
            textAnchor={"middle"}
            label={getNestedValue(item, labelKey)}
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
