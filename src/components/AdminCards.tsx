import Image from "next/image";
import React from "react";

const AdminCards = ({ type }: { type: string }) => {
  return (
    <div className="flex flex-1 odd:bg-lamaPurple rounded-2xl p-4 gap-6 even:bg-lamaYellow min-w-[130px] justify-between">
      {/* left ide */}
      <div className="flex flex-col gap-2">
        <div className="rounded-full bg-white  text-green-600 text-[12px] flex justify-center items-center">
          2024/25
        </div>
        <span className="font-bold text-lg">1,234</span>
        <span className="text-gray-500">{type}</span>
      </div>
      {/* image */}
      <div className="">
        <Image src="/more.png" alt="more" width={20} height={20} />
      </div>
    </div>
  );
};

export default AdminCards;
