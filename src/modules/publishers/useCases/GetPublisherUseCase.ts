import { AppError } from "../../../shared/errors/AppError";
import { inject, injectable } from "tsyringe";
import { Publisher } from "../entities/Publisher";

import { PublisherRepositoryInterface } from "../repositories/PublishersRepositoryInterface";

@injectable()
class GetPublisherUseCase {
  constructor (
    @inject("PublishersRepository")
    private publisherRepository: PublisherRepositoryInterface
  ) {}

  async execute (id: string): Promise<Publisher> {
    const publisher = await this.publisherRepository.findById(id);

    if (!publisher) {
      throw new AppError("Publisher not found", 404);
    }

    return publisher;
  }
}

export { GetPublisherUseCase }
