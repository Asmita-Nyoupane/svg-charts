import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { getNestedValue } from "../../lib/utility";
import { CustomTooltip } from "./rechart-line-chart";

const RechartBarChart = ({ barData, labelKey, valueKey }) => {
  const data = barData.map((item) => ({
    country: getNestedValue(item, labelKey),
    population: getNestedValue(item, valueKey),
  }));
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
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

        <Bar
          dataKey="population"
          fill="#0b2f19"
          activeBar={<Rectangle fill="gold" stroke="purple" />}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default RechartBarChart;
