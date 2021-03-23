import React from "react";
import styled from "styled-components";

const CardContent = ({ children }) => {
  return <Content>{children}</Content>;
};

export default CardContent;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
`;
