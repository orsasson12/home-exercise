import React, { useState } from "react";
import { ICategoryData } from "../../common";
import Button from "../button/Button";
import { ESeverity } from "../button/types";
import { useModal } from "../modal/useModal";
import EditTableForm from "./EditTableForm";
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";
import { StyledTableActions, StyledTableWrapper } from "./styles";
import { IDataTableProps } from "./types";

const Table: React.FC<IDataTableProps<ICategoryData>> = ({
  data,
  onDelete,
  onEdit,
  category = "",
}) => {
  const [editIdx, setEditIdx] = useState<number | null>(null);
  const [formData, setFormData] = useState<ICategoryData | null>(null);
  const { isOpen, openModal, closeModal } = useModal();

  // sorry I don't have time to move the function to another file
  const handleDelete = (index: number) => {
    onDelete?.(index);
    alert("Row deleted successfully");
  };

  const handleEdit = (index: number) => {
    setEditIdx(index);
    setFormData(data?.[index] || null);
    openModal();
  };

  const handleSave = () => {
    if (editIdx !== null && formData) {
      onEdit?.(editIdx, formData);
      setEditIdx(null);
      setFormData(null);
    }
    closeModal();
  };

  return (
    <>
      <table>
        {data?.map((item, index) => (
          <StyledTableWrapper>
            <div key={index}>
              <TableHeader keys={Object.keys(item)} />
              <TableBody data={item} keys={Object.keys(item)} />
            </div>
            <StyledTableActions>
              <Button onClick={() => handleEdit(index)} text="Edit" severity={ESeverity.Info} />
              <Button
                onClick={() => handleDelete(index)}
                text="Delete"
                severity={ESeverity.Error}
              />
            </StyledTableActions>
          </StyledTableWrapper>
        ))}
      </table>
      {editIdx !== null && (
        <EditTableForm
          isOpen={isOpen}
          onClose={closeModal}
          onSave={handleSave}
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
