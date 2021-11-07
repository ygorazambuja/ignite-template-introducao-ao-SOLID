import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    try {
      const user = this.usersRepository.findById(user_id);
      if (!user) throw new Error("User not found");
      user.admin = true;
      return user;
    } catch (error) {
      throw new Error();
    }
  }
}

export { TurnUserAdminUseCase };
