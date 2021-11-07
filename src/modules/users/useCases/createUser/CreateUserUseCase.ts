import { User } from "../../model/User";
import {
  ICreateUserDTO,
  IUsersRepository,
} from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    if (this.usersRepository.findByEmail(email)) {
      throw new Error("User already exists");
    }

    const user: ICreateUserDTO = {
      email,
      name,
    };

    const createdUser = this.usersRepository.create(user);

    return createdUser;
  }
}

export { CreateUserUseCase };
