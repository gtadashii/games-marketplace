import { Router } from 'express';

import { CreatePublisherController } from '../../../modules/publishers/useCases/CreatePublisherController';
import { GetPublisherController } from '../../../modules/publishers/useCases/GetPublisherController';
import { UpdatePublisherController } from '../../../modules/publishers/useCases/UpdatePublisherController';

const publishersRoutes = Router();

const createPublisherController = new CreatePublisherController();
const updatePublisherController = new UpdatePublisherController();
const getPublisherController = new GetPublisherController();

publishersRoutes.post("/", createPublisherController.handler);
publishersRoutes.get("/:id", getPublisherController.handler);
publishersRoutes.put("/:id", updatePublisherController.handler);

export { publishersRoutes };
