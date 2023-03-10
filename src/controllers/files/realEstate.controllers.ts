import { Request, Response } from 'express';
import { createRealEstateService, readRealEstateService } from '../../services';

export const createRealEstateController = async (req: Request, res: Response): Promise<Response> => {
	const newRealEstate = await createRealEstateService(req.body);

	return res.status(201).json(newRealEstate);
};

export const readRealEstateController = async (req: Request, res: Response): Promise<Response> => {
	const arrayRealEstate = await readRealEstateService();

	return res.status(200).json(arrayRealEstate);
};
