import React from "react";

const AxisLabel = ({ x, y, label, textAnchor }) => {
  console.log("🚀 ~ AxisLabel ~ label,:", label);
  return (
    <text x={x} y={y} fontSize={"10"} fill="black" textAnchor={textAnchor}>
      {label}
    </text>
  );
};

export default AxisLabel;
