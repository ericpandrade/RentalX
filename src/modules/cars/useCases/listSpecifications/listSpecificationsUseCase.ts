import { Specification } from "../../model/Specification";
import { ISpecificationRepository } from "../../repositories/ISpecificationsRepository";

class ListSpecificationUseCase {
  constructor (private specificationRepository: ISpecificationRepository){}

  execute(): Specification[] {
    const specifications = this.specificationRepository.findAll();

    return specifications;
  }
}

export { ListSpecificationUseCase };