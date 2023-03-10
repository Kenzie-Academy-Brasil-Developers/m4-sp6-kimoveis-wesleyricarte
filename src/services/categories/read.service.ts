import { Repository } from 'typeorm';
import { AppDataSource } from '../../data-source';
import { Category } from '../../entities';
import { AppError } from '../../errors';
import { iCategory } from '../../interfaces';

export const readCategoriesService = async (): Promise<Array<iCategory>> => {
	const categoriesRepository: Repository<Category> = AppDataSource.getRepository(Category);

	const categories: Array<iCategory> = await categoriesRepository.find();

	return categories;
};

export const readRealEstateByCategoriesService = async (categoryId: number): Promise<Category> => {
    const categoriesRepository: Repository<Category> = AppDataSource.getRepository(Category);

    const category: iCategory | null = await categoriesRepository.findOneBy({ id: categoryId });
    if (!category) {throw new AppError('Category not found', 404)}

	const realEstates: Category | null = await categoriesRepository.findOne({ where: {id: category.id!}, relations: { realEstate: true } });

	return realEstates!
};