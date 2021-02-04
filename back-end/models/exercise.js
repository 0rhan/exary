import mongoose from "mongoose";

const exerciseSchema = new mongoose.Schema({
  name: String,
  muscleGroup: String,
  sets: Number,
  reps: Number,
});

const Exercise = mongoose.model("Exercise", exerciseSchema);

export default Exercise;
