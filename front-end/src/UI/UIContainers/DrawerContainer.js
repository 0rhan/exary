import React from "react";
import Drawer from "UI/Components/Navigation/Drawer"
import styled from "styled-components";
import { connect } from "react-redux";
import List from "UI/Components/DataDisplay/List/List";
import ListItem from "UI/Components/DataDisplay/List/ListItem";
import MenuButton from "UI/Components/Controls/Buttons/MenuButton"

const mapStateToProps = (state) => state.UI;

const arr = ["Menu", "Edit", "Add"];

function DrawerContainer({ drawerToggleState }) {
  const listItems = arr.map((item) => (
    <ListItem key={item}>
      <MenuButton>{item}</MenuButton>
    </ListItem>
  ));

  return (
    <LeftDrawer toggleState={drawerToggleState}>
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

