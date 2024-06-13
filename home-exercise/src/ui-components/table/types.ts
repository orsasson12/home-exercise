import { ICategoryData } from "../../common";

export interface ITableBodyProps {
  keys?: string[];
  data?: ICategoryData[];
  handleEdit: (index: number) => void;
  handleDelete: (index: number) => void;
}
export interface ITableHeaderProps {
  keys: string[];
}

export interface IEditTableFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: ICategoryData) => void;
  initialData: ICategoryData | null;
  category: string;
  formData: ICategoryData | null;
  setFormData: React.Dispatch<React.SetStateAction<ICategoryData | null>>;
}

export interface IDataTableProps<T> {
  data?: T[];
  onDelete?: (index: number) => void;
  onEdit?: (index: number, updatedItem: T) => void;
  category?: string;
}

export interface IHandleDeleteProps {
  index: number;
  onDelete?: (index: number) => void;
}

export interface IHandleEditProps {
  index: number;
  data: ICategoryData[] | undefined;
  setEditIdx: (index: number | null) => void;
  setFormData: (data: ICategoryData | null) => void;
  openModal: () => void;
}

export interface IHandleSaveProps {
  editIdx: number | null;
  updatedData: ICategoryData;
  onEdit?: (index: number, data: ICategoryData) => void;
  setEditIdx?: (index: number | null) => void;
  setFormData?: (data: ICategoryData | null) => void;
  closeModal?: () => void;
}
