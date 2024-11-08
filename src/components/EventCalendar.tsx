"use client";
import Image from "next/image";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const events = [
  {
    id: 1,
    title: "Team Meeting",
    time: "10:00 AM - 11:00 AM",
    description: "Weekly team meeting to discuss project updates and tasks.",
  },
  {
    id: 2,
    title: "Lunch Break",
    time: "12:00 PM - 1:00 PM",
    description: "Take a break and enjoy lunch with the team.",
  },
  {
    id: 3,
    title: "Client Presentation",
    time: "2:00 PM - 3:30 PM",
    description:
      "Present the project proposal to the client and gather feedback.",
  },
  {
    id: 4,
    title: "Development Sprint Planning",
    time: "4:00 PM - 5:00 PM",
    description:
      "Plan the tasks and timeline for the upcoming development sprint.",
  },
];

const EventCalendar = () => {
  const [value, onChange] = useState<Value>(new Date());
  return (
    <div className="w-full flex flex-col gap-8">
      <Calendar
        onChange={onChange}
        value={new Date()}
        activeStartDate={new Date()}
      />
      {/* events and title*/}
      <div className="flex flex-col gap-8">
        {/* title and image  */}
        <div className="flex flex-row justify-between">
          <h1>Events</h1>
          <Image src="/moreDark.png" alt="" width={20} height={20} />
        </div>
        {/* events  */}
        <div className="flex flex-col gap-4">
          {events.map((event) => {
            return (
              <div
                key={event.id}
                className="p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-lamaSky even:border-t-lamaPurple"
              >
                {/* top */}
                <div className="flex flex-row justify-between p-2">
                  <h1>{event.title}</h1>
                  <span className="text-gray-300">{event.time}</span>
                </div>
                {/* bottom  */}
                <div className="text-gray-500">{event.description}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default EventCalendar;
