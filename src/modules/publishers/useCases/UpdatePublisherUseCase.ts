import { inject, injectable } from "tsyringe";
import { AppError } from "../../../shared/errors/AppError";

import { PublisherRepositoryInterface } from "../repositories/PublishersRepositoryInterface";

interface RequestInterface {
  id: string;
  name: string;
}

@injectable()
class UpdatePublisherUseCase {
  constructor (
    @inject("PublishersRepository")
    private publisherRepository: PublisherRepositoryInterface
  ) {}

  async execute ({ id, name }: RequestInterface): Promise<void> {
    const publisher = await this.publisherRepository.findById(id);
    if (!publisher) {
      throw new AppError(`Publisher of id ${id} not found`, 404);
    }
    try {
      await this.publisherRepository.updateName(id, name);
    } catch (err) {
      throw new AppError(`Error while updating publisher of id ${id} - ${err}`);
    }
  }
}

export { UpdatePublisherUseCase }
