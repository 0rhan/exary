import React from "react";
import Drawer from "Components/UI/Navigation/Drawer";
import styled from "styled-components";
import { connect } from "react-redux";
import List from "Components/UI/DataDisplay/List/List";
import ListItem from "Components/UI/DataDisplay/List/ListItem";
import ButtonBase from "Components/UI/Inputs/BaseButton/BaseButton";

const mapStateToProps = (state) => state.ui;

const arr = ["Menu", "Edit", "Add"];

function DrawerContainer({ toggleState }) {
  const listItems = arr.map((item) => (
    <ListItem key={item}>
      <MenuButton>{item}</MenuButton>
    </ListItem>
  ));

  return (
    <LeftDrawer toggleState={toggleState}>
      <DrawerList>{listItems}</DrawerList>
    </LeftDrawer>
  );
}

export default connect(mapStateToProps, null)(DrawerContainer);

const LeftDrawer = styled(Drawer)`
  border-right: 4px solid ${({ theme }) => theme.light.fg};
  box-sizing: border-box;
`;

const DrawerList = styled(List)`
  text-indent: 0;
  list-style-type: none;
  width: 100%;
`;

const MenuButton = styled(ButtonBase)`
  width: 100%;
  border-bottom: 2px solid;
  border-color: ${({theme})=> theme.light.fg};
  box-sizing: border-box;
  padding: 18px;
`
