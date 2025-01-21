import React from "react";
import RechartLineChart from "./component/rechart-component/rechart-line-chart";
import { barData } from "./lib/data";
import RechartBarChart from "./component/rechart-component/rechart-bar-chart";
const valueKey = "stats.value";
const labelKey = "country.name";
const RechartApp = () => {
  return (
    <div className="container">
      {/* <RechartLineChart
        barData={barData}
        labelKey={labelKey}
        valueKey={valueKey}
      /> */}
      <RechartBarChart
        barData={barData}
        labelKey={labelKey}
        valueKey={valueKey}
      />
    </div>
  );
};

export default RechartApp;
