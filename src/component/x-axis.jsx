import React from "react";
import { BAR_WIDTH, CHART_HEIGHT } from "../lib/constant";

const XAxis = ({ width, precomputedData, type = "bar" }) => {
  return (
    <>
      <line
        x1={0}
        y1={CHART_HEIGHT}
        x2={width}
        y2={CHART_HEIGHT}
        stroke="black"
        strokeWidth={"1"}
      />
      {/* Horizontal rendering of labels */}
      {precomputedData?.map((item, index) => (
        <g
          key={`x-tick-${index}`}
          transform={`translate(
            ${
              type === "bar" ? item.xPosition + BAR_WIDTH / 2 : item.xPosition
            }, ${CHART_HEIGHT})`}
        >
          <line x1={0} x2={0} y1={0} y2={6} stroke="black" />
          <text textAnchor="middle" y={15}>
            {item.label}
          </text>
        </g>
      ))}
    </>
  );
};

export default XAxis;
