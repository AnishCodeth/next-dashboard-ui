import Announcement from "@/components/Announcement";
import MyCalendar from "@/components/BIgCalendar";
import EventCalendar from "@/components/EventCalendar";
import React from "react";

const ParentPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col xl:flex-row">
      {/* routine  */}
      <div className="flex flex-col w-full xl:w-2/3 bg-white rounded-2xl p-3 h-[900px]">
        <h1 className="font-serif font-bold">Schedule (Aira Gautam)</h1>
        <MyCalendar />
      </div>
      {/* right side  */}
      <div className="second w-full xl:w-1/3 flex flex-col gap-8">
        {/* announcements  */}
        <div className="bg-white rounded-2xl p-4">
          <Announcement />
        </div>
      </div>
    </div>
  );
};

export default ParentPage;
