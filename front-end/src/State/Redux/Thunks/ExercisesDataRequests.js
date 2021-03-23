import axios from "API/axiosConf";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchExercisesList = createAsyncThunk(
  "exercises/fetchExercisesList",
  async () => {
    const { data } = await axios.get("/exercises");

    return data;
  }
);

export const deleteExercise = createAsyncThunk(
  "exercises/deleteExercise",
  async (exerciseID, { dispatch }) => {
    const { data } = await axios.delete(`/exercises/${exerciseID}`);

    // Fetch exercises list after deleting exercise
    dispatch(fetchExercisesList());

    return data;
  }
);

// Send to server exercise data from form, and then return info about request status
export const sendExerciseData = createAsyncThunk(
  "exercises/sendExerciseData",

  async (exerciseData, { dispatch }) => {
    const { data } = await axios.post("/exercises", exerciseData);

    // Fetch exercises list after sending new exercise
    dispatch(fetchExercisesList());

    return data;
  }
);
