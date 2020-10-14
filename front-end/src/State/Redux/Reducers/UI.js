import { TOGGLE_DRAWER } from "Constants/ActionTypes";

const initialState = {
  toggleState: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_DRAWER:
      console.log("DRAWER TOGGLED", state);
      return {
        ...state,
        toggleState: action.payload,
      };
    default:
      console.log("CANT TOGGLE DRAWER", state);
      return state;
  }
};
