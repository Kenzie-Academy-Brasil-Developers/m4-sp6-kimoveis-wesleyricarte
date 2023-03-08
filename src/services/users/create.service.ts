import { iUserReturn } from './../../interfaces';
import { Repository } from 'typeorm';
import { AppDataSource } from '../../data-source';
import { User } from '../../entities';
import { returnUserSchema } from '../../schemas';

const createUsersService = async (userData: any): Promise<iUserReturn> => {
	const userRepository: Repository<User> = AppDataSource.getRepository(User);

	const user: any = userRepository.create(userData);
	await userRepository.save(user);

	const newUser: iUserReturn = returnUserSchema.parse(user);
	return newUser;
};

export default createUsersService
