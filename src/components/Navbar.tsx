import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex flex-row items-center justify-between p-4">
      <div className="hidden  md:flex item-center text-sm flex-row border-2 border-gray-400 rounded-full gap-2 rind-[1.5px] rind-gray-300 px-2">
        <Image
          src="/search.png"
          alt="search"
          width={14}
          height={14}
          className=" p-[2px] w-5 h-5"
        />
        <input
          type="text"
          placeholder="Search..."
          className="bg-inherit  w-[200px] p-2 outline-none"
        />
      </div>

      {/* icoins and user */}
      <div className="tools flex flex-row gap-6 justify-end  w-full">
        {/* message */}
        <div className="bg-white flex p-2 rounded-full cursor-pointer">
          <Image
            src="/message.png"
            alt="message"
            width={20}
            height={20}
            className=""
          />
        </div>
        {/* announcement */}
        <div className="bg-white flex p-2 rounded-full cursor-pointer relative">
          <div className="numbers absolute  bg-purple-500 text-white rounded-full text-sm h-5 w-5 flex items-center justify-center -top-3 left-4">
            1
          </div>
          <Image
            src="/announcement.png"
            alt="announcement"
            width={20}
            height={20}
            className=""
          />
        </div>
        {/* name and role */}
        <div className="bg-inherit flex flex-col ">
          <span className="text-xs font-medium leading-3">Anish Subedi</span>
          <span className="text-[10px] text-gray-500 text-right ">Admin</span>
        </div>

        {/* for the avatar */}
        <Image
          src="/avatar.png"
          alt="avatar"
          width={36}
          height={36}
          className="rounded-full"
        />
      </div>
    </div>
  );
};

export default Navbar;
