import AdminCards from "@/components/AdminCards";
import Announcement from "@/components/Announcement";
import AttendanceChart from "@/components/AttendanceChart";
import CountChart from "@/components/CountChart";
import EventCalendar from "@/components/EventCalendar";
import FinancialChart from "@/components/FinancialChart";
import React from "react";

const cards = [];

const AdminPage = () => {
  return (
    <div className="flex flex-col md:flex-row p-4 gap-4">
      {/* left */}
      <div className="first w-full flex flex-col gap-4 lg:w-2/3 ">
        {/* cards */}
        <div className="cards flex flex-row flex-wrap gap-6">
          <AdminCards type="Student" />
          <AdminCards type="teacher" />
          <AdminCards type="parent" />
          <AdminCards type="staff" />
        </div>

        {/* middle chart*/}
        <div className="flex flex-col gap-4 lg:flex-row pt-2">
          {/* count chart */}
          <div className="w-full lg:w-1/3 h-[300px]">
            <CountChart />
          </div>
          {/* attendance chart */}
          <div className="w-full lg:w-2/3 h-[300px] ">
            <AttendanceChart />
          </div>
        </div>

        {/* FinancialChart  */}
        <div className="w-full h-[500px] flex ">
          <FinancialChart />
        </div>
      </div>

      {/* right */}
      <div className="second w-full lg:w-1/3 flex flex-col gap-8">
        {/* calendar events */}
        <div className="w-full bg-white rounded-2xl p-2">
          {/* calendar  and event*/}
          <EventCalendar />
        </div>

        {/* announcements  */}
        <div className="bg-white rounded-2xl p-4">
          <Announcement />
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
