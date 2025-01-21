import React from "react";
import { getNestedValue } from "../../lib/utility";

const D3BarChart = ({ data, labelKey, valueKey, x, y, height }) => {
  return data.map((d, i) => {
    const label = getNestedValue(d, labelKey);
    const value = getNestedValue(d, valueKey);
    return (
      <rect
        key={i}
        x={x(label)}
        y={y(value)}
        width={x.bandwidth()}
        height={height - y(value)}
        fill="white"
      />
    );
  });
};

export default D3BarChart;
