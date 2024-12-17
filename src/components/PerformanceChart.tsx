"use client";

import React from "react";
import { Pie, PieChart, ResponsiveContainer } from "recharts";

const data01 = [
  {
    name: "Group A",
    value: 920,
    fill: "#CBEBFA",
  },
  {
    name: "Group B",
    value: 80,
    fill: "#FAE27C",
  },
];

const PerformanceChart = () => {
  return (
    <>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data01}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="70%"
            outerRadius={100}
            fill="#00000"
            startAngle={180}
            endAngle={0}
            innerRadius={65}
          />
        </PieChart>
      </ResponsiveContainer>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  flex flex-col items-center">
        <h1 className="font-semibold text-2xl">9.2</h1>
        <p className="text-sm text-gray-300">of 10 max LTS</p>
      </div>
      <h2 className=" absolute font-semibold text-lg bottom-[5%] left-1/2 -translate-x-1/2 -translate-y-1/2">
        1st Semester - 2nd Semester
      </h2>
    </>
  );
};

export default PerformanceChart;
