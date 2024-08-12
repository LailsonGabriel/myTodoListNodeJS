import { DataSource } from "typeorm";
import { User } from "./entities/user";
import { Task } from "./entities/task";
import dotenv from "dotenv";
dotenv.config();

const AppDataSource = new DataSource({
  type: process.env.DB_TYPE as "mysql" | "mariadb" | "postgres" | "sqlite",
  host: process.env.DB_HOST || "localhost",
  port: parseInt(process.env.DB_PORT || "3306", 10),
  username: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "password",
  database: process.env.DB_NAME || "test",
  entities: [User, Task],
  synchronize: false,
  logging: false,
});

export default AppDataSource;
