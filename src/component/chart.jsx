import React from "react";
import {
  BAR_MARGIN,
  BAR_WIDTH,
  CHART_HEIGHT,
  LINE_CHART_WIDTH,
} from "../lib/constant";
import {
  calculateYPosition,
  getNestedValue,
  highestValue,
} from "../lib/utility";

const Chart = ({ children, data, valueKey, labelKey, type = "bar" }) => {
  const max = highestValue(data, valueKey);
  const pointGap = LINE_CHART_WIDTH / (data.length - 1);
  const width =
    type === "bar" ? data.length * (BAR_MARGIN + BAR_WIDTH) : LINE_CHART_WIDTH;

  // calculate x and y position
  const precomputedData = data.map((item, i) => {
    const value = getNestedValue(item, valueKey);
    const yPosition = calculateYPosition(value, max, CHART_HEIGHT);
    const height = CHART_HEIGHT - yPosition;
    const xPosition =
      type === "bar" ? i * (BAR_MARGIN + BAR_MARGIN) : i * pointGap;
    const label = getNestedValue(item, labelKey);
    return {
      ...item,
      value,
      yPosition,
      xPosition,
      label,
      width,
      type,
      height,
      value,
    };
  });

  return (
    <svg
      viewBox={`-60 0 ${LINE_CHART_WIDTH} ${CHART_HEIGHT + 60}`}
      width="100%"
      height="70%"
      preserveAspectRatio="xMidYMax meet"
    >
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { precomputedData, max })
      )}
    </svg>
  );
};

export default Chart;
