import { Request, Response } from "express";
import { TaskService } from "../services/taskService";
import { AuthService } from "../services/authService";

export class TaskController {
  private taskService = new TaskService();
  private authService = new AuthService();

  async getTasks(req: Request, res: Response) {
    const { cpf } = req.query;
    
    if (!cpf) {
      return res.status(400).send("CPF is required");
    }

    const tasks = await this.taskService.getTasksByUser(cpf as string);
    return res.json(tasks);
  }

  async addTasks(req: Request, res: Response) {
    const { cpf, tasks } = req.body;
    
    if (!cpf || !tasks) {
      return res.status(400).send("CPF and tasks are required");
    }

    const newTasks = await this.taskService.addTasks(cpf, tasks);
    return res.status(201).json(newTasks);
  }

  async deleteTask(req: Request, res: Response) {
    const { id } = req.params;
    
    await this.taskService.deleteTask(parseInt(id, 10));
    return res.status(204).send();
  }

  async toggleTaskChecked(req: Request, res: Response) {
    const { id } = req.params;
    
    const updatedTask = await this.taskService.toggleTaskChecked(parseInt(id, 10));
    return res.json(updatedTask);
  }

  async login(req: Request, res: Response) {
    const { cpf } = req.body;
    
    if (!cpf) {
      return res.status(400).send("CPF is required");
    }

    const { user, isNew } = await this.authService.login(cpf);
    const tasks = isNew ? [] : await this.taskService.getTasksByUser(cpf);

    return res.json({ userId: user.id, tasks });
  }
}
