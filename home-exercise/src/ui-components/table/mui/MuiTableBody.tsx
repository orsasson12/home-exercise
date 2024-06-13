import React from "react";
import { Button, TableCell, TableRow, TableBody as MuiTableBody } from "@mui/material";
import { ITableBodyProps } from "../types";
import { ICategoryData } from "../../../common";

const TableBody: React.FC<ITableBodyProps> = ({ data, keys, handleEdit, handleDelete }) => {
  return (
    <MuiTableBody>
      {data?.map((item, index) => (
        <TableRow key={index}>
          {keys?.map((key) => (
            <TableCell key={key}>{item[key as keyof ICategoryData]}</TableCell>
          ))}
          <TableCell>
            <Button onClick={() => handleEdit(index)} color="primary">
              Edit
            </Button>
            <Button onClick={() => handleDelete(index)} color="secondary">
              Delete
            </Button>
          </TableCell>
        </TableRow>
      ))}
    </MuiTableBody>
  );
};

export default TableBody;
