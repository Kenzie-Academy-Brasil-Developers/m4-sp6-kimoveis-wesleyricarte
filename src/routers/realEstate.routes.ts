import { Router } from 'express';
import { adminTokenMiddleare } from '../middlewares';

const realEstateRoutes: Router = Router();

realEstateRoutes.post('', adminTokenMiddleare);
realEstateRoutes.get('');

export default realEstateRoutes;
