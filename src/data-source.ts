import { DataSource } from "typeorm";
import { User } from "./entities/user";
import { Task } from "./entities/task";
import dotenv from "dotenv";
dotenv.config();

const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST || "localhost",
  port: parseInt(process.env.DB_PORT || "3306", 10),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME || "todoList",
  entities: [User, Task],
  synchronize: false,
  logging: false,
});

export default AppDataSource;
