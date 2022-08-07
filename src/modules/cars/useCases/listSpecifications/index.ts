import { SpecificationRepository } from "../../repositories/implementations/SpecificationRepository";
import { ListSpecificationsController } from "./listSpecificationsController";
import { ListSpecificationUseCase } from "./listSpecificationsUseCase";

const listSpecificationRepository = SpecificationRepository.getInstance()
const listSpecificationsUseCase = new ListSpecificationUseCase(listSpecificationRepository)
const listSpecificationsController = new ListSpecificationsController(listSpecificationsUseCase)

export { listSpecificationsController }