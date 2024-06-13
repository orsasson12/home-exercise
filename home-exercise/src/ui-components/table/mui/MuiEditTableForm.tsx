import React, { useEffect } from "react";
import { ICategoryData } from "../../../common";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { IEditTableFormProps } from "../types";
import { StyledInputsWrapper, StyledLabel } from "../styles";

const EditTableForm: React.FC<IEditTableFormProps> = ({
  isOpen,
  onClose,
  onSave,
  initialData,
  category,
  formData,
  setFormData,
}) => {
  useEffect(() => {
    setFormData(initialData);
  }, [initialData, setFormData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => (prev ? { ...prev, [name]: value } : null));
  };

  const handleSave = () => {
    if (formData) {
      onSave(formData);
      alert("Data saved successfully");
    }
    onClose();
  };

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>{category}</DialogTitle>
      <DialogContent>
        <form>
          {Object.keys(formData || {}).map((key) => (
            <StyledInputsWrapper key={key}>
              <StyledLabel>{key}:</StyledLabel>
              <TextField
                type="text"
                name={key}
                value={formData ? formData[key as keyof ICategoryData] : ""}
                onChange={handleChange}
                fullWidth
              />
            </StyledInputsWrapper>
          ))}
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleSave} color="primary">
          Save
        </Button>
        <Button onClick={onClose} color="secondary">
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditTableForm;
