import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const data =[
    {
        subject:"html",
        value1 : 90, 
        value2 : 50
    },
    {
        subject:"css",
        value1 : 80, 
        value2 : 90
    },
    {
        subject:"javascript",
        value1 : 75, 
        value2 : 30
    },
]
export default function LineChart02() {
  return (
    <LineChart
      layout="vertical"
      width={500}
      height={300}
      data={data}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis type="number" />
      <YAxis dataKey="subject" type="category" />
      <Tooltip />
      <Legend />
      <Line dataKey="value1" stroke="#8884d8"      type="monotone" />
      <Line dataKey="value2" stroke="#82ca9d" 
       type="monotone" />
    </LineChart>
  );
}
