import { ICategoryData } from "../../common";

export interface ITableBodyProps {
  data: Record<string, any>;
  keys: string[];
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
