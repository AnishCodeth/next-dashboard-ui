"use client";
import Image from "next/image";
import React from "react";
import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Line,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",
    income: 4000,
    expense: 2400,
  },
  {
    name: "Feb",
    income: 3000,
    expense: 1398,
  },
  {
    name: "Mar",
    income: 2000,
    expense: 9800,
  },
  {
    name: "Apr",
    income: 2780,
    expense: 3908,
  },
  {
    name: "May",
    income: 1890,
    expense: 4800,
  },
  {
    name: "Jun",
    income: 2390,
    expense: 3800,
  },
  {
    name: "Jul",
    income: 3490,
    expense: 4300,
  },
  {
    name: "Aug",
    income: 4000,
    expense: 2400,
  },
  {
    name: "Sep",
    income: 3000,
    expense: 1398,
  },
  {
    name: "Oct",
    income: 2000,
    expense: 9800,
  },
  {
    name: "Nov",
    income: 2780,
    expense: 3908,
  },
  {
    name: "Dec",
    income: 1890,
    expense: 4800,
  },
];

const FinancialChart = () => {
  return (
    <div className="h-full w-full flex flex-col gap-2 bg-white rounded-2xl p-2">
      {/* top  */}
      <div className="flex flex-row justify-between">
        <h1 className="font-bold">Finance</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      {/* bottom  */}
      <div className="w-full h-full">
        <ResponsiveContainer>
          <LineChart
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" axisLine={false} tickLine={false} />
            <YAxis axisLine={false} tickLine={false} />
            <Tooltip />
            <Legend
              verticalAlign="top"
              wrapperStyle={{ paddingTop: "20px", paddingBottom: "30px" }}
            />
            <Line
              type="monotone"
              dataKey="expense"
              stroke="#8884d8"
              strokeWidth={4}
              dot={{ fill: "#8884d8" }}
              activeDot={{ stroke: "white", strokeWidth: 10, r: 2 }}
            />
            <Line
              type="monotone"
              dataKey="income"
              stroke="#82ca9d"
              strokeWidth={4}
              dot={{ fill: "#82ca9d" }}
              width={5}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default FinancialChart;
