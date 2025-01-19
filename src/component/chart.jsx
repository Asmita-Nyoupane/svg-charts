import React from "react";
import { generateTicks, getNestedValue } from "../lib/utility";
import { CHART_HEIGHT, NUMBER_OF_TICKS } from "../lib/constant";

import XAxis from "./x-axis";
import YAxis from "./y-axis";

const Chart = ({ data, valueKey, width, children, labelKey }) => {
  // function to calucate maximum value
  const heighestValue = data.reduce((acc, curr) => {
    const value = getNestedValue(curr, valueKey);
    return value > acc ? value : acc;
  }, 0);

  const ticks = generateTicks(heighestValue, NUMBER_OF_TICKS);

  return (
    <svg
      viewBox={`-60 0 ${width} ${CHART_HEIGHT + 60}`}
      width="100%"
      height="70%"
      preserveAspectRatio="xMidYMax meet"
    >
      <YAxis ticks={ticks} heighestValue={heighestValue} />

      {children(heighestValue, ticks)}
    </svg>
  );
};

export default Chart;
