import React from "react";

const HorizontalAxis = ({ width, height }) => {
  return (
    <line
      x1={0}
      y1={height}
      x2={width}
      y2={height}
      stroke="black"
      strokeWidth={"1"}
    />
  );
};

export default HorizontalAxis;
