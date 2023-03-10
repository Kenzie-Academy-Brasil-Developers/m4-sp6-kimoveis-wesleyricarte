import { Request, Response } from 'express';
import { iScheduleCreate } from '../../interfaces';
import { createSchedulesService, readSchedulesService } from '../../services';

export const createSchedulesController = async (req: Request, res: Response): Promise<Response> => {
    const data: iScheduleCreate = req.body
	await createSchedulesService(req.user.id, data);

	return res.status(201).json({ message: "Schedule created" });
};

export const readSchedulesController = async (req: Request, res: Response): Promise<Response> => {
	const schedules = await readSchedulesService(parseInt(req.params.id));

	return res.status(200).json(schedules);
};
