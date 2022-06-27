import { Repository } from "typeorm";

import { AppDataSource } from "shared/typeorm/data-source";

import { GamesRepositoryInterface } from "./GamesRepositoryInterface";

import { CreateGameDTO } from "../dtos/CreateGameDTO";
import { Game } from "../entities/Game";

class GamesRepository implements GamesRepositoryInterface {

  private repository: Repository<Game>;

  constructor () {
    this.repository = AppDataSource.getMongoRepository(Game);
  }

  async create({ title, publisherId, categories, price }: CreateGameDTO): Promise<Game> {
    const game = this.repository.create({ title, publisherId, categories, price });
    await this.repository.save(game);
    return game;
  }
  async getById(id: string): Promise<Game> {
    const game = await this.repository.findOneBy({ id });
    return game;
  }
  async getByTitle(title: string): Promise<Game> {
    const game = await this.repository.findOneBy({ title });
    return game;
  }
  async updatePrice(id: string, newPrice: number): Promise<void> {
    await this.repository.update({ id }, { price: newPrice });
  }
}

export { GamesRepository }
