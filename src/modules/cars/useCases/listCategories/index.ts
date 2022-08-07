import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { ListCategoriesController } from "./listCategoriesController";
import { ListCategoryUseCase } from "./listCategoriesUseCase";

const categoriesRepository = CategoriesRepository.getInstance()
const createCategoryUseCase = new ListCategoryUseCase(categoriesRepository);
const listCategoriesController = new ListCategoriesController(createCategoryUseCase);


export { listCategoriesController };