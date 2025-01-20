import React from "react";
import { CHART_HEIGHT, NUMBER_OF_TICKS } from "../lib/constant";
import { generateTicks } from "../lib/utility";

const YAxis = ({ max }) => {
  const ticks = generateTicks(max, NUMBER_OF_TICKS);
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
          CHART_HEIGHT - (tickValue / max) * (CHART_HEIGHT - 50);
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
