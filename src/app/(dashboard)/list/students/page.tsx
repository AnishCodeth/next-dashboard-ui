import Pagination from "@/components/pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { role, studentsData, teachersData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const columns = [
  {
    header: "Info",
    accessor: "info",
  },
  {
    header: "Student ID",
    accessor: "Student ID",
    className: "hidden md:table-cell",
  },
  {
    header: "Grade",
    accessor: "grade",
    className: "hidden md:table-cell",
  },
  // {
  //   header: "Class",
  //   accessor: "class",
  //   className: "hidden md:table-cell",
  // },
  {
    header: "Phone",
    accessor: "phone",
    className: "hidden lg:table-cell",
  },
  {
    header: "Address",
    accessor: "address",
    className: "hidden lg:table-cell",
  },
  {
    header: "Actions",
    accessor: "actions",
  },
];

type Item = {
  id: number;
  studentId: string;
  name: string;
  email: string;
  photo: string;
  grade: Number;
  class: string;
  address: string;
  phone: string;
};

const Page = () => {
  const rowrender = (item: Item) => (
    <tr
      key={item.id}
      className="hover:bg-purple-100 even:bg-slate-50 text-sm border-b border-gray-200"
    >
      <td className="flex gap-4 p-4">
        <Image
          src={item.photo}
          alt=""
          height={40}
          width={40}
          className="rounded-full w-10 h-10 md:hidden"
        />
        <div className="flex flex-col">
          <h1 className="font-bold">{item.name}</h1>
          <p className="text-xs text-gray-500">{item.class}</p>
        </div>
      </td>
      {/* teacherid  */}
      <td className="hidden md:table-cell">{item.studentId}</td>
      <td className="hidden md:table-cell">{item.grade.toString()}</td>
      {/* <td className="hidden md:table-cell">{item.class}</td> */}
      <td className="hidden lg:table-cell">{item.phone}</td>
      <td className="hidden lg:table-cell">{item.address}</td>
      {/* actions  */}
      <td>
        <div className="flex  gap-4 items-center self-end">
          <Link href={`/list/students/${item.id}`}>
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaSky">
              <Image src="/view.png" alt="" width={16} height={16} />
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
        <h1 className="hidden md:block text-lg font-semibold">All Students</h1>
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
        <Table columns={columns} rowRender={rowrender} data={studentsData} />
      </div>
      {/* pagnation */}
      <div className="">
        <Pagination />
      </div>
    </div>
  );
};

export default Page;
