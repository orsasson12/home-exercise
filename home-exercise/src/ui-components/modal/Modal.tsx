import React from "react";
import { IModalProps } from "./types";
import { ModalContent, StyledModal } from "./styles";

const Modal: React.FC<IModalProps> = ({ title, children, isOpen }) => {
  return (
    <div>
      {isOpen && (
        <StyledModal>
          <ModalContent>
            <h2> {title}</h2>
            {children}
          </ModalContent>
        </StyledModal>
      )}
    </div>
  );
};

export default Modal;
