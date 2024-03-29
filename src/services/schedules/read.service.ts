import { Repository } from 'typeorm';
import { AppError } from '../../errors';
import { AppDataSource } from '../../data-source';
import { RealEstate } from '../../entities';

const readSchedulesService = async (reId: number): Promise<RealEstate | null> => {
	const realEstateRepository: Repository<RealEstate> = AppDataSource.getRepository(RealEstate); 

	const realEstate: RealEstate | null = await realEstateRepository.findOneBy({ id: reId });    
	if (!realEstate) throw new AppError('RealEstate not found', 404);

    const foundRealEstateSchedules: Promise<RealEstate | null> = realEstateRepository.createQueryBuilder('realEstate')
        .where('realEstate.id = :reId', { reId: reId })
        .leftJoinAndSelect('realEstate.address', 'address')
        .leftJoinAndSelect('realEstate.category', 'category')
        .leftJoinAndSelect('realEstate.schedules', 'schedules')
        .leftJoinAndSelect('schedules.user', 'user')
        .getOne();

	return foundRealEstateSchedules;
};

export default readSchedulesService;
