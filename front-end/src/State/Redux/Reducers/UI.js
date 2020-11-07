import { TOGGLE_DRAWER, TOGGLE_MODAL } from "Constants/ActionTypes";

const initialState = {
  drawerToggleState: false,
  modalIsOpen: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_DRAWER:
      return {
        ...state,
        drawerToggleState: action.payload,
      };
    case TOGGLE_MODAL:
      return {
        ...state,
        modalIsOpen: action.payload,
      };
    default:
      return state;
  }
};
