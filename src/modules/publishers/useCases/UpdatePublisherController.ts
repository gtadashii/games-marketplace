import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdatePublisherUseCase } from "./UpdatePublisherUseCase";

class UpdatePublisherController {
  async handler(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { name } = request.body;
    const updatePublisherUseCase = container.resolve(UpdatePublisherUseCase);
    await updatePublisherUseCase.execute({ id, name });
    return response.status(204).send();
  }
}

export { UpdatePublisherController }
