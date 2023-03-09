import { Router } from 'express';
import { createRealEstateSchema } from '../schemas';
import { createRealEstateController } from '../controllers';
import { adminTokenMiddleare, validDataMiddleare } from '../middlewares';

const realEstateRoutes: Router = Router();

realEstateRoutes.post('', validDataMiddleare(createRealEstateSchema), adminTokenMiddleare, createRealEstateController);
realEstateRoutes.get('');

export default realEstateRoutes;
 