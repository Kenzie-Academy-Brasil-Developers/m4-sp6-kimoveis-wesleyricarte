import { z } from 'zod';

export const defaultUserSchema = z.object({
	id: z.number(),
	name: z.string().max(45),
	email: z.string().email().max(45),
	admin: z.boolean().optional(),
	password: z.string().max(120),
	createdAt: z.date(),
	updatedAt: z.date().nullish(),
	deletedAt: z.date().nullish(),
});

export const createUserSchema = defaultUserSchema.omit({
	id: true,
	createdAt: true,
	updatedAt: true,
	deletedAt: true,
});

export const returnUserSchema = defaultUserSchema.omit({
	password: true,
});

export const updateUserSchema = createUserSchema.deepPartial().omit({
	admin: true,
});
