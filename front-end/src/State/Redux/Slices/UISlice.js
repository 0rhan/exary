import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  drawerToggleState: false,
  modalIsOpen: false,
};

const UISlice = createSlice({
  name: "UI",
  initialState,
  reducers: {
    toggleDrawer(state, action) {
      state.drawerToggleState = !action.payload;
    },
    toggleModal(state, action) {
      state.modalIsOpen = action.payload;
    },
  },
});

export const { toggleDrawer, toggleModal } = UISlice.actions;

export default UISlice.reducer;
