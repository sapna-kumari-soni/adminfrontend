import React from "react";
import {
  PieChart,
  Pie,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from "recharts";
import "./Chart.css"; // Include your CSS file for styling

// Sample data with sales of different countries
const data = [
  { country: "USA", sales: 240 },
  { country: "Canada", sales: 180 },
  { country: "UK", sales: 140 },
  { country: "Germany", sales: 100 },
  { country: "France", sales: 160 },
  { country: "Japan", sales: 200 },
  { country: "Australia", sales: 130 },
  { country: "India", sales: 220 },
];

// Array of colors for the PieChart
const COLORS = [
  "#8884d8",
  "#82ca9d",
  "#ffc658",
  "#d0ed57",
  "#8dd1e1",
  "#a4de6c",
  "#d0ed57",
  "#ffc658",
];

const SalesPieChart = () => {
  const formatTooltipValue = (value) => `$${value}k`;

  return (
    <div className="pie-chart">
      <div className="pie-chart-info">
        <h5 className="pie-chart-title">Sales by Country</h5>
      </div>
      <div className="pie-chart-wrapper">
        <ResponsiveContainer width="100%" height={400}>
          <PieChart>
            <Pie
              data={data}
              dataKey="sales"
              nameKey="country"
              cx="40%"
              cy="50%"
              outerRadius={150}
              fill="#8884d8"
              label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip formatter={formatTooltipValue} />
            <Legend
               layout="vertical"        /* Legend layout as vertical */
               verticalAlign="middle"   /* Align legend vertically in the middle */
               align="right"            /* Align legend to the right */
               iconType="circle"
               iconSize={10}
               wrapperStyle={{ paddingLeft: 30, maxHeight: 300 }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SalesPieChart;
