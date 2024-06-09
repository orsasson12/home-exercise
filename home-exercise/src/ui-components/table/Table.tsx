import React from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import { ICategoryData } from "../../common";

interface DataTableProps<T> {
  data?: T[];
  onDelete?: (index: number) => void;
  onEdit?: (index: number) => void;
}

const Table: React.FC<DataTableProps<ICategoryData>> = ({ data, onDelete, onEdit }) => {
  const handleDelete = (index: number) => {
    onDelete?.(index);
  };

  const handleEdit = (index: number) => {
    onEdit?.(index);
  };
  return (
    <table>
      {data?.map((item, index) => (
        <React.Fragment key={index}>
          <TableHeader keys={Object.keys(item)} />
          <TableBody data={item} keys={Object.keys(item)} />
          <button onClick={() => handleEdit(index)}>Edit</button>
          <button onClick={() => handleDelete(index)}>Delete</button>
        </React.Fragment>
      ))}
    </table>
  );
};

export default Table;
