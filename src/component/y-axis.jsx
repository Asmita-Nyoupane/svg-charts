import React from "react";
import { CHART_HEIGHT } from "../lib/constant";
import AxisLabel from "./axis-label";

const YAxis = ({ ticks, heighestValue }) => {
  return (
    <>
      <line
        x1={0}
        y1={0}
        x2={0}
        y2={CHART_HEIGHT}
        stroke="black"
        strokeWidth={"1"}
      />
      {/* Render Vertical Axis Ticks  */}
      {ticks.map((tickValue, index) => {
        const yPosition =
          CHART_HEIGHT - (tickValue / heighestValue) * (CHART_HEIGHT - 50);
        return (
          <g key={`tick-${index}`} transform={`translate(0, ${yPosition})`}>
            <line x1={0} x2={-6} stroke="black" />
            <text textAnchor="end" x={-10}>
              {tickValue.toLocaleString()}
            </text>
          </g>
        );
      })}
    </>
  );
};

export default YAxis;
