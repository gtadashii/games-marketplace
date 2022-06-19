import { Repository } from "typeorm";

import { AppDataSource } from "../../../shared/typeorm/data-source";

import { CreatePublisherDto } from "../dtos/CreatePublisherDto";
import { PublisherRepositoryInterface } from "./PublishersRepositoryInterface";

import { Publisher } from "../entities/Publisher";

class PublishersRepository implements PublisherRepositoryInterface {
  private repository: Repository<Publisher>;

  constructor () {
    this.repository = AppDataSource.getRepository(Publisher)
  }

  async create({ id, name }: CreatePublisherDto): Promise<Publisher> {
    const publisher = this.repository.create({ id, name });
    await this.repository.save(publisher);
    return publisher;
  }

  async findById(id: string): Promise<Publisher> {
    const publisher = await this.repository.findOneBy({ id });
    return publisher;
  }

  async findByName(name: string): Promise<Publisher> {
    const publisher = await this.repository.findOneBy({ name })
    return publisher;
  }

  async updateName(id: string, name: string): Promise<void> {
    await this.repository.update({ id }, { name })
  }
}

export { PublishersRepository }
