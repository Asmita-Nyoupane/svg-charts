import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import { CHART_HEIGHT, LINE_CHART_WIDTH } from "../../lib/constant";
import { getNestedValue } from "../../lib/utility";

const D3LineChart = ({ data, labelKey, valueKey }) => {
  const margin = { top: 20, right: 20, bottom: 30, left: 40 };
  const width = LINE_CHART_WIDTH - margin.left - margin.right;
  const height = CHART_HEIGHT - margin.top - margin.bottom;

  const gx = useRef();
  const gy = useRef();
  // Create x-scale for labels
  const x = d3
    .scalePoint()
    .domain(data.map((d) => getNestedValue(d, labelKey)))
    .range([margin.left, width - margin.right])
    .padding(0.1);

  // create y-scale
  const y = d3.scaleLinear(
    d3.extent(data, (d) => getNestedValue(d, valueKey)),
    [height - margin.bottom, margin.top]
  );

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
      <g ref={gx} transform={`translate(0,${height - margin.bottom})`} />
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
