import React from "react";
import { generateTicks, getNestedValue } from "../lib/utility";
import { CHART_HEIGHT, NUMBER_OF_TICKS } from "../lib/constant";
import HorizontalAxis from "./horizontal-axis";
import VerticalAxis from "./vertical-axis";

const Chart = ({ data, valueKey, width, children }) => {
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

      {children(heighestValue, ticks)}
    </svg>
  );
};

export default Chart;
