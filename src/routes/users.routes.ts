import { Router } from 'express';
import { v4 as uuid } from "uuid";

const usersRoutes = Router();

usersRoutes.post("/", (request, response) => {
  console.info("POST /users");
  const user = request.body;
  
  return response.status(201).send(user);
})

export { usersRoutes };
