import React from "react";
import styled from "styled-components";
import BottomNavigation from "UI/Components/Navigation/BottomNavigation/BottomNavigation"
import FullWidthContainer from "UI/Components/Layout/Container/FullWidthContainer"
import DrawerContainer from "UI/UIContainers/DrawerContainer";
import RouteContainer from "UI/UIContainers/RouteContainer";
import TopNavigationContainer from "UI/UIContainers/TopNavigationContainer";

const RootScreen = () => {
  return (
      <RootScreenContainer>
        <TopNavigationContainer />
        <DrawerContainer />
        <RouteContainer />
        <BottomNavigation />
      </RootScreenContainer>
  );
};

export default RootScreen;

const RootScreenContainer = styled(FullWidthContainer)`
  box-sizing: border-box;
  height: 100%;
  padding-top: 58px;
  padding-bottom: 64px;
`;

