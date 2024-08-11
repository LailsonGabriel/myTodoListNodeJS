import { Router } from "express";
import { TaskController } from "../controllers/taskController";

const router = Router();
const taskController = new TaskController();

router.get("/tasks", taskController.getTasks.bind(taskController));
router.post("/tasks", taskController.addTasks.bind(taskController));
router.delete("/tasks/:id", taskController.deleteTask.bind(taskController));
router.patch("/tasks/:id/toggle", taskController.toggleTaskChecked.bind(taskController));
router.post("/login", taskController.login.bind(taskController));

export default router;