import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { FaArrowUpLong } from "react-icons/fa6";
import "./Chart.css";

const data = [
  { agent: "Agent A", expectedSales: 150 },
  { agent: "Agent B", expectedSales: 200 },
  { agent: "Agent C", expectedSales: 170 },
  { agent: "Agent D", expectedSales: 210 },
  { agent: "Agent E", expectedSales: 790 },
  { agent: "Agent F", expectedSales: 520 },
  { agent: "Agent G", expectedSales: 440 },
  { agent: "Agent H", expectedSales: 730 },
  { agent: "Agent I", expectedSales: 350 },
];

const ABarChart = () => {
  const formatTooltipValue = (value) => {
    return `$${value}k`;
  };

  const formatYAxisLabel = (value) => {
    return `$${value}k`;
  };

  return (
    <div className="bar-chart">
      <div className="bar-chart-info">
        <h5 className="bar-chart-title">XYZ Sales</h5>
      </div>
      <div className="bar-chart-wrapper">
        <ResponsiveContainer width="100%" height={500}>
          <BarChart
            width={500}
            height={200}
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 60,
              bottom: 60,
            }}
          >
            <XAxis
              padding={{ left: 10 }}
              dataKey="agent"
              tickSize={0}
              tick={{ fill: "#676767", fontSize: 14 }}
              label={{  
                value: "Agents",
                position: "bottom",
                offset: 20,  // Increased offset for better spacing
                style: { fontSize: 16, fill: "#333" },
              }}

            />
            <YAxis
              domain={[0, 900]}
              padding={{ bottom: 10, top: 10 }}
              tickFormatter={formatYAxisLabel}
              tickCount={10}
              tickSize={0}
              tick={{ fill: "#676767" }}
              label={{  
                value: "Expected Sales",
                angle: -90,
                position: "left",
                offset: 40,  // Increased offset for better spacing
                style: { fontSize: 16, fill: "#333" },
              }}

            />
            <Tooltip
              formatter={formatTooltipValue}
              cursor={{ fill: "transparent" }}
            />
            <Legend
              iconType="circle"
              iconSize={10}
              verticalAlign="top"
              align="right"
              wrapperStyle={{ marginTop: 50 }}
            />
            <Bar
              dataKey="expectedSales"
              fill="#5f617a"
              isAnimationActive={false}
              barSize={24}
              radius={[4, 4, 4, 4]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ABarChart;
