import React, { useCallback, useState } from "react";
import { PieChart, Pie, Cell, LabelList } from "recharts";

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
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
 
export default function Piechart03() {
  return (
    <PieChart width={400} height={400}>
      <Pie
        data={data}
        cx={200}
        cy={200}
        outerRadius={80}
        innerRadius={50}
        fill="#8884d8"
        dataKey="value1"
        labelLine={true}
        label
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}

        <LabelList dataKey="value1" position="outside"   offset={50}/>
      </Pie>
      {/* 
        color : 0 1 2 3
        data  : 0 1 2 3 , 0 1 2 3 
      */}
    </PieChart>
  );
}
