import React from "react";
import styled from "styled-components";

const LabelDecoration = () => {
  return (
    <StyledLabelDecoration>
      <svg
        width="12"
        height="20"
        viewBox="0 0 12 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 6L12 0V20H0V6Z"/>
      </svg>
    </StyledLabelDecoration>
  );
};

export default LabelDecoration;

const StyledLabelDecoration = styled.div`
  path {
    fill: ${({ theme }) => theme.light.fg};
  }
`;
