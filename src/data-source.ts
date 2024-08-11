import { DataSource } from "typeorm"
import { User } from "./entities/user"
import { Task } from "./entities/task"

export default new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "Lailson-29",
    database: "todo_list",
    synchronize: true,
    logging: false,
    entities: [User, Task],
    migrations: [],
    subscribers: [],
})