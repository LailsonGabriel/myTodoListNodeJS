import { DataSource } from "typeorm";
import { User } from "./entities/user";
import { Task } from "./entities/task";
import dotenv from "dotenv";
dotenv.config();

const AppDataSource = new DataSource({
  type: process.env.TYPE_DB as "mysql" | "mariadb" | "postgres" | "sqlite",
  host: process.env.HOST_DB || "localhost",
  port: parseInt(process.env.PORT_DB || "3306", 10),
  username: process.env.USER_DB,
  password: process.env.PASS_DB,
  database: process.env.NAME_DB || "todoList",
  entities: [User, Task],
  synchronize: false,
  logging: false,
});

export default AppDataSource;
