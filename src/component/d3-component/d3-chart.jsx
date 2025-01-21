import React, { useEffect, useRef } from "react";
import { CHART_HEIGHT, LINE_CHART_WIDTH } from "../../lib/constant";
import { getNestedValue } from "../../lib/utility";
import * as d3 from "d3";

const D3ThreeChart = ({
  data,
  labelKey,
  valueKey,
  chartType = "line",

  children,
}) => {
  const margin = { top: 20, right: 20, bottom: 30, left: 40 };
  const width = LINE_CHART_WIDTH - margin.left - margin.right;
  const height = CHART_HEIGHT - margin.top - margin.bottom;

  const gx = useRef();
  const gy = useRef();
  // create y-scale
  const y = d3.scaleLinear(
    d3.extent(data, (d) => getNestedValue(d, valueKey)),
    [height, margin.top]
  );
  const x =
    chartType === "line"
      ? d3
          .scalePoint()
          .domain(data.map((d) => getNestedValue(d, labelKey)))
          .range([margin.left, width + margin.right])
          .padding(0.1)
      : d3
          .scaleBand()
          .domain(data.map((d) => getNestedValue(d, labelKey)))
          .range([margin.left, width + margin.right])
          .padding(0.1);
  useEffect(() => void d3.select(gx.current).call(d3.axisBottom(x)), [gx, x]);
  useEffect(() => void d3.select(gy.current).call(d3.axisLeft(y)), [gy, y]);

  // //  transformation based on chart type
  // const xTransform = chartType === "bar" ? height : height - margin.bottom;

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

      {children(x, y, height, chartType)}
    </svg>
  );
};

export default D3ThreeChart;
