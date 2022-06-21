import { PublishersRepositoryInMemory } from "../repositories/PublishersRepositoryInMemory";
import { AppError } from "shared/errors/AppError";

import { CreatePublisherUseCase } from "./CreatePublisherUseCase";

let createPublisherUseCase: CreatePublisherUseCase;
let publishersRepositoryInMemory: PublishersRepositoryInMemory;

describe("create publisher test", () => {
  beforeEach(() => {
    publishersRepositoryInMemory = new PublishersRepositoryInMemory();
    createPublisherUseCase = new CreatePublisherUseCase(publishersRepositoryInMemory);
  })

  it("should create publisher", async () => {
    const publisher = await createPublisherUseCase.execute({
      name: "Konami"
    });
    expect(publisher).toHaveProperty("id");
  })
})