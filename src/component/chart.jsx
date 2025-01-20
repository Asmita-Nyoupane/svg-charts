import React from "react";
import { CHART_HEIGHT } from "../lib/constant";

const Chart = ({ width, children }) => {
  return (
    <svg
      viewBox={`-60 0 ${width} ${CHART_HEIGHT + 60}`}
      width="100%"
      height="70%"
      preserveAspectRatio="xMidYMax meet"
    >
      {children}
    </svg>
  );
};

export default Chart;
