import { Router } from 'express';
import {
	adminTokenMiddleare,
	validDataMiddleare,
	validTokenMiddleare,
	validUserMiddleare,
} from '../middlewares';
import { createUserSchema, updateUserSchema } from '../schemas';

const usersRoutes: Router = Router();

usersRoutes.post('', validDataMiddleare(createUserSchema));

usersRoutes.get('', adminTokenMiddleare);

usersRoutes.patch(
	'/:id',
	validDataMiddleare(updateUserSchema),
	validTokenMiddleare,
	validUserMiddleare
);

usersRoutes.delete('/:id', adminTokenMiddleare, validUserMiddleare);

export default usersRoutes;
