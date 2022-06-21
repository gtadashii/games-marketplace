import { CreatePublisherDto } from "../dtos/CreatePublisherDto";
import { Publisher } from "../entities/Publisher";
import { PublisherRepositoryInterface } from "./PublishersRepositoryInterface";

class PublishersRepositoryInMemory implements PublisherRepositoryInterface {
  publishers: Publisher[] = [];
  async create({ id, name }: CreatePublisherDto): Promise<Publisher> {
    const publisher = new Publisher();
    Object.assign(publisher, { id, name });
    this.publishers.push(publisher);
    return publisher;
  }
  async findById(id: string): Promise<Publisher> {
    return this.publishers.find((publisher) => publisher.id === id);
  }
  async findByName(name: string): Promise<Publisher> {
    return this.publishers.find((publisher) => publisher.name === name);
  }
  async updateName(id: string, name: string): Promise<void> {
    const publisherIndex = this.publishers.findIndex((publisher) => publisher.id === id);
    this.publishers[publisherIndex].name = name;
  }
}

export { PublishersRepositoryInMemory };
