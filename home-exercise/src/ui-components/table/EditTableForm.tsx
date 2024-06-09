import React, { useEffect } from "react";
import { ICategoryData } from "../../common";
import Button from "../button/Button";
import { ESeverity } from "../button/types";
import Modal from "../modal/Modal";
import { IEditTableFormProps } from "./types";
import { StyledInputsWrapper, StyledLabel } from "./styles";

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
  }, [initialData]);

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
    <Modal title={category} isOpen={isOpen}>
      <form>
        {Object.keys(formData || {}).map((key) => (
          <StyledInputsWrapper key={key}>
            <StyledLabel>{key}:</StyledLabel>
            <input
              type="text"
              name={key}
              value={formData ? formData[key as keyof ICategoryData] : ""}
              onChange={handleChange}
            />
          </StyledInputsWrapper>
        ))}
        <Button onClick={handleSave} text="Save" severity={ESeverity.Info} />
        <Button onClick={onClose} text="Cancel" severity={ESeverity.Error} />
      </form>
    </Modal>
  );
};

export default EditTableForm;
