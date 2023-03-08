import { Router } from 'express';
import { validDataMiddleare } from '../middlewares';
import { defaultLoginSchema } from '../schemas';

const loginRoutes: Router = Router();

loginRoutes.post('', validDataMiddleare(defaultLoginSchema));

export default loginRoutes;
