import { Router } from 'express';
import { adminTokenMiddleare, validDataMiddleare } from '../middlewares';

const categoriesRoutes: Router = Router();

categoriesRoutes.post('', adminTokenMiddleare, validDataMiddleare(schema));
categoriesRoutes.get('');
categoriesRoutes.get('/:id/realEstate');

export default categoriesRoutes;
