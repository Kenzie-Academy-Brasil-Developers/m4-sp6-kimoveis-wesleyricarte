import { Router } from 'express';
import { createScheduleSchema } from '../schemas';
import { createSchedulesController, readSchedulesController } from '../controllers';
import { adminTokenMiddleare, validDataMiddleare, validTokenMiddleare } from '../middlewares';

const schedulesRoutes: Router = Router();

schedulesRoutes.post('', validTokenMiddleare, validDataMiddleare(createScheduleSchema), createSchedulesController);
schedulesRoutes.get('/realEstate/:id', adminTokenMiddleare, readSchedulesController);

export default schedulesRoutes;
