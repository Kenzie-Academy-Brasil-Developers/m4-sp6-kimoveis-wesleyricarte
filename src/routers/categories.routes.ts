import { createCategoryController, readCategoriesController } from '../controllers';
import { Router } from 'express';
import { createCategorySchema } from '../schemas/';
import { adminTokenMiddleare, validDataMiddleare } from '../middlewares';

const categoriesRoutes: Router = Router();

categoriesRoutes.post('', adminTokenMiddleare, validDataMiddleare(createCategorySchema), createCategoryController);
categoriesRoutes.get('', readCategoriesController);
categoriesRoutes.get('/:id/realEstate');

export default categoriesRoutes;
