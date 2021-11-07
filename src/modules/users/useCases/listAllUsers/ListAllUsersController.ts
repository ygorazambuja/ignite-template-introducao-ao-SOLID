import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const userId = request.headers.user_id as string;

      const users = this.listAllUsersUseCase.execute({
        user_id: userId,
      });
      return response.status(200).json(users);
    } catch (error) {
      return response.status(400).json({
        error: error.message || "Unexpected error.",
      });
    }
  }
}

export { ListAllUsersController };
