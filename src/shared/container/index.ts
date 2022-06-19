import { container } from "tsyringe";

import { PublishersRepository } from "../../modules/publishers/repositories/PublishersRepository";
import { PublisherRepositoryInterface } from "../../modules/publishers/repositories/PublishersRepositoryInterface";

container.registerSingleton<PublisherRepositoryInterface>(
  "PublishersRepository",
  PublishersRepository
);