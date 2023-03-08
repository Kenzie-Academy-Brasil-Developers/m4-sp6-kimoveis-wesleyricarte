import { createCategoryController } from './../controllers/files/categories.controllers';
import { Router } from 'express';
import { createCategorySchema } from '../schemas/';
import { adminTokenMiddleare, validDataMiddleare } from '../middlewares';

const categoriesRoutes: Router = Router();

categoriesRoutes.post('', adminTokenMiddleare, validDataMiddleare(createCategorySchema), createCategoryController);
categoriesRoutes.get('');
categoriesRoutes.get('/:id/realEstate');

export default categoriesRoutes;
