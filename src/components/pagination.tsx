"use client";
import { ITEM_PER_PAGE } from "@/lib/setting";
import { useRouter } from "next/navigation";
import React from "react";

const Pagination = ({ page, count }: { page: number; count: number }) => {
  const router = useRouter();

  const changePage = (newPage: number) => {
    const params = new URLSearchParams(window.location.search);
    params.set("page", newPage.toString());
    router.push(`${window.location.pathname}?${params}`);
  };

  const hasPrev = page > 1;
  const hasNext = Math.ceil(count / ITEM_PER_PAGE) > page;
  return (
    <div className="flex justify-between items-center p-4">
      {/* left  */}
      <button
        disabled={!hasPrev}
        className="bg-gray-200 px-4 py-2  rounded-lg text-gray-400 text-xs font-semibold disabled:cursor-not-allowed disabled:opacity-50"
        onClick={() => changePage(page - 1)}
      >
        Prev
      </button>
      {/* middle */}
      <div className="flex gap-4 text-gray-500">
        {Array.from(
          { length: Math.ceil(count / ITEM_PER_PAGE) },
          (_, index) => {
            let pageIndex = index + 1;
            return (
              <button
                key={pageIndex}
                className={
                  pageIndex == page ? "bg-blue-100 px-2 rounded-sm" : ""
                }
                onClick={() => changePage(pageIndex)}
              >
                {pageIndex}
              </button>
            );
          }
        )}
      </div>
      {/* right  */}
      <button
        disabled={!hasNext}
        className="bg-gray-200 px-4 py-2  rounded-lg text-gray-400 text-xs font-semibold disabled:cursor-not-allowed disabled:opacity-50"
        onClick={() => changePage(page + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
