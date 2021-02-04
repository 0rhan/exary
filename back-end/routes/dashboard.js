//const express = require("express")

import express from "express"

const router = express.Router()

router.route("/")
  .get((req,res)=> {
    res.send("Dashboard data")
    console.log("Dashboard route")
  })


export default router
