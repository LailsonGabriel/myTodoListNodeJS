import express from "express";
import "reflect-metadata";
import routes from "./routes";
import AppDataSource from "./data-source";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());
app.use(routes);

const PORT = process.env.PORT || 3000;

AppDataSource.initialize().then(async () => {
  console.log('Database connection success');
}).catch((err) => console.log(err));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;