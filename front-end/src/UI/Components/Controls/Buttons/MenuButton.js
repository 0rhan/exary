import React from "react";
import ButtonBase from "UI/Components/Controls/Buttons/BaseButton/BaseButton"
import styled from "styled-components";

const MenuButton = ({ children }) => {
  return <StyledButton>{children}</StyledButton>;
};

export default MenuButton;

const StyledButton = styled(ButtonBase)`
  width: 100%;
  border-bottom: 2px solid;
  border-color: ${({ theme }) => theme.light.fg};
  box-sizing: border-box;
  padding: 18px;
`;
