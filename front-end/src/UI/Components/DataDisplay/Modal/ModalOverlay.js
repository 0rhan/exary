import React from "react";
import styled from "styled-components";
import BaseContainer from "UI/Components/Layout/Container/BaseContainer"

const ModalOverlay = ({ modalIsOpen, children, onClick: closeModal }) => {
  // Close modal on overlay click
  const handleClick = (event, closeModal) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  return (
    <Overlay
      isOpen={modalIsOpen}
      onClick={(event) => handleClick(event, closeModal)}
    >
      {children}
    </Overlay>
  );
};

export default ModalOverlay;

const Overlay = styled(BaseContainer)`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: repeating-linear-gradient(
    -45deg,
    #292f1a 1px,
    transparent 4px,
    #292f1a 6px
  );
  background-color: rgba(41, 47, 26, 0.6);
  width: 100%;
  height: 100%;
  z-index: 2;
  justify-content: center;
  align-items: center;
`;
