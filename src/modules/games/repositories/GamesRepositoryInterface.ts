import { CreateGameDTO } from "../dtos/CreateGameDTO"
import { Game } from "../entities/Game";

interface GamesRepositoryInterface {
  create (data: CreateGameDTO): Promise<Game>;
  getById (id: string): Promise<Game>;
  getByTitle (title: string): Promise<Game>;
  updatePrice (id: string, newPrice: number): Promise<void>;
}

export { GamesRepositoryInterface }
