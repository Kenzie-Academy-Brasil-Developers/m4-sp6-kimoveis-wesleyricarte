import { Repository } from 'typeorm';
import { AppDataSource } from '../../data-source';
import { RealEstate } from '../../entities';

const readRealEstateService = async (): Promise<RealEstate[]> => {
	const realEstateRepository: Repository<RealEstate> = AppDataSource.getRepository(RealEstate);

	const arrayRealEstate: Array<RealEstate> | null = await realEstateRepository.find({ relations: { address: true } });

    arrayRealEstate.map((realEstate) => {
        realEstate.value = Number(realEstate.value).toFixed(2)
    });

    return arrayRealEstate
};

export default readRealEstateService;
