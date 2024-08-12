import { DataSource } from "typeorm"
import { User } from "./entities/user"
import { Task } from "./entities/task"

const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "Lailson-29",
    database: "todoList",
    entities: [User, Task],
    synchronize: false,
    logging: false,
});

export default AppDataSource