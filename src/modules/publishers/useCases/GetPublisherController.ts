import { Request, Response } from "express";
import { container } from "tsyringe";

import { GetPublisherUseCase } from "./GetPublisherUseCase";

class GetPublisherController {
  async handler(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const getPublisherUseCase = container.resolve(GetPublisherUseCase);
    const publisher = await getPublisherUseCase.execute(id);
    return response.status(200).json(publisher);
  }
}

export { GetPublisherController }
