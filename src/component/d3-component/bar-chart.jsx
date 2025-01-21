import React, { useEffect, useRef } from "react";
import { getNestedValue } from "../../lib/utility";
import { CHART_HEIGHT, LINE_CHART_WIDTH, margin } from "../../lib/constant";
import * as d3 from "d3";
import { useCalculateY } from "../../hooks/use-calculate-y";
const D3BarChart = ({ data, labelKey, valueKey }) => {
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
      <g>
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
      </g>
    </svg>
  );
};

export default D3BarChart;
