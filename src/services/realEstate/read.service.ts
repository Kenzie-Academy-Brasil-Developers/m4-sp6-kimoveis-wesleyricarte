import { Repository } from 'typeorm';
import { AppDataSource } from '../../data-source';
import { RealEstate } from '../../entities';

const readRealEstateService = async (): Promise<any> => {
	const realEstateRepository: Repository<RealEstate> = AppDataSource.getRepository(RealEstate);

	const arrayRealEstate: Array<RealEstate> | null = await realEstateRepository.find({ relations: { address: true } });

    return arrayRealEstate
};

export default readRealEstateService;
