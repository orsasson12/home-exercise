import { IHandleDeleteProps, IHandleEditProps, IHandleSaveProps } from "./types";

export function handleDelete({ index, onDelete }: IHandleDeleteProps) {
  return onDelete?.(index);
}

export function handleEdit({ index, data, setEditIdx, setFormData, openModal }: IHandleEditProps) {
  setEditIdx(index);
  setFormData(data?.[index] || null);
  openModal();
}

export function handleSave({
  editIdx,
  onEdit,
  setEditIdx,
  setFormData,
  closeModal,
  updatedData,
}: IHandleSaveProps) {
  if (editIdx !== null) {
    onEdit?.(editIdx, updatedData);
    setEditIdx?.(null);
    setFormData?.(null);
  }
  closeModal?.();
}
