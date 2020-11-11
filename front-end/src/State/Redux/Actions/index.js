import { TOGGLE_DRAWER, TOGGLE_MODAL } from "Constants/Redux/ActionTypes";

export const toggleDrawer = (toggleState) => ({
  type: TOGGLE_DRAWER,
  payload: !toggleState,
});

export const toggleModal = (isOpen) => ({
  type: TOGGLE_MODAL,
  payload: isOpen,
});
