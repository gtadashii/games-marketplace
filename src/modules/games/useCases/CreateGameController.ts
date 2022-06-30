import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateGameUseCase } from "./CreateGameUseCase";

class CreateGameController {
  async handler(request: Request, response: Response) {
    const { title, publisherId, categories, price } = request.body;
    const createGameUseCase = container.resolve(CreateGameUseCase);
    const game = await createGameUseCase.execute({
      title,
      publisherId,
      categories,
      price
    });
    return response.status(201).json(game);
  }
}

export { CreateGameController }
