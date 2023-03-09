import { Repository } from 'typeorm';
import { AppError } from '../../errors';
import { AppDataSource } from '../../data-source';
import { Address, Category, RealEstate } from '../../entities';

const createRealEstateService = async (data: any) => {
	const { address: addressData, categoryId } = data;
    const { zipCode, state, city, street, number } = addressData

	const addressRepository: Repository<Address> = AppDataSource.getRepository(Address);
	const categoryRepository: Repository<Category> = AppDataSource.getRepository(Category);
	const realEstateRepository: Repository<RealEstate> = AppDataSource.getRepository(RealEstate);

	const category = await categoryRepository.findOneBy({ id: categoryId });
    if (!category) throw new AppError('Category not found', 404)

    const rep = await addressRepository.findOneBy({ zipCode: zipCode })
    if (rep && rep.state === state && rep.city === city && rep.street === street && rep.number === number) {
        throw new AppError('Address already exists', 409)
    }

	const newAddress = addressRepository.create(addressData);
	const address = await addressRepository.save(newAddress);

	const newRealEstate = realEstateRepository.create({ ...data, address: address, category: category });
	const realEstate = await realEstateRepository.save(newRealEstate);

	return realEstate;
};

export default createRealEstateService;
