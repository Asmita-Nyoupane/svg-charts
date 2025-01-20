import React from "react";
import { getNestedValue } from "../../lib/utility";
import DThreeChart from "./d3-chart";
import * as d3 from "d3";
const D3BarChart = ({ data, valueKey, labelKey }) => {
  const renderBars = (svg, { x, y, height, margin }) => {
    svg
      .append("g")
      .attr("class", "label")
      .attr("transform", `translate(${margin.left},${margin.top + height})`)
      .call(d3.axisBottom(x));

    svg
      .append("g")
      .attr("class", "label")
      .attr("transform", `translate(${margin.left},${margin.top})`)
      .call(d3.axisLeft(y));
    svg
      .selectAll(".bar")
      .data(data)
      .enter()
      .append("rect")
      .attr("class", "bar")
      .attr("x", (d) => margin.left + x(getNestedValue(d, labelKey)))
      .attr("y", (d) => margin.top + y(getNestedValue(d, valueKey)))
      .attr("width", x.bandwidth())
      .attr("height", (d) => height - y(getNestedValue(d, valueKey)));
  };

  return (
    <DThreeChart
      data={data}
      valueKey={valueKey}
      labelKey={labelKey}
      renderChartElements={renderBars}
      chartType="bar"
    />
  );
};

export default D3BarChart;
