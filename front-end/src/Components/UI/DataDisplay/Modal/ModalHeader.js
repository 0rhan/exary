import React from "react";
import styled from "styled-components";
import BaseButton from "Components/UI/Inputs/BaseButton/BaseButton";
import CloseIcon from "@material-ui/icons/Close";
import Label from "Components/UI/DataDisplay/Label/Label";

const ModalHeader = ({ onClick: closeModal, label }) => {
  return (
    <Header>
      <ModalLabel element="h4" uppercase={true}>
        {label}
      </ModalLabel>
      <CloseButton onClick={closeModal}>
        <CloseIcon />
      </CloseButton>
    </Header>
  );
};

export default ModalHeader;

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 10px;
  width: 100%;
  left: 0;
  right: 0;
`;

const CloseButton = styled(BaseButton)`
  color: ${({ theme }) => theme.light.bg};
  background-color: ${({ theme }) => theme.light.fg};
  width: 40px;
  height: 24px;
  position: absolute;
  right: 40px;
`;

const ModalLabel = styled(Label)`
  background-color: ${({ theme }) => theme.light.fg};
  color: ${({ theme }) => theme.light.bg};
  border: 4px double ${({ theme }) => theme.light.bg};
  margin: 0px;
  padding: 0 15px;
  width: max-content;
  box-sizing: content-box;
`;
