import { inject, injectable } from "tsyringe";
import { AppError } from "../../../shared/errors/AppError";
import { Game } from "../entities/Game";

import { GamesRepositoryInterface } from "../repositories/GamesRepositoryInterface";
import { PublisherRepositoryInterface } from "../../publishers/repositories/PublishersRepositoryInterface";

interface RequestInterface {
  title: string;
  publisherId: string;
  categories: string;
  price: number;
}

@injectable()
class CreateGameUseCase {
  constructor (
    @inject("GamesRepository")
    private gamesRepository: GamesRepositoryInterface,
    private publishersRepository: PublisherRepositoryInterface
  ) {}

  async execute ({ title, publisherId, categories, price }: RequestInterface) : Promise<Game> {
    const gameAlreadyExists = await this.gamesRepository.getByTitle(title);
    if (gameAlreadyExists) {
      throw new AppError("Game already exists!")
    }

    const publisher = await this.publishersRepository.findById(publisherId);
    if (!publisher) {
      throw new AppError(`Publisher of id ${publisherId} does not exists`);
    }

    const game = await this.gamesRepository.create({ title, publisherId, categories, price });
    return game;
  }
}

export { CreateGameUseCase }
