import 'express-async-errors';
import express, { Application, json } from 'express';
import { handleErrors } from './errors';
import {
	categoriesRoutes,
	loginRoutes,
	realEstateRoutes,
	schedulesRoutes,
	usersRoutes,
} from './routers/';

const app: Application = express();
app.use(json());

app.use('/users', usersRoutes);
app.use('/login', loginRoutes);
app.use('/categories', categoriesRoutes);
app.use('/realEstate', realEstateRoutes);
app.use('/schedules', schedulesRoutes);

app.use(handleErrors);

export default app;
