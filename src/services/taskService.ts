import { getCustomRepository } from "typeorm";
import { TaskRepository } from "../repositories/taskRepository";
import { UserRepository } from "../repositories/userRepository";
import { Task } from "../entities/task";
import { User } from "../entities/user";

export class TaskService {
  private taskRepository = getCustomRepository(TaskRepository);
  private userRepository = getCustomRepository(UserRepository);

  async getTasksByUser(cpf: string): Promise<Task[]> {
    const user = await this.userRepository.findOne({ where: { cpf }, relations: ["tasks"] });
    return user ? user.tasks : [];
  }

  async addTasks(cpf: string, tasks: { title: string; checked?: boolean }[]): Promise<Task[]> {
    let user = await this.userRepository.findOne({ where: { cpf } });

    if (!user) {
      user = new User();
      user.cpf = cpf;
      user = await this.userRepository.save(user);
    }

    const taskEntities = tasks.map((task) => {
      const taskEntity = new Task();
      taskEntity.title = task.title;
      taskEntity.checked = task.checked || false;
      taskEntity.user = user;
      return taskEntity;
    });

    return this.taskRepository.save(taskEntities);
  }

  async deleteTask(taskId: number): Promise<void> {
    await this.taskRepository.delete(taskId);
  }

  async toggleTaskChecked(taskId: number): Promise<Task | undefined> {
    const task = await this.taskRepository.findOne({ where: { id: taskId } });
    
    if (task) {
      task.checked = !task.checked;
      return this.taskRepository.save(task);
    }
    
    return undefined;
  }
}
