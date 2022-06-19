import { Router } from "express";

import { gamesRoutes } from "./games.routes";
import { reviewsRoutes } from "./reviews.routes";
import { usersRoutes } from "./users.routes";
import { publishersRoutes } from "./publishers.routes";

const router = Router();

router.use("/games", gamesRoutes);
router.use("/reviews", reviewsRoutes);
router.use("/users", usersRoutes);
router.use("/publishers", publishersRoutes);

export { router }
