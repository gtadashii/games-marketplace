import { Router } from 'express';

import { CreatePublisherController } from '../../../modules/publishers/useCases/CreatePublisherController';

const publishersRoutes = Router();

const createPublisherController = new CreatePublisherController();

publishersRoutes.post("/", createPublisherController.handler);

export { publishersRoutes };
