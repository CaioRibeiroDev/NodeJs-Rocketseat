import { container } from "tsyringe"

import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository"
import { ICategoriesRepository } from "@modules/cars/repositories/ICategoriesRepository"
import { ISpecificationsRepository } from "@modules/cars/repositories/ISpecificationsRepository"
import { CategoriesRepository } from "@modules/cars/infra/typeorm/repositories/CategoriesRepository"
import { SpecificationsRepository } from "@modules/cars/infra/typeorm/repositories/SpecificationsRepository"
import { UsersRepository } from "@modules/accounts/infra/typeorm/repositories/UsersReporitory"
import { ICarsRepository } from "@modules/cars/repositories/ICarsRepository"
import { CarsRepository } from "@modules/cars/infra/typeorm/repositories/CarsRepository"


// ICategoryRepository
container.registerSingleton<ICategoriesRepository>(
  "CategoriesRepository", 
  CategoriesRepository
)

container.registerSingleton<ISpecificationsRepository>(
  "SpecificationsRepository", 
  SpecificationsRepository
)

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
)

container.registerSingleton<ICarsRepository> (
  "CarsRepository",
  CarsRepository
)