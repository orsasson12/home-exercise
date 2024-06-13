import React from "react";
import { TableCell, TableRow, TableHead as MuiTableHead } from "@mui/material";
import { ITableHeaderProps } from "../types";

const TableHeader: React.FC<ITableHeaderProps> = ({ keys }) => {
  if (!keys || keys.length === 0) {
    return null;
  }

  return (
    <MuiTableHead>
      <TableRow>
        {keys.map((key) => (
          <TableCell key={key}>
            {key.replace(/_/g, " ").replace(/\b\w/g, (char) => char.toUpperCase())}
          </TableCell>
        ))}
        <TableCell>Actions</TableCell>
      </TableRow>
    </MuiTableHead>
  );
};

export default TableHeader;
