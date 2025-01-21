import React from "react";
import "./App.css";
import D3BarChart from "./component/d3-component/bar-chart";
import { barData } from "./lib/data";
import D3LineChart from "./component/d3-component/d3-line-chart";
const valueKey = "stats.value";
const labelKey = "country.name";
const DThreeApp = () => {
  return (
    <>
      <D3BarChart data={barData} valueKey={valueKey} labelKey={labelKey} />
      {/* <D3LineChart data={barData} valueKey={valueKey} labelKey={labelKey} /> */}
    </>
  );
};

export default DThreeApp;
