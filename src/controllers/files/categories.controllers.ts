import { Request, Response } from 'express';
import { iCategory } from '../../interfaces';
import { createCategoryService, readCategoriesService } from '../../services';

export const createCategoryController = async (req: Request, res: Response): Promise<Response> => {
	const newCategory: iCategory = await createCategoryService(req.body);

	return res.status(201).json(newCategory);
};

export const readCategoriesController = async (req: Request, res: Response): Promise<Response> => {
    const categories: Array<iCategory> = await readCategoriesService()

    return res.status(200).json(categories)
}