import React from "react";

const Pagination = () => {
  const page = 1;
  return (
    <div className="flex justify-between items-center p-4">
      {/* left  */}
      <button
        disabled
        className="bg-gray-200 px-4 py-2  rounded-lg text-gray-400 text-xs font-semibold disabled:cursor-not-allowed disabled:opacity-50"
      >
        Prev
      </button>
      {/* middle */}
      <div className="flex gap-4 text-gray-500">
        {[1, 2, 3, "...", 10].map((x) => {
          return (
            <button
              key={x}
              className={x == page ? "bg-blue-100 px-2 rounded-sm" : ""}
            >
              {x}
            </button>
          );
        })}
      </div>
      {/* right  */}
      <button className="bg-gray-200 px-4 py-2  rounded-lg text-gray-400 text-xs font-semibold disabled:cursor-not-allowed disabled:opacity-50">
        right
      </button>
    </div>
  );
};

export default Pagination;
