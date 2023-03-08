import { Router } from 'express';
import { createUsersController, deleteUsersController, readUsersController, updateUsersController } from '../controllers';
import { adminTokenMiddleare, duplicatedUserMiddleare, validDataMiddleare, validTokenMiddleare, validUserMiddleare } from '../middlewares';
import { createUserSchema, updateUserSchema } from '../schemas';

const usersRoutes: Router = Router();

usersRoutes.post('', validDataMiddleare(createUserSchema), duplicatedUserMiddleare, createUsersController);

usersRoutes.get('', adminTokenMiddleare, readUsersController);

usersRoutes.patch('/:id', validDataMiddleare(updateUserSchema), duplicatedUserMiddleare, validTokenMiddleare, validUserMiddleare, updateUsersController);

usersRoutes.delete('/:id', validUserMiddleare, adminTokenMiddleare, deleteUsersController);

export default usersRoutes;
