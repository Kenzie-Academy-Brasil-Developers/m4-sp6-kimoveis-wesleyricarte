import 'express-async-errors';
import express, { Application, json } from 'express';
import { handleErrors } from './errors';

const app: Application = express();
app.use(json());

app.use('/users', );
app.use('/login', );
app.use('/categories', );
app.use('/realEstate', );
app.use('/schedules', );

app.use(handleErrors);

export default app;
