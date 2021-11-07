import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const user_id = request.params.user_id as string;

      const user = this.showUserProfileUseCase.execute({ user_id });

      if (!user) {
        return response.status(404).json({
          error: "User not found",
        });
      }

      return response.status(200).json(user);
    } catch (error) {
      return response.status(404).json({
        error: error.message || "Unexpected error.",
      });
    }
  }
}

export { ShowUserProfileController };
