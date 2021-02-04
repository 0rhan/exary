import express from "express";

const router = express.Router();

import Exercise from "../models/exercise.js";

// TODO: create controllers, services, data layer, loaders

// Send or create exercises
router.route("/exercises")
  .get(async (req, res) => {
    try {
      const exercises = await Exercise.find({});
      res.status(200).json(exercises);
    } catch (error) {
      /* handle error */
      console.log(error);
    }
  })
  .post(async (req, res) => {
    const exercise = new Exercise(req.body);
    console.log(exercise);
    try {
      const data = await exercise.save();
      res.status(200).json(data);
    } catch (error) {
      /* handle error */
      console.log(error);
      res.status(400).end()
    }
  });

// Get or delete specific exercise
router.route("/exercises/:exerciseID")
  .delete(async (req, res) => {
    console.log(req);
    const deletedExercise = await Exercise.deleteOne({
      _id: req.params.exerciseID,
    });
    res.status(200).json(deletedExercise);
  })
  .get(async (req, res) => {
    const specificExercise = await Exercise.findById(req.params.exerciseID);
    res.status(200).json(specificExercise);
  });

export default router;
