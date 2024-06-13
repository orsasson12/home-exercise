import React, { useState } from "react";
import { ICategoryData } from "../../../common";
import {
  Button,
  Table as MuiTable,
  TableBody as MuiTableBody,
  TableCell,
  TableContainer,
  TableHead as MuiTableHead,
  TableRow,
  Paper,
} from "@mui/material";

import EditTableForm from "./MuiEditTableForm";
import { IDataTableProps } from "../types";
import { useModal } from "../../modal/useModal";
import TableBody from "../TableBody";
import TableHeader from "./MuiTableHeader";
import { handleDelete, handleEdit, handleSave } from "../utils";

const Table: React.FC<IDataTableProps<ICategoryData>> = ({
  data,
  onDelete,
  onEdit,
  category = "",
}) => {
  const [editIdx, setEditIdx] = useState<number | null>(null);
  const [formData, setFormData] = useState<ICategoryData | null>(null);
  const { isOpen, openModal, closeModal } = useModal();

  const keys = Object.keys(data?.[0] ?? []);
  return (
    <>
      <TableContainer component={Paper}>
        <MuiTable>
          <TableHeader keys={keys} />
          <TableBody
            data={data}
            keys={keys}
            handleEdit={(index) => handleEdit({ index, data, setEditIdx, setFormData, openModal })}
            handleDelete={(index) => handleDelete({ index, onDelete })}
          />
        </MuiTable>
      </TableContainer>
      {editIdx !== null && (
        <EditTableForm
          isOpen={isOpen}
          onClose={closeModal}
          onSave={(updatedData) =>
            handleSave({ editIdx, updatedData, onEdit, setEditIdx, setFormData, closeModal })
          }
          initialData={formData}
          category={category}
          setFormData={setFormData}
          formData={formData}
        />
      )}
    </>
  );
};

export default Table;
