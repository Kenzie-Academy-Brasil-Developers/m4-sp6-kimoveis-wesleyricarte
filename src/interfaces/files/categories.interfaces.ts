import { z } from 'zod';
import { categorySchema, createCategorySchema } from '../../schemas';

export type iCategory = z.infer<typeof categorySchema>;
export type iCreateCategory = z.infer<typeof createCategorySchema>;
