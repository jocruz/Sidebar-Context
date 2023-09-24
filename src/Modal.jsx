import React from "react";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "./Context";

const Modal = () => {
  const { isModalOpen, closeModal } = useGlobalContext();
  return (
    <div className={isModalOpen ? "modal-overlay show-modal" : "modal-overlay"}>
      <div className="modal-container"></div>
      <button className="close-modal-btn" onClick={closeModal}>
        <FaTimes />
      </button>
    </div>
  );
};

export default Modal;
