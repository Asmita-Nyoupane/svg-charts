import React from "react";
import * as d3 from "d3";
import { getNestedValue } from "../../lib/utility";
import DThreeChart from "./d3-chart";

const D3LineChart = ({ data, labelKey, valueKey }) => {
  const renderLine = (svg, { x, y, height }) => {
    // Create line generator
    const line = d3
      .line()
      .x((d) => x(getNestedValue(d, labelKey)))
      .y((d) => y(getNestedValue(d, valueKey)));
    // Append x-axis
    svg
      .append("g")
      .attr("class", "label")
      .attr("transform", `translate(0,${height})`)
      .call(d3.axisBottom(x));

    // Append y-axis
    svg.append("g").call(d3.axisLeft(y)).attr("class", "label");

    // Append the path for the line
    svg
      .append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "steelblue")
      .attr("stroke-width", 1.5)
      .attr("d", line);
  };
  return (
    <DThreeChart
      data={data}
      labelKey={labelKey}
      valueKey={valueKey}
      renderChartElements={renderLine}
      chartType="line"
    />
  );
};

export default D3LineChart;
