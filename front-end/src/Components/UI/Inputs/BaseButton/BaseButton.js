import React from "react";
import styled from "styled-components";

export default ({ className, children, onClick }) => {
  return (
    <ButtonBase className={className} onClick={onClick}>
      {children}
    </ButtonBase>
  );
};

const ButtonBase = styled.button`
  color: inherit;
  padding: 12px;
  overflow: visible;
  text-align: center;
  border: 0;
  cursor: pointer;
  display: inline-flex;
  outline: 0;
  align-items: center;
  vertical-align: middle;
  justify-content: center;
  text-decoration: none;
  background-color: transparent;
`;
