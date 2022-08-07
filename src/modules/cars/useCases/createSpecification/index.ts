import { SpecificationRepository } from "../../repositories/implementations/SpecificationRepository";
import { CreateSpecificationController } from "./createSpecificationController";
import { CreateSpecificationUseCase } from "./createSpecificationUseCase";

const createSpecificationRepository = SpecificationRepository.getInstance();
const createSpecificationUseCase = new CreateSpecificationUseCase(createSpecificationRepository) 
const createSpecificationController = new CreateSpecificationController(createSpecificationUseCase)

export { createSpecificationController }