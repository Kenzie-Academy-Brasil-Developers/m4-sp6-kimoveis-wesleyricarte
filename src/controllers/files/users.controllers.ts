import { iUserUpdate } from './../../interfaces/files/users.interfaces';
import { createUsersService, deleteUsersService, readUsersService, updateUsersService } from '../../services';
import { Request, Response } from 'express';
import { iUserReturn, iUserReturnArray } from '../../interfaces';

export const createUsersController = async (req: Request, res: Response): Promise<Response> => {
	const newUser: iUserReturn = await createUsersService(req.body);

	return res.status(201).json(newUser);
};

export const readUsersController = async (req: Request, res: Response): Promise<Response> => {
	const users: iUserReturnArray = await readUsersService();

	return res.status(200).json(users);
};

export const updateUsersController = async (req: Request, res: Response): Promise<Response> => {
	const newUserData: iUserUpdate = req.body;
	const userId: number = parseInt(req.params.id);
    const thisUserId: number = req.user.id
    const thisUserAdmin: boolean = req.user.admin

	const updatedUser: iUserReturn = await updateUsersService(newUserData, userId, thisUserId, thisUserAdmin);

	return res.json(updatedUser);
};

export const deleteUsersController = async (req: Request, res: Response): Promise<Response> => {
	const userId: number = parseInt(req.params.id);

	await deleteUsersService(userId);

    return res.status(204).send()
};
