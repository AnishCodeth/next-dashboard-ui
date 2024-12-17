import Pagination from "@/components/pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import {
  classesData,
  eventsData,
  examsData,
  lessonsData,
  resultsData,
  role,
} from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const columns = [
  {
    header: "Title",
    accessor: "title",
  },
  {
    header: "Class",
    accessor: "class",
  },
  {
    header: "Date",
    accessor: "Date",
    className: "hidden md:table-cell",
  },
  {
    header: "Start TIme",
    accessor: "start time",
    className: "hidden md:table-cell",
  },
  {
    header: "End Time",
    accessor: "end time",
    className: "hidden md:table-cell",
  },

  {
    header: "Actions",
    accessor: "actions",
  },
];

type Item = {
  id: number;
  title: string;
  class: string;
  date: string;
  startTime: string;
  endTime: string;
};

const Page = () => {
  const rowrender = (item: Item) => (
    <tr
      key={item.id}
      className="hover:bg-purple-100 even:bg-slate-50 text-sm border-b border-gray-200"
    >
      <td className="flex gap-4 p-4">
        <div className="flex flex-col">
          <h1 className="font-bold">{item.title}</h1>
        </div>
      </td>
      {/* teacherid  */}
      <td>{item.class}</td>
      <td className="hidden md:table-cell">{item.date}</td>
      <td className="hidden md:table-cell">{item.startTime}</td>
      <td className="hidden md:table-cell">{item.endTime}</td>
      {/* actions  */}
      <td>
        <div className="flex  gap-4 items-center self-end">
          <Link href={`/list/teachers/${item.id}`}>
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaSky">
              <Image src="/edit.png" alt="" width={16} height={16} />
            </button>
          </Link>
          {role == "admin" && (
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaPurple">
              <Image src="/delete.png" alt="" width={16} height={16} />
            </button>
          )}
        </div>
      </td>
    </tr>
  );

  return (
    <div className="flex flex-col bg-white m-3 p-3 rounded-md flex-1 mt-0">
      {/* top */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">All Events</h1>
        <div className="flex flex-col p-2 items-center justify-end flex-1 md:flex-row gap-4 ">
          <TableSearch />
          {/* icons */}
          <div className="flex flex-row justify-end gap-4 self-end">
            <button className="bg-yellow-300 p-2 rounded-full">
              <Image src="/filter.png" alt="" width={14} height={14} />
            </button>
            <button className="bg-yellow-300 p-2 rounded-full">
              <Image src="/sort.png" alt="" width={14} height={14} />
            </button>
            <button className="bg-yellow-300 p-2 rounded-full">
              <Image src="/plus.png" alt="" width={14} height={14} />
            </button>
          </div>
        </div>
      </div>
      {/* tabel */}
      <div className="">
        <Table columns={columns} rowRender={rowrender} data={eventsData} />
      </div>
      {/* pagnation */}
      <div className="">
        <Pagination />
      </div>
    </div>
  );
};

export default Page;
