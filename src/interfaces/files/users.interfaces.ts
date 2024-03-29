import { z } from 'zod';
import {
	defaultUserSchema,
	createUserSchema,
	returnUserSchema,
	updateUserSchema,
    returnArrayUserSchema,
} from '../../schemas';

export type iUser = z.infer<typeof defaultUserSchema>;
export type iUserCreate = z.infer<typeof createUserSchema>;
export type iUserUpdate = z.infer<typeof updateUserSchema>;
export type iUserReturn = z.infer<typeof returnUserSchema>;
export type iUserReturnArray = z.infer<typeof returnArrayUserSchema>
