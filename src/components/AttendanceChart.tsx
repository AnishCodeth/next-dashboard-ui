"use client";
import Image from "next/image";
import React from "react";

import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Mon",
    present: 55,
    absent: 45,
  },
  {
    name: "Tue",
    present: 23,
    absent: 43,
  },
  {
    name: "Wed",
    present: 23,
    absent: 45,
  },
  {
    name: "Thu",
    present: 45,
    absent: 23,
  },
  {
    name: "Fri",
    present: 12,
    absent: 23,
  },
];

const AttendanceChart = () => {
  return (
    <div className="flex flex-col bg-white h-full w-full  p-2 rounded-2xl">
      {/* top */}
      <div className="flex flex-row justify-between">
        <h1 className="font-bold">Attendance</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      {/* bottom */}
      <div className="w-full h-full">
        <ResponsiveContainer>
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
            <XAxis dataKey="name" axisLine={false} tickLine={false} />
            <YAxis axisLine={false} tickLine={false} />
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <Tooltip />
            <Legend
              verticalAlign="top"
              align="left"
              iconType="circle"
              wrapperStyle={{ paddingTop: "20px", paddingBottom: "20px" }}
            />
            <Bar
              dataKey="present"
              fill="#8884d8"
              activeBar={<Rectangle fill="#8884d8" />}
              radius={[10, 10, 0, 0]}
            />
            <Bar
              dataKey="absent"
              fill="#82ca9d"
              activeBar={<Rectangle fill="#82ca9d" />}
              radius={[10, 10, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AttendanceChart;
