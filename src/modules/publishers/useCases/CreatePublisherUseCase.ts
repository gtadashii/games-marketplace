import { inject, injectable } from "tsyringe";
import { AppError } from "../../../shared/errors/AppError";
import { Publisher } from "../entities/Publisher";

import { PublisherRepositoryInterface } from "../repositories/PublishersRepositoryInterface";

interface RequestInterface {
  name: string;
}
@injectable()
class CreatePublisherUseCase {
  constructor (
    @inject("PublishersRepository")
    private publishersRepository: PublisherRepositoryInterface
  ) {}

  async execute ({ name }: RequestInterface): Promise<Publisher> {
    const publisherAleadyExists = await this.publishersRepository.findByName(name);
    if (publisherAleadyExists) {
      console.error(`Publisher ${publisherAleadyExists.name} already exists`)
      throw new AppError("Publisher already exists")
    }
    const publisher = await this.publishersRepository.create({ name });
    return publisher;
  }
}

export { CreatePublisherUseCase }
