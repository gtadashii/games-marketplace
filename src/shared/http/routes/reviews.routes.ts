import { Router } from 'express';
import { v4 as uuid } from "uuid";

const reviewsRoutes = Router();

reviewsRoutes.post("/", (request, response) => {
  console.info("POST /reviews");
  const review = request.body;
  
  return response.status(201).send(review);
})

export { reviewsRoutes };
