import React from "react";
import styled from "styled-components";
import NavigationLinkWithIcon from "Components/UI/Navigation/NavigationLinkWithIcon/NavigationLinkWithIcon";
import { EqualizerSharp, FitnessCenter, InfoSharp } from "@material-ui/icons";

const BottomNavigation = () => {
  return (
    <NavContainer>
      <NavigationLinkWithIcon to="/" icon={EqualizerSharp}>
        Dashboard
      </NavigationLinkWithIcon>
      <NavigationLinkWithIcon to="/exercises" icon={FitnessCenter}>
        Exercises
      </NavigationLinkWithIcon>
      <NavigationLinkWithIcon to="/about" icon={InfoSharp}>
        About
      </NavigationLinkWithIcon>
    </NavContainer>
  );
};

export default BottomNavigation;

const NavContainer = styled.nav`
  display: flex;
  flex-direction: row;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 60px;
  left: 0;
  right: 0;
  border-top-style: solid;
  border-top-width: 4px;
  border-top-color: ${({ theme }) => theme.light.fg};
  background-color: ${({ theme }) => theme.light.bg};
`;
