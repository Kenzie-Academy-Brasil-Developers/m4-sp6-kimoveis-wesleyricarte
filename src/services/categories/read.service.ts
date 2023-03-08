import { Repository } from 'typeorm';
import { AppDataSource } from '../../data-source';
import { Category } from '../../entities';
import { iCategory } from '../../interfaces';

const readCategoriesService = async (): Promise<Array<iCategory>> => {
	const categoriesRepository: Repository<Category> =
		AppDataSource.getRepository(Category);

	const categories: Array<iCategory> = await categoriesRepository.find();

	return categories;
};

export default readCategoriesService;
