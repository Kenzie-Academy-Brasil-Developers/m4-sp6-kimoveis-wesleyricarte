import { z } from 'zod';

export const addressSchema = z.object({
	street: z.string(),
	zipCode: z.string().max(8),
	number: z.string().nullish(),
	city: z.string(),
	state: z.string().max(2),
});

export const realEstateSchema = z.object({
	id: z.number(),
	value: z.union([z.string(), z.number()]),
	size: z.number().min(1, 'Number must be greater than 0'),
	address: addressSchema,
	categoryId: z.number(),
	sold: z.boolean(),
	createdAt: z.string(),
	updatedAt: z.string(),
});

export const createRealEstateSchema = z.object({
	value: z.union([z.string(), z.number()]),
	size: z.number().min(1, 'Number must be greater than 0'),
	address: addressSchema,
	categoryId: z.number(),
});
