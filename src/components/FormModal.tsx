"use client";
import Image from "next/image";
import React, { useState } from "react";
import dynamic from "next/dynamic";

const TeacherForm = dynamic(() => import("./forms/TeacherForm"), {
  loading: () => <h1>Loading...</h1>,
  ssr: false,
});

const StudentForm = dynamic(() => import("./forms/StudentForm"), {
  loading: () => <h1>Loading...</h1>,
});

const forms: {
  [key: string]: (type: "create" | "update", data?: any) => JSX.Element;
} = {
  teacher: (type, data) => <TeacherForm type={type} data={data} />,
  student: (type, data) => <StudentForm type={type} data={data} />,
};

const FormModal = ({
  table,
  type,
  data,
  id,
}: {
  table:
    | "teacher"
    | "student"
    | "parent"
    | "subject"
    | "class"
    | "lesson"
    | "exam"
    | "assignment"
    | "result"
    | "attendance"
    | "event"
    | "announcement";
  type: "create" | "update" | "delete";
  data?: any;
  id?: number;
}) => {
  let className;
  switch (type) {
    case "create":
      className = "bg-yellow-300 p-2 rounded-full";
      break;
    case "update":
      className =
        "w-7 h-7 flex items-center justify-center rounded-full bg-lamaSky";
      break;
    case "delete":
      className =
        "w-7 h-7 flex items-center justify-center rounded-full bg-lamaPurple";
  }

  const [open, setOpen] = useState(false);

  const Form = () => {
    return type == "delete" && id ? (
      <form
        action=""
        className="flex flex-col justify-center items-center gap-4"
      >
        <span className="font-semibold text-lg">
          All data will be lost.Are you sure to delete this {table}?
        </span>
        <button className="bg-red-700 p-2 rounded-md text-white ">
          Delete
        </button>
      </form>
    ) : type === "create" || type === "update" ? (
      forms[table](type, data)
    ) : (
      "Form not found!"
    );
  };

  return (
    <>
      <button className={className} onClick={(x) => setOpen(true)}>
        <Image src={`/${type}.png`} alt="" width={14} height={14} />
      </button>
      {open && (
        <div
          className="w-screen h-screen absolute left-0 top-0 bg-black bg-opacity-60
       z-50 flex flex-col items-center justify-center"
        >
          <div className="bg-white p-4 rounded-md w-full md:w-[80%] lg:w-[70%] flex flex-col justify-center items-center ">
            <button onClick={() => setOpen(false)} className="self-end">
              <Image src="/close.png" alt="" width={14} height={14} />
            </button>
            <Form />
          </div>
        </div>
      )}
    </>
  );
};

export default FormModal;
