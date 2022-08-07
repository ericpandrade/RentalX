
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";
import loadCategories from "../../utils/loadCategories";

class ImportCategoryUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  async execute(file: Express.Multer.File): Promise<void> {
    const categories = await loadCategories(file)
  
    categories.map((category) => {
      const { name, description } = category;

      const existCategory = this.categoriesRepository.findByName(name);

      if(!existCategory) {
        this.categoriesRepository.create({
           name, 
           description
        })
      }
    });
  }
}

export { ImportCategoryUseCase }