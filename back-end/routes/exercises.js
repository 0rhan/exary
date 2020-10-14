const express = require("express")

const router = express.Router()

const Exercise = require('../models/exercise')

router.route("/exercises")
  .get((req, res)=> {
    res.send("EXERCISES")
    //const exercise = new Exercise(req.body)
    //exercise.save()
  })
  .post((req, res)=> {
    console.log(req.query)
    res.status(200).send("GOOD")
  })


module.exports = router
