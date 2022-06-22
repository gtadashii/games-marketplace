import { PublishersRepositoryInMemory } from "../repositories/PublishersRepositoryInMemory";
import { AppError } from "../../../shared/errors/AppError";

import { CreatePublisherUseCase } from "./CreatePublisherUseCase";
import { GetPublisherUseCase } from "./GetPublisherUseCase";

let createPublisherUseCase: CreatePublisherUseCase;
let getPublisherUseCase: GetPublisherUseCase;
let publishersRepositoryInMemory: PublishersRepositoryInMemory;

describe("get publisher test", () => {
  beforeEach(() => {
    publishersRepositoryInMemory = new PublishersRepositoryInMemory();
    createPublisherUseCase = new CreatePublisherUseCase(publishersRepositoryInMemory);
    getPublisherUseCase = new GetPublisherUseCase(publishersRepositoryInMemory);
  })

  it("should return publisher", async () => {
    const createdPublisher = await createPublisherUseCase.execute({
      name: "Konami"
    });
    const publisher = await getPublisherUseCase.execute(createdPublisher.id);

    expect(publisher.name).toEqual("Konami");
  });

  it("should inform that publisher was not found", async () => {
    await expect(
      getPublisherUseCase.execute("12345")
    ).rejects.toEqual(new AppError("Publisher not found", 404))
  })
})