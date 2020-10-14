import React from "react";
import styled from "styled-components";
import BottomNavigation from "Components/UI/Navigation/BottomNavigation/BottomNavigation";
import FullWidthContainer from "Components/UI/Layout/Container/FullWidthContainer";
import DrawerContainer from "Containers/DrawerContainer";
import RouteContainer from "Containers/RouteContainer";
import TopNavigationContainer from "Containers/TopNavigationContainer";

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

