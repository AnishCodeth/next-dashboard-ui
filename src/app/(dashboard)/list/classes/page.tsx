import Pagination from "@/components/pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { classesData, role } from "@/lib/data";
import { prisma } from "@/lib/prisma";
import { ITEM_PER_PAGE } from "@/lib/setting";
import { Class, Grade, Prisma, Teacher } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const columns = [
  {
    header: "Class Name",
    accessor: "class name",
  },
  {
    header: "Capacity",
    accessor: "Capacity",
    className: "hidden md:table-cell",
  },
  {
    header: "Grade",
    accessor: "grade",
    className: "hidden md:table-cell",
  },

  {
    header: "Supervior",
    accessor: "supervisor",
    className: "hidden md:table-cell",
  },

  {
    header: "Actions",
    accessor: "actions",
  },
];

type Item = Class & { grade: Grade } & { supervisor: Teacher };

const rowrender = (item: Item) => (
  <tr
    key={item.id}
    className="hover:bg-purple-100 even:bg-slate-50 text-sm border-b border-gray-200"
  >
    <td className="flex gap-4 p-4">
      <div className="flex flex-col">
        <h1 className="font-bold">{item.name}</h1>
      </div>
    </td>
    {/* teacherid  */}
    <td className="hidden md:table-cell">{item.capacity}</td>
    <td className="hidden md:table-cell">{item.grade.level}</td>
    {/* <td className="hidden md:table-cell">{item.class}</td> */}
    <td className="hidden md:table-cell">{item.supervisor.name}</td>
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

const Page = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) => {
  const { page, ...queryParams } = searchParams;
  const p = page ? parseInt(page) : 1;
  const queryWhere: Prisma.ClassWhereInput = {};

  if (queryParams) {
    for (const [key, value] of Object.entries(searchParams)) {
      if (value != undefined) {
        switch (key) {
          case "supervisorId":
            queryWhere.supervisorId = value;
            break;
          case "search":
            queryWhere.name = {
              contains: value,
              mode: "insensitive",
            };
            break;
        }
      }
    }
  }

  const [classesData, total_classes] = await prisma.$transaction([
    prisma.class.findMany({
      where: queryWhere,
      include: {
        supervisor: true,
        grade: true,
      },
      take: ITEM_PER_PAGE,
      skip: (Math.max(p, 0) - 1) * ITEM_PER_PAGE,
    }),
    prisma.class.count({ where: queryWhere }),
  ]);

  return (
    <div className="flex flex-col bg-white m-3 p-3 rounded-md flex-1 mt-0">
      {/* top */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">All Classes</h1>
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
        <Table columns={columns} rowRender={rowrender} data={classesData} />
      </div>
      {/* pagnation */}
      <div className="">
        <Pagination page={p} count={total_classes} />
      </div>
    </div>
  );
};

export default Page;
