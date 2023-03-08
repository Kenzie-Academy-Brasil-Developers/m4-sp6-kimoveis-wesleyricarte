import { iCreateCategory, iCategory } from '../../interfaces';
import { Repository } from 'typeorm';
import { AppDataSource } from '../../data-source';
import { Category } from '../../entities';
import { categorySchema } from '../../schemas';
import { AppError } from '../../errors';

const createCategoryService = async (categoryData: iCreateCategory): Promise<iCategory> => {
	const { name } = categoryData;

	const categoryRepository: Repository<Category> = AppDataSource.getRepository(Category);

	const repeatedCategory: iCategory | null = await categoryRepository.findOneBy({ name: name });
	if (repeatedCategory) throw new AppError('Category already exists', 409);

	const category: iCategory = categoryRepository.create(categoryData);
	await categoryRepository.save(category);

	const newCategory: iCategory = categorySchema.parse(category);

	return newCategory;
};

export default createCategoryService;
