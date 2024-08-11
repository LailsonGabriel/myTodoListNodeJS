
import { getCustomRepository } from "typeorm";
import { UserRepository } from "../repositories/userRepository";
import { User } from "../entities/user";

export class AuthService {
  private userRepository = getCustomRepository(UserRepository);

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
