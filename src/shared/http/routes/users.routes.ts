import { Router } from 'express';

const usersRoutes = Router();

usersRoutes.post("/", (request, response) => {
  console.info("POST /users");
  const user = request.body;
  return response.status(201).send(user);
})

export { usersRoutes };
