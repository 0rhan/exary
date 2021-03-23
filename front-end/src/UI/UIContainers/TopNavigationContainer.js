import React from "react";
import { toggleDrawer } from "State/Redux/Slices/UISlice";
import { connect } from "react-redux";
import TopBar from "UI/Components/Navigation/TopBar"
import IconButton from "UI/Components/Controls/Buttons/IconButton/IconButton"
import MenuIcon from "@material-ui/icons/Menu";

const mapStateToProps = (state) => {
  return {
    drawerToggleState: state.UI.drawerToggleState,
  }
};

const mapDispatchToProps = {
  toggleDrawer,
};

const TopNavigationContainer = ({ toggleDrawer, drawerToggleState }) => {
  return (
    <TopBar component="nav">
      <IconButton
        icon={MenuIcon}
        onClick={() => toggleDrawer(drawerToggleState)}
      />
    </TopBar>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopNavigationContainer);
