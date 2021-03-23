import React from "react";
import BaseContainer from "UI/Components/Layout/Container/BaseContainer"
import ModalHeader from "UI/Components/DataDisplay/Modal/ModalHeader";
import ModalBody from "UI/Components/DataDisplay/Modal/ModalBody";
import styled from "styled-components";

const ModalWindow = ({ onClick: closeModal, label, children }) => {
  return (
    <Window>
      <ModalHeader onClick={closeModal} label={label} />
      <ModalBody>{children}</ModalBody>
    </Window>
  );
};

export default ModalWindow;

const Window = styled(BaseContainer)`
  color: ${({ theme }) => theme.light.fg};
  box-shadow: 20px 20px ${({ theme }) => theme.light.fg};
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.light.bg};
  color: ${({ theme }) => theme.light.fg};
  width: 400px;
  height: auto;
  padding: 20px;
  position: relative;
  flex-direction: column;
  align-items: center;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
`;
