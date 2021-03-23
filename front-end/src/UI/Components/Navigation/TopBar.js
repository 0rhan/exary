import React from "react";
import styled from "styled-components";

const TopBar = ({ className, component, children }) => {
  return (
    <Bar className={className} as={component}>
      {children}
    </Bar>
  );
};

export default TopBar;

const Bar = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  border-color: ${({ theme }) => theme.light.fg};
  border-style: solid;
  border-bottom-width: 4px;
  border-top-width: 4px;
  border-right-width: 0px;
  border-left-width: 0px;
  height: 50px;
  width: 100%;
  background-color: ${({ theme }) => theme.light.bg};
`;
