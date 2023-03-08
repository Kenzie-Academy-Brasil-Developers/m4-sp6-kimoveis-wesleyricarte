import { Router } from 'express';
import {
	adminTokenMiddleare,
	validDataMiddleare,
	validTokenMiddleare,
} from '../middlewares';

const schedulesRoutes: Router = Router();

schedulesRoutes.post('', validTokenMiddleare,
// validDataMiddleare(schema)
);
schedulesRoutes.get('', adminTokenMiddleare);

export default schedulesRoutes;
