import { IModalProps } from "./types";
import { useModal } from "./useModal";

const Modal: React.FC<IModalProps> = ({ title, children }) => {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <div>
      <button onClick={openModal}>{title}</button>
      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
