import React from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { getNestedValue } from "../../lib/utility";

// Custom Tooltip to display country name and population
export const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const country = label;
    const population = payload[0].value;
    return (
      <div
        style={{
          background: "#fff",
          border: "1px solid #ccc",
          padding: "10px",
          borderRadius: "4px",
          color: " black",
        }}
      >
        <p style={{ margin: 0, fontWeight: "bold" }}>{`Country: ${country}`}</p>
        <p style={{ margin: 0 }}>{`Population: ${population}`}</p>
      </div>
    );
  }

  return null;
};

const RechartLineChart = ({ barData, labelKey, valueKey }) => {
  const data = barData.map((item) => ({
    country: getNestedValue(item, labelKey),
    population: getNestedValue(item, valueKey),
  }));

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="country" />
        <YAxis />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        <Line
          type="monotone"
          dataKey="population"
          stroke="#03012b"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default RechartLineChart;
