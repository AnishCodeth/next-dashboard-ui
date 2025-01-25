import FormModal from "@/components/FormModal";
import Pagination from "@/components/pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { role } from "@/lib/data";
import { prisma } from "@/lib/prisma";
import { ITEM_PER_PAGE } from "@/lib/setting";
import { Teacher, Subject, Class, Prisma } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const columns = [
  {
    header: "Info",
    accessor: "info",
  },
  {
    header: "Teacher ID",
    accessor: "subjects",
    className: "hidden md:table-cell",
  },
  {
    header: "Subjects",
    accessor: "subjects",
    className: "hidden md:table-cell",
  },
  {
    header: "Classes",
    accessor: "classes",
    className: "hidden md:table-cell",
  },
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

const rowrender = (item: TeacherList) => (
  <tr
    key={item.id}
    className="hover:bg-purple-100 even:bg-slate-50 text-sm border-b border-gray-200"
  >
    <td className="flex gap-4 p-4">
      <Image
        src={item.img || "/noAvatar.png"}
        alt=""
        height={40}
        width={40}
        className="rounded-full w-10 h-10 md:hidden"
      />
      <div className="flex flex-col">
        <h1 className="font-bold">{item.name}</h1>
        <p className="text-xs text-gray-500">{item.email}</p>
      </div>
    </td>
    {/* teacherid  */}
    <td className="hidden md:table-cell">{item.id}</td>
    <td className="hidden md:table-cell">
      {item.classes.map((classs) => classs.name).join(",")}
    </td>
    <td className="hidden md:table-cell">
      {item.subjects.map((subject) => subject.name).join(",")}
    </td>
    <td className="hidden lg:table-cell">{item.phone}</td>
    <td className="hidden lg:table-cell">{item.address}</td>
    {/* actions  */}
    <td>
      <div className="flex  gap-4 items-center self-end">
        <Link href={`/list/teachers/${item.id}`}>
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

type TeacherList = Teacher & { subjects: Subject[] } & { classes: Class[] };

const Page = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) => {
  const { page, ...queryParams } = searchParams;
  const p = page ? parseInt(page) : 1;
  const queryWhere: Prisma.TeacherWhereInput = {};

  if (queryParams) {
    for (const [key, value] of Object.entries(searchParams)) {
      if (value != undefined) {
        switch (key) {
          case "classId":
            queryWhere.lessons = {
              some: {
                classId: parseInt(value),
              },
            };
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

  const [teachersData, total_teachers] = await prisma.$transaction([
    prisma.teacher.findMany({
      where: queryWhere,
      include: {
        subjects: true,
        classes: true,
      },
      take: ITEM_PER_PAGE,
      skip: (Math.max(p, 0) - 1) * ITEM_PER_PAGE,
    }),
    prisma.teacher.count({ where: queryWhere }),
  ]);

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
            <FormModal table="teacher" type="create" />
          </div>
        </div>
      </div>
      {/* tabel */}
      <div className="">
        <Table columns={columns} rowRender={rowrender} data={teachersData} />
      </div>
      {/* pagnation */}
      <div className="">
        <Pagination page={p} count={total_teachers} />
      </div>
    </div>
  );
};

export default Page;
