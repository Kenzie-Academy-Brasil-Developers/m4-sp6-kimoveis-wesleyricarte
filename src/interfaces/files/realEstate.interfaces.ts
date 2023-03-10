import { z } from 'zod'
import { realEstateSchema, createRealEstateSchema } from '../../schemas';

export type iRealEstate = z.infer<typeof realEstateSchema>
export type iRealEstateCreate = z.infer<typeof createRealEstateSchema>
