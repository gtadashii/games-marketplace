import "reflect-metadata"
import { DataSource } from "typeorm"

import { Game } from "../../modules/games/entities/Game"
import { Review } from "../../modules/reviews/entities/Review"
import { User } from "../../modules/users/entities/User"

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "database.sqlite",
    synchronize: true,
    logging: false,
    entities: [Game, Review, User],
    migrations: [],
    subscribers: [],
})
