import React from "react";
import PropTypes from "prop-types";
import ModalPortal from "UI/Components/DataDisplay/Modal/ModalPortal";
import ModalOverlay from "UI/Components/DataDisplay/Modal/ModalOverlay";
import ModalWindow from "UI/Components/DataDisplay/Modal/ModalWindow";

const Modal = ({ modalIsOpen, onClick: closeModal, label, children }) => {
  return (
    <ModalPortal>
      <ModalOverlay modalIsOpen={modalIsOpen} onClick={closeModal}>
        <ModalWindow
          modalIsOpen={modalIsOpen}
          onClick={closeModal}
          label={label}
        >
          {children}
        </ModalWindow>
      </ModalOverlay>
    </ModalPortal>
  );
};

Modal.propTypes = {
  modalIsOpen: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

export default Modal;
