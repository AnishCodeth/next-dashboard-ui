"use client";
import Image from "next/image";
import React from "react";
import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";

const data = [
  {
    name: "Total",
    count: 1234 * 2,
    fill: "white",
  },
  {
    name: "Girls",
    count: 1234,
    fill: "#FAE27C",
  },
  {
    name: "Boys",
    count: 1234,
    fill: "#C3EBFA",
  },
];

const CountChart = () => {
  return (
    <div className="bg-white rounded-xl p-2 h-full w-full flex flex-col justify-between">
      {/* title */}
      <div className="flex flex-row gap-16">
        <h1 className="font-bold">Students</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      {/* chart */}
      <div className="w-full h-full relative">
        <ResponsiveContainer>
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="40%"
            outerRadius="100%"
            barSize={32}
            data={data}
          >
            <RadialBar background dataKey="count" />
            {/* <Legend iconSize={10} layout="vertical" verticalAlign="middle" /> */}
          </RadialBarChart>
        </ResponsiveContainer>
        {/* malefemail image */}
        <Image
          src="/maleFemale.png"
          alt=""
          width={50}
          height={50}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>
      {/* bottom */}
      <div className="flex flex-row justify-between">
        {/* boys */}
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-lamaSky rounded-full"></div>
          <h1 className="font-bold">1,234</h1>
          <h2 className="text-xs">Boys (55%)</h2>
        </div>
        {/* girsl */}
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-lamaYellow rounded-full"></div>
          <h1 className="font-bold">1,234</h1>
          <h2 className="text-xs">Girls (45%)</h2>
        </div>
      </div>
    </div>
  );
};

export default CountChart;
