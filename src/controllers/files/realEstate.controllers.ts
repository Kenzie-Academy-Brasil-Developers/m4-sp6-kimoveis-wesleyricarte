import { Request, Response } from 'express';
import { RealEstate } from '../../entities';
import { createRealEstateService, readRealEstateService } from '../../services';

export const createRealEstateController = async (req: Request, res: Response): Promise<Response> => {
	const newRealEstate: Array<RealEstate> = await createRealEstateService(req.body);

	return res.status(201).json(newRealEstate);
};

export const readRealEstateController = async (req: Request, res: Response): Promise<Response> => {
	const arrayRealEstate: Array<RealEstate> = await readRealEstateService();

	return res.status(200).json(arrayRealEstate);
};
