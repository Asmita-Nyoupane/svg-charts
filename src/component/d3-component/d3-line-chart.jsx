import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import { getNestedValue } from "../../lib/utility";
import { CHART_HEIGHT, LINE_CHART_WIDTH, margin } from "../../lib/constant";
import { useCalculateY } from "../../hooks/use-calculate-y";

const D3LineChart = ({ data, labelKey, valueKey }) => {
  const width = LINE_CHART_WIDTH - margin.left - margin.right;
  const height = CHART_HEIGHT - margin.top - margin.bottom;
  const gx = useRef();
  const gy = useRef();
  const x = d3
    .scaleBand()
    .domain(data.map((d) => getNestedValue(d, labelKey)))
    .range([margin.left, width + margin.right])
    .padding(0.1);
  const y = useCalculateY(data, valueKey, height, margin.top);
  // Create line generator
  const line = d3
    .line()
    .x((d) => x(getNestedValue(d, labelKey)))
    .y((d) => y(getNestedValue(d, valueKey)));

  useEffect(() => void d3.select(gx.current).call(d3.axisBottom(x)), [gx, x]);
  useEffect(() => void d3.select(gy.current).call(d3.axisLeft(y)), [gy, y]);

  return (
    <svg
      viewBox={`-60 -10 ${LINE_CHART_WIDTH} ${CHART_HEIGHT}`}
      width="100%"
      height="70%"
      preserveAspectRatio="xMidYMax meet"
    >
      <g ref={gx} transform={`translate(0,${height})`} />
      <g ref={gy} transform={`translate(${margin.left},0)`} />
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        d={line(data)}
      />
    </svg>
  );
};

export default D3LineChart;
