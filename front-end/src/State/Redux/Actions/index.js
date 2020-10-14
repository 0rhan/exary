import { TOGGLE_DRAWER } from "Constants/ActionTypes"

export const toggleDrawer = (toggleState) => ({ type: TOGGLE_DRAWER, payload: !toggleState });
