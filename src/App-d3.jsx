import React from "react";
import "./App.css";
import D3BarChart from "./component/d3-component/bar-chart";
import { barData } from "./lib/data";
import D3ThreeChart from "./component/d3-component/d3-chart";
import D3LineChart from "./component/d3-component/d3-line-chart";

const valueKey = "stats.value";
const labelKey = "country.name";
const chartType = "line";

const DThreeApp = () => {
  return (
    <>
      <D3ThreeChart
        data={barData}
        labelKey={labelKey}
        valueKey={valueKey}
        chartType={chartType}
      >
        {(x, y, height, chartType) =>
          chartType === "bar" ? (
            <D3BarChart
              data={barData}
              labelKey={labelKey}
              valueKey={valueKey}
              x={x}
              y={y}
              height={height}
              chartType={chartType}
            />
          ) : (
            <D3LineChart
              data={barData}
              labelKey={labelKey}
              valueKey={valueKey}
              x={x}
              y={y}
              height={height}
              chartType={chartType}
            />
          )
        }
      </D3ThreeChart>
    </>
  );
};

export default DThreeApp;
