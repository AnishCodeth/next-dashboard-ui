import FormModal from "@/components/FormModal";
import Pagination from "@/components/pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { role, subjectsData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const columns = [
  {
    header: "Subject Name",
    accessor: "Subject Name",
  },
  {
    header: "Teachers",
    accessor: "teachers",
    className: "hidden md:table-cell",
  },
  {
    header: "Actions",
    accessor: "actions",
  },
];

type Item = {
  id: number;
  teachers: [string];
  name: string;
};

const Page = () => {
  const rowrender = (item: Item) => (
    <tr
      key={item.id}
      className="hover:bg-purple-100 even:bg-slate-50 text-sm border-b border-gray-200"
    >
      <td className="flex gap-4 p-4">
        {/* <Image
          src={item.photo}
          alt=""
          height={40}
          width={40}
          className="rounded-full w-10 h-10 md:hidden"
        /> */}
        <div className="flex flex-col">
          <h1 className="font-bold">{item.name}</h1>
        </div>
      </td>
      {/* teacherid  */}
      <td className="hidden md:table-cell">{item.teachers.join(",")}</td>
      {/* actions  */}
      <td>
        <div className="flex  gap-4 items-center self-end">
          {role == "admin" && (
            <>
              <FormModal
                table="subject"
                type="update"
                id={item.id}
                data={item}
              />
              <FormModal table="subject" type="delete" id={item.id} />
            </>
          )}
        </div>
      </td>
    </tr>
  );

  return (
    <div className="flex flex-col bg-white m-3 p-3 rounded-md flex-1 mt-0">
      {/* top */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">All Teachers</h1>
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
            <FormModal table="subject" type="create" />
          </div>
        </div>
      </div>
      {/* tabel */}
      <div className="">
        <Table columns={columns} rowRender={rowrender} data={subjectsData} />
      </div>
      {/* pagnation */}
      <div className="">
        <Pagination />
      </div>
    </div>
  );
};

export default Page;
