import { z } from 'zod';

export const defaultUserSchema = z.object({
	id: z.number(),
	name: z.string().max(45),
	email: z.string().email().max(45),
	admin: z.boolean(),
	password: z.string().max(120),
	createdAt: z.string(),
	updatedAt: z.string(),
	deletedAt: z.string().nullish(),
});

export const createUserSchema = defaultUserSchema
	.omit({
		id: true,
		createdAt: true,
		updatedAt: true,
		deletedAt: true,
		admin: true,
	})
	.extend({
		admin: z.optional(z.boolean()),
	});

export const returnUserSchema = defaultUserSchema.omit({
	password: true,
});

export const updateUserSchema = createUserSchema.deepPartial().omit({
	admin: true,
});

export const returnArrayUserSchema = returnUserSchema.array();
