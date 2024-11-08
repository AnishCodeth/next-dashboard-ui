import Image from "next/image";
import React from "react";

const announcements = [
  {
    title: "New Year's Celebration",
    time: "2025-01-01",
    description: "Celebrate the start of the new year with friends and family.",
  },
  {
    title: "Project Kickoff",
    time: "2025-02-15",
    description:
      "Initial meeting to kick off the new project and discuss objectives.",
  },
  {
    title: "Conference",
    time: "2025-03-10",
    description:
      "Attend the annual tech conference to network and learn about new trends.",
  },
];

const Announcement = () => {
  return (
    <div className="flex flex-col gap-8">
      {/* title and image  */}
      <div className="flex flex-row justify-between">
        <h1 className="font-bold">Announcements</h1>
        <span className="bg-white p-2 text-gray-500 rounded-xl text-sm">
          View All
        </span>
      </div>

      {/* announcements  */}
      <div className="flex flex-col gap-4">
        {announcements.map((announcement) => {
          return (
            <div
              className="flex flex-col bg-lamaSky rounded-lg p-4 gap-3"
              key={announcement.title}
            >
              <div className="flex flex-row justify-between">
                <h1 className="font-semibold text-sm ">{announcement.title}</h1>
                <span className="bg-white p-1 text-gray-500 rounded-xl text-[8px]">
                  {announcement.time}
                </span>
              </div>
              {/* description  */}
              <div className="text-gray-500 text-sm">
                {announcement.description}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Announcement;
