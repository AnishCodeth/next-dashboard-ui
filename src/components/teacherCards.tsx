import Image from "next/image";
import React from "react";
import FormModal from "./FormModal";

const TeacherCards = ({
  data,
}: {
  data: {
    id: number;
    teacherId?: string;
    name: string;
    email: string;
    photo: string;
    phone: string;
    subjects?: string[];
    classes?: string[];
    address?: string;
  };
}) => {
  return (
    <div className="w-full bg-lamaSky gap-1 flex p-3 rounded-md">
      {/* photo  */}
      <div className="flex w-1/3">
        <Image
          src={data.photo}
          alt="you are offline"
          width={144}
          height={144}
          className="rounded-full object-cover w-36 h-36"
        />
      </div>

      {/* details  */}
      <div className="flex flex-col gap-4 w-2/3">
        {/* top  */}
        <div className="flex gap-8  justify-between">
          <h1 className="font-bold">{data.name}</h1>
          {/* <Image
            src="/edit.png"
            alt=""
            height={10}
            width={14}
            className="w-4 h-4"
          /> */}
          <FormModal table="teacher" type="update" id={data.id} />
        </div>
        <p className="text-gray-500 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        {/* contacts  */}
        <div className="flex flex-col md:flex-row justify-between text-sm font-medium">
          {/* 1  */}
          <div className="flex flex-col justify-between gap-x-2">
            <div className="flex gap-2">
              <Image
                src="/blood.png"
                alt=""
                height={10}
                width={14}
                className="w-4 h-4"
              />
              <h1>A+</h1>
            </div>
            <div className="flex flex-row gap-2 ">
              <Image
                src="/calendar.png"
                alt=""
                height={14}
                width={14}
                className="w-4 h-4"
              />
              <h1>January 2025</h1>
            </div>
          </div>

          {/* 2 */}
          <div className="flex flex-col justify-between gap-x-2">
            <div className="flex flex-row gap-2 ">
              <Image
                src="/mail.png"
                alt=""
                height={14}
                width={14}
                className="w-4 h-4"
              />
              <h1>user@gmail.com</h1>
            </div>
            <div className="flex flex-row gap-2 ">
              <Image
                src="/phone.png"
                alt=""
                height={14}
                width={14}
                className="w-4 h-4"
              />
              <h1>+1 234 567</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherCards;
