import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreatePublisherUseCase } from "./CreatePublisherUseCase";

class CreatePublisherController {
  async handler(request: Request, response: Response): Promise<Response> {
    const { name } = request.body;
    const createPublisherUseCase = container.resolve(CreatePublisherUseCase);
    const publisher = await createPublisherUseCase.execute({
      name
    });
    return response.status(201).json(publisher);
  }
}

export { CreatePublisherController }
