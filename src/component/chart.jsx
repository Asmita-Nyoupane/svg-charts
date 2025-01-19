import React from "react";
import { generateTicks, getNestedValue } from "../lib/utility";
import {
  BAR_MARGIN,
  BAR_WIDTH,
  CHART_HEIGHT,
  NUMBER_OF_TICKS,
} from "../lib/constant";
import HorizontalAxis from "./horizontal-axis";
import VerticalAxis from "./vertical-axis";
import AxisLabel from "./axis-label";

const Chart = ({ data, valueKey, width, children, labelKey }) => {
  const heighestValue = data.reduce((acc, curr) => {
    const value = getNestedValue(curr, valueKey);
    return value > acc ? value : acc;
  }, 0);

  const ticks = generateTicks(heighestValue, NUMBER_OF_TICKS);
  return (
    <svg
      viewBox={`-60 0 ${width + 80} ${CHART_HEIGHT + 60}`}
      width="100%"
      height="70%"
      preserveAspectRatio="xMidYMax meet"
    >
      <HorizontalAxis width={width} height={CHART_HEIGHT} />
      <VerticalAxis height={CHART_HEIGHT} />
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

      {children(heighestValue, ticks)}
    </svg>
  );
};

export default Chart;
