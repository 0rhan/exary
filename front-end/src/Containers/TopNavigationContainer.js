import React from "react";
import { toggleDrawer } from "State/Redux/Actions/";
import { connect } from "react-redux";
import TopBar from "Components/UI/Navigation/TopBar";
import IconButton from "Components/UI/Inputs/IconButton/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const mapStateToProps = (state) => state.ui;

const mapDispatchToProps = (dispatch) => {
  return {
    handleDrawerToggle: (drawerToggleState) => {
      dispatch(toggleDrawer(drawerToggleState));
    },
  };
};

const TopNavigationContainer = ({ handleDrawerToggle, drawerToggleState }) => {
  return (
    <TopBar component="nav">
      <IconButton
        icon={MenuIcon}
        onClick={() => handleDrawerToggle(drawerToggleState)}
      />
    </TopBar>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopNavigationContainer);
