import React from "react";
import styled from "styled-components";

const CardItem = ({label, text }) => {
  return (
    <Container>
      <Label>{`${label}:`}</Label>
      <Value>{text}</Value>
    </Container>
  );
};

export default CardItem;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  height: 25px;
`;

const Label = styled.p`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.light.fg};
  color: ${({ theme }) => theme.light.bg};
  margin: 0px;
  padding-left: 5px;
  padding-right: 5px;
  height: 100%;
`;

const Value = styled.p`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.light.bg};
  color: ${({ theme }) => theme.light.fg};
  padding-left: 5px;
  padding-right: 5px;
  border: solid 2px ${({ theme }) => theme.light.fg};
  border-left: 0px;
  height: 100%;
  margin: 0px;
  box-sizing: border-box;
`;
