import { Repository } from 'typeorm';
import { AppError } from '../../errors';
import { AppDataSource } from '../../data-source';
import { RealEstate, Schedule, User } from '../../entities';
import { iScheduleCreate } from '../../interfaces';

const createSchedulesService = async (userId: number, data: iScheduleCreate): Promise<void> => {
    const { date, hour, realEstateId } = data

	const userRepository: Repository<User> = AppDataSource.getRepository(User);
	const scheduleRepository: Repository<Schedule> = AppDataSource.getRepository(Schedule);
	const realEstateRepository: Repository<RealEstate> = AppDataSource.getRepository(RealEstate);

	const realEstate: RealEstate | null = await realEstateRepository.findOneBy({ id: realEstateId });
	if (!realEstate) throw new AppError('RealEstate not found', 404);

	const repeatedSchedule = await scheduleRepository.createQueryBuilder('schedule')
		.where('schedule.realEstateId = :reId', { reId: realEstateId })
		.andWhere('schedule.date = :date', { date: date })
		.andWhere('schedule.hour = :hour', { hour: hour })
		.getOne();
	if (repeatedSchedule) throw new AppError('Schedule to this real estate at this date and time already exists', 409);

	const repeatedUserSchedule = await scheduleRepository.createQueryBuilder('schedule')
        .where('schedule.userId = :userId', { userId: userId })
        .andWhere('schedule.date = :date', { date: date })
        .andWhere('schedule.hour = :hour', { hour: hour })
        .getOne();
	if (repeatedUserSchedule) throw new AppError('User schedule to this real estate at this date and time already exists', 409);

    const [ hrs, min ] = hour.split(':').map(str => Number(str));
    const hrsToMin: number = (hrs * 60) + min;
    if (hrsToMin < 480 || hrsToMin > 1080) throw new AppError('Invalid hour, available times are 8AM to 18PM', 400);

    const weekday: number = new Date(date).getDay();
	if (weekday === 0 || weekday === 6) throw new AppError('Invalid date, work days are monday to friday', 400);

	const user: User | null = await userRepository.findOneBy({ id: userId });
	const schedule: Schedule = scheduleRepository.create({ ...data,	realEstate: realEstate,	user: user! });
	await scheduleRepository.save(schedule);
};

export default createSchedulesService;
