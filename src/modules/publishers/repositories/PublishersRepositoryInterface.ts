import { CreatePublisherDto } from "../dtos/CreatePublisherDto";
import { Publisher } from "../entities/Publisher";

interface PublisherRepositoryInterface {
  create(data: CreatePublisherDto): Promise<Publisher>;
  findById(id: string): Promise<Publisher>;
  findByName(name: string): Promise<Publisher>;
  updateName(id: string, name: string): Promise<void>;
}

export { PublisherRepositoryInterface }
