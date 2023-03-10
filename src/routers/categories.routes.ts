import { Router } from 'express';
import { createCategorySchema } from '../schemas/';
import { adminTokenMiddleare, validDataMiddleare } from '../middlewares';
import { createCategoryController, readCategoriesController, readRealEStateByCategoriesController } from '../controllers';

const categoriesRoutes: Router = Router();

categoriesRoutes.post('', adminTokenMiddleare, validDataMiddleare(createCategorySchema), createCategoryController);
categoriesRoutes.get('', readCategoriesController);
categoriesRoutes.get('/:id/realEstate', readRealEStateByCategoriesController);

export default categoriesRoutes;
