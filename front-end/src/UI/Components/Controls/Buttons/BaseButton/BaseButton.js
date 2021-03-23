import React from "react";
import styled from "styled-components";

export default ({
  className,
  children,
  onClick,
  type = "button",
  disabled = false,
}) => {
  return (
    <ButtonBase
      className={className}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </ButtonBase>
  );
};

const ButtonBase = styled.button`
  padding: 12px;
  overflow: visible;
  text-align: center;
  border: 0;
  cursor: pointer;
  color: ${({ theme }) => theme.light.fg};
  background-color: ${({ theme }) => theme.light.bg};
  display: inline-flex;
  outline: 0;
  align-items: center;
  vertical-align: middle;
  justify-content: center;
  text-decoration: none;
  @media screen and (min-width: 320px) and (max-width: 765px) {
    padding: 8px;
  }
`;
