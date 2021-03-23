import {
  FETCH_EXERCISES_PENDING,
  FETCH_EXERCISES_FAILED,
  FETCH_EXERCISES_SUCCEEDED,
} from "State/Redux/Actions/ActionTypes";

const initialState = {
  exercisesFetchingStatus: "IDLE",
  exercisesFetchingError: "",
  exercisesList: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EXERCISES_PENDING:
      return {
        ...state,
        exercisesFetchingStatus: action.payload.fetchingStatus,
      };
    case FETCH_EXERCISES_SUCCEEDED:
      return {
        ...state,
        exercisesList: action.payload.exercisesList,
        exercisesFetchingStatus: action.payload.fetchingStatus,
      };
    case FETCH_EXERCISES_FAILED:
      return {
        ...state,
        exercisesFetchingStatus: action.payload.fetchingStatus,
        exercisesFetchingError: action.payload.error
      };
    default:
      return state;
  }
};
