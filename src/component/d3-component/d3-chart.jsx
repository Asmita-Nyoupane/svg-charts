import React, { useEffect } from "react";
import { getNestedValue } from "../../lib/utility";
import { CHART_HEIGHT, LINE_CHART_WIDTH } from "../../lib/constant";
import * as d3 from "d3";
const DThreeChart = ({
  data,
  renderChartElements,
  labelKey,
  valueKey,
  chartType = "line",
}) => {
  useEffect(() => {
    const svg = d3.select("svg");
    const margin = { top: 20, right: 20, bottom: 30, left: 40 };
    const width = LINE_CHART_WIDTH - margin.left - margin.right;
    const height = CHART_HEIGHT - margin.top - margin.bottom;
    // Clear previous content
    svg.selectAll("*").remove();

    // Create x-scale
    const x =
      chartType === "bar"
        ? d3
            .scaleBand()
            .domain(data.map((d) => getNestedValue(d, labelKey)))
            .range([0, width])
            .padding(0.1)
        : d3
            .scalePoint()
            .domain(data.map((d) => getNestedValue(d, labelKey)))
            .range([0, width])
            .padding(0.5);

    // Create y-scale
    const y = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => getNestedValue(d, valueKey))])
      .nice()
      .range([height, 0]);

    renderChartElements(svg, { x, y, margin, width, height });
  }, [data, labelKey, valueKey, renderChartElements]);
  return (
    <svg
      viewBox={`-60 -10 ${LINE_CHART_WIDTH} ${CHART_HEIGHT}`}
      width="100%"
      height="70%"
      preserveAspectRatio="xMidYMax meet"
    ></svg>
  );
};

export default DThreeChart;
