import React from "react";
import {
  BAR_MARGIN,
  BAR_WIDTH,
  CHART_HEIGHT,
  LINE_CHART_WIDTH,
} from "../lib/constant";
import { getNestedValue } from "../lib/utility";

const XAxis = ({ width, data, labelKey, type = "line" }) => {
  // Calculate points
  const pointGap = LINE_CHART_WIDTH / (data.length - 1);
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
      {data?.map((item, index) => (
        <g
          key={`x-tick-${index}`}
          transform={`translate(
            ${
              type === "line"
                ? index * pointGap
                : index * (BAR_WIDTH + BAR_MARGIN) + BAR_WIDTH / 2
            }, ${CHART_HEIGHT})`}
        >
          <line x1={0} x2={0} y1={0} y2={6} stroke="black" />
          <text textAnchor="middle" y={15}>
            {getNestedValue(item, labelKey)}
          </text>
        </g>
      ))}
    </>
  );
};

export default XAxis;
