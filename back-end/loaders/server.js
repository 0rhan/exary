import express from "express";
import cors from "cors";
import routes from "../routes/index.js";

const app = express();
const corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
};

const LoadServer = (port) => {
  // Routes
  app.use("*", cors());
  app.use("/", express.json(), routes);

  app.listen(port, () => console.log(`app listening localhost:${port}`));
};

export default LoadServer;
