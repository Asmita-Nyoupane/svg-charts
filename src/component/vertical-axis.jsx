import React from "react";

const VerticalAxis = ({ height }) => {
  return (
    <line x1={0} y1={0} x2={0} y2={height} stroke="black" strokeWidth={"1"} />
  );
};

export default VerticalAxis;
