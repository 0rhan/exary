const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dashboardRoute = require("./routes/dashboard");
const exerciseRoute = require("./routes/exercises");

// connect to database
mongoose.connect("mongodb://localhost:27017", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// check connection to database
const db = mongoose.connection;
db.on("error", console.error.bind(console, "database connection error"));
db.once("open", () => console.log("connected to mongodb"));

// Server port
const port = 3030;

//Connect to database
// TODO: install mongoose

// Routes
// Dashboard router
app.use("/", exerciseRoute);

app.listen(port, () => console.log(`app listening localhost:${port}`));
