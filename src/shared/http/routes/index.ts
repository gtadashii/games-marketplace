import { Router } from "express";

import { gamesRoutes } from "./games.routes";
import { reviewsRoutes } from "./reviews.routes";
import { usersRoutes } from "./users.routes";

const router = Router();

router.use("/games", gamesRoutes);
router.use("/reviews", reviewsRoutes);
router.use("/users", usersRoutes);

export { router }
