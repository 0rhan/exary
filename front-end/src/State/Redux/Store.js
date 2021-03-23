import { configureStore } from "@reduxjs/toolkit";
import UIReducer from "./Slices/UISlice"
import exercisesReducer from "./Slices/exercisesSlice"

const store = configureStore({
  reducer: {
    UI: UIReducer,
    exercises: exercisesReducer,
  },
});
export default store;
