import Image from "next/image";
import React from "react";

const TableSearch = () => {
  return (
    <div className="flex items-center w-full md:flex text-sm md:w-auto flex-row border-2 border-gray-400 rounded-full gap-2 rind-[1.5px] rind-gray-300 px-2 ">
      <Image
        src="/search.png"
        alt="search"
        width={14}
        height={14}
        className=" p-[1px] w-5 h-5"
      />
      <input
        type="text"
        placeholder="Search..."
        className="bg-inherit  w-[200px] p-1 outline-none"
      />
    </div>
  );
};

export default TableSearch;
