import mongoose from "mongoose"

const loadDataBase = (path) => {
  // connect to database
  mongoose.connect(path, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  // check connection to database
  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "database connection error"));
  db.once("open", () => console.log("connected to mongodb"));
};

export default loadDataBase
