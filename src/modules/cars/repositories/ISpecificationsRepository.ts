import { Category } from "../model/Category";
import { Specification } from "../model/Specification";

interface ICreateSpecificationDTO {
  name: string;
  description: string;
}

interface ISpecificationRepository {
  create({name, description}: ICreateSpecificationDTO): void;
  findByName(name: string): Specification;
  findAll(): Category[];
}

export { ICreateSpecificationDTO, ISpecificationRepository };