import express from "express";
import "reflect-metadata";
import { createConnection } from "typeorm";
import routes from "./routes";

const app = express();
app.use(express.json());
app.use(routes);

createConnection()
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((error) => console.log(error));

export default app;