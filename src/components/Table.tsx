import React, { ReactNode } from "react";

const Table = ({
  columns,
  rowRender,
  data,
}: {
  columns: {
    header: string;
    accessor: string;
    className?: string;
  }[];
  rowRender: (item: any) => ReactNode;
  data: any[];
}) => {
  return (
    <table className="w-full mt-4">
      <thead>
        <tr className="text-sm text-gray-500 text-left ">
          {columns.map((col) => (
            <th key={col.accessor} className={col.className}>
              {col.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>{data.map((d) => rowRender(d))}</tbody>
    </table>
  );
};

export default Table;
