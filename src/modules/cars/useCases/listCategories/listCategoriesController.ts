import { Request, Response } from "express";
import { ListCategoryUseCase } from "./listCategoriesUseCase";

class ListCategoriesController {
  constructor(private categoriesRepository: ListCategoryUseCase){}
  
  handle(request: Request, response: Response) {
    const categories = this.categoriesRepository.execute();

    return response.json(categories);
  }
}

export { ListCategoriesController };