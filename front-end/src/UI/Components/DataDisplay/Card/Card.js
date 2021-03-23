import React from "react";
import styled from "styled-components";
import FullWidthContainer from "UI/Components/Layout/Container/FullWidthContainer";

const Card = ({ children, className }) => {
  return <CardContainer className={className}>{children}</CardContainer>;
};

export default Card;

const CardContainer = styled(FullWidthContainer)`
  border: 2px solid;
  min-width: 200px;
  border-radius: 2px;
  height: max-content;
  margin-bottom: 10px;
`;
