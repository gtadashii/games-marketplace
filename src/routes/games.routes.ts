import { Router } from 'express';
import { v4 as uuid } from "uuid";

const gamesRoutes = Router();

gamesRoutes.post("/", (request, response) => {
  console.info("POST /games");
  const game = request.body;
  
  return response.status(201).send({ id: uuid(), name: game.name });
})

export { gamesRoutes };
