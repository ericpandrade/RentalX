import { Response, Request } from "express";
import { ImportCategoryUseCase } from "./importCategoryUseCase";

class ImportCategoryController {
  constructor (private importCategory: ImportCategoryUseCase){}

  handle(request: Request, response: Response) {
    const { file } = request;
    this.importCategory.execute(file);

    return response.status(201).send();
  }
}

export { ImportCategoryController };