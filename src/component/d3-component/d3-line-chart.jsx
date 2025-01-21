import React from "react";
import * as d3 from "d3";
import { getNestedValue } from "../../lib/utility";

const D3LineChart = ({ data, labelKey, valueKey, x, y }) => {
  // Create line generator
  const line = d3
    .line()
    .x((d) => x(getNestedValue(d, labelKey)))
    .y((d) => y(getNestedValue(d, valueKey)));

  return (
    <path fill="none" stroke="currentColor" strokeWidth="1.5" d={line(data)} />
  );
};

export default D3LineChart;
