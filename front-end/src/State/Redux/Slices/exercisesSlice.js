import {createSlice} from "@reduxjs/toolkit"
import {IDLE, PENDING, SUCCEEDED} from "State/Redux/Thunks/Constants/RequestStates"
import {fetchExercisesList} from "../Thunks/ExercisesDataRequests"

const initialState = {
  exercisesFetchStatus: IDLE,
  exercisesList: []
}


const exercisesSlice = createSlice({
  name: "exercises",
  initialState,
  extraReducers: builder => {
    builder.addCase(fetchExercisesList.pending, (state)=>{
      state.exercisesFetchStatus = PENDING
    })
      .addCase(fetchExercisesList.fulfilled, (state, action)=> {
        state.exercisesList = action.payload
        state.exercisesFetchStatus = SUCCEEDED
      })
  }
})



export default exercisesSlice.reducer
