import { PublishersRepositoryInMemory } from "../repositories/PublishersRepositoryInMemory";
import { AppError } from "../../../shared/errors/AppError";

import { CreatePublisherUseCase } from "./CreatePublisherUseCase";
import { GetPublisherUseCase } from "./GetPublisherUseCase";
import { UpdatePublisherUseCase } from "./UpdatePublisherUseCase";

let createPublisherUseCase: CreatePublisherUseCase;
let getPublisherUseCase: GetPublisherUseCase;
let updatePublisherUseCase: UpdatePublisherUseCase;
let publishersRepositoryInMemory: PublishersRepositoryInMemory;

describe("update publisher test", () => {
  beforeEach(() => {
    publishersRepositoryInMemory = new PublishersRepositoryInMemory();
    createPublisherUseCase = new CreatePublisherUseCase(publishersRepositoryInMemory);
    getPublisherUseCase = new GetPublisherUseCase(publishersRepositoryInMemory);
    updatePublisherUseCase = new UpdatePublisherUseCase(publishersRepositoryInMemory);
  })

  it("should update publisher", async () => {
    const createdPublisher = await createPublisherUseCase.execute({
      name: "Konami"
    });

    await updatePublisherUseCase.execute({
      id: createdPublisher.id,
      name: "Nintendo"
    });

    const publisher = await getPublisherUseCase.execute(createdPublisher.id);
    expect(publisher.name).toEqual("Nintendo");
  });

  it("should inform that publisher was not found", async () => {
    await expect(
      updatePublisherUseCase.execute({
        id: "12345",
        name: "Test Publisher"
      })
    ).rejects.toEqual(new AppError("Publisher of id 12345 not found", 404))
  })
})