import { Response, Request } from "express";
import { ListSpecificationUseCase } from "./listSpecificationsUseCase";

class ListSpecificationsController {
  constructor(private specificationRepository: ListSpecificationUseCase){}

  handle(request: Request, response: Response){
    const specifications = this.specificationRepository.execute()

    return response.json(specifications);
  }
  
}

export { ListSpecificationsController};