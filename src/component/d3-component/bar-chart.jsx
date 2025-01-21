import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import { CHART_HEIGHT, LINE_CHART_WIDTH } from "../../lib/constant";
import { getNestedValue } from "../../lib/utility";

const D3BarChart = ({ data, labelKey, valueKey }) => {
  const margin = { top: 20, right: 20, bottom: 30, left: 40 };
  const width = LINE_CHART_WIDTH - margin.left - margin.right;
  const height = CHART_HEIGHT - margin.top - margin.bottom;

  const gx = useRef();
  const gy = useRef();
  // Create x-scale for labels
  const x = d3
    .scaleBand()
    .domain(data.map((d) => getNestedValue(d, labelKey)))
    .range([margin.left, width + margin.right])
    .padding(0.1);

  // create y-scale
  const y = d3.scaleLinear(
    d3.extent(data, (d) => getNestedValue(d, valueKey)),
    [height, margin.top]
  );

  useEffect(() => void d3.select(gx.current).call(d3.axisBottom(x)), [gx, x]);
  useEffect(() => void d3.select(gy.current).call(d3.axisLeft(y)), [gy, y]);

  return (
    <svg
      viewBox={`-60 -10 ${LINE_CHART_WIDTH} ${CHART_HEIGHT}`}
      width="100%"
      height="70%"
      preserveAspectRatio="xMidYMax meet"
    >
      {/* X-axis */}
      <g ref={gx} transform={`translate(0,${height})`} />
      {/* Y-axis */}
      <g ref={gy} transform={`translate(${margin.left},0)`} />

      {data.map((d, i) => {
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
      })}
    </svg>
  );
};

export default D3BarChart;
