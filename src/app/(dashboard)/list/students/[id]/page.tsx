import Announcement from "@/components/Announcement";
import MyCalendar from "@/components/BIgCalendar";
import PerformanceChart from "@/components/PerformanceChart";
import TeacherCards from "@/components/teacherCards";
import { studentsData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page = ({ id }: { id: number }) => {
  console.log(id);
  return (
    <div className="p-4 flex-1 flex flex-col gap-8">
      {/* cards */}
      <div className="flex flex-col lg:flex-row gap-2 lg:justify-between">
        <div className="w-full lg:w-1/2">
          <TeacherCards data={studentsData[1]} />
        </div>
        {/* smaill cards  */}
        <div className="flex flex-wrap w-full lg:w-1/2  gap-2 justify-between">
          <div className="flex w-full bg-white p-2 rounded-lg gap-4 md:w-[48%] ">
            {/* icon  */}
            <Image
              src="/singleAttendance.png"
              alt=""
              height={20}
              width={20}
              className="w-4 h-4"
            />
            <div className="">
              <h1 className="text-xl font-bold">90%</h1>
              <p className="text-sm text-gray-500"> Attendance</p>
            </div>
          </div>
          <div className="flex w-full bg-white p-2 rounded-lg md:w-[48%] gap-4">
            {/* icon  */}
            <Image
              src="/singleBranch.png"
              alt=""
              height={20}
              width={20}
              className="w-4 h-4"
            />
            <div className="">
              <h1 className="text-xl font-bold">6th</h1>
              <p className="text-sm text-gray-500"> Grade</p>
            </div>
          </div>
          <div className="flex w-full bg-white p-2 rounded-lg md:w-[48%] gap-4">
            {/* icon  */}
            <Image
              src="/singleLesson.png"
              alt=""
              height={20}
              width={20}
              className="w-4 h-4"
            />
            <div className="">
              <h1 className="text-xl font-bold">18</h1>
              <p className="text-sm text-gray-500"> Lessons</p>
            </div>
          </div>
          <div className="flex w-full bg-white p-2 rounded-lg md:w-[48%] gap-4">
            {/* icon  */}
            <Image
              src="/singleClass.png"
              alt=""
              height={20}
              width={20}
              className="w-4 h-4"
            />
            <div className="">
              <h1 className="text-xl font-bold">6A</h1>
              <p className="text-sm text-gray-500"> Class</p>
            </div>
          </div>
        </div>
      </div>

      {/* schedule  */}
      <div className="bg-white rounded-lg p-4 h-[800px]">
        <h1>Student&apos;s Schedule</h1>
        <MyCalendar />
      </div>
      {/* shortcuts  */}
      <div className="bg-white rounded-lg p-4 flex flex-col gap-4">
        <h1 className="font-bold">Shortcuts</h1>
        {/* cards  */}
        <div className="flex flex-wrap gap-4">
          <Link
            href="/"
            className="text-gray-500 text-sm p-2 bg-lamaSky rounded-md"
          >
            Student&apos;s Classes
          </Link>
          <Link
            href="/"
            className="text-gray-500 text-sm p-2 bg-lamaPurple rounded-md"
          >
            Student&apos;s Students
          </Link>
          <Link
            href="/"
            className="text-gray-500 text-sm p-2 bg-lamaYellow rounded-md"
          >
            Student&apos;s Lessons
          </Link>
          <Link
            href="/"
            className="text-gray-500 text-sm p-2 bg-lamaSky rounded-md"
          >
            Student&apos;s Exams
          </Link>
          <Link
            href="/"
            className="text-gray-500 text-sm p-2 bg-lamaPurple rounded-md"
          >
            Student&apos;s Assignments
          </Link>
        </div>
      </div>
      {/* performance  */}
      <div className="bg-white rounded-lg p-4 flex flex-col gap-4">
        {/* top  */}
        <div className="flex justify-between">
          <h1 className="font-bold">Performance</h1>
          <Image
            src="/moreDark.png"
            alt=""
            width={20}
            height={14}
            className=""
          />
        </div>
        {/* bottom  */}
        <div className="h-[200px]  relative">
          <PerformanceChart />
        </div>
      </div>
      {/* announcements  */}
      <div className="">
        <Announcement />
      </div>
    </div>
  );
};

export default Page;
