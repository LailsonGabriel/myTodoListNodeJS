
import { User } from "../entities/user";
import AppDataSource from "../data-source";
export class AuthService {
  private userRepository = AppDataSource.getRepository(User);

  async login(cpf: string): Promise<{ user: User; isNew: boolean }> {
    let user = await this.userRepository.findOne({ where: { cpf } });
    
    if (!user) {
      user = new User();
      user.cpf = cpf;
      user = await this.userRepository.save(user);
      return { user, isNew: true };
    }
    
    return { user, isNew: false };
  }
}
