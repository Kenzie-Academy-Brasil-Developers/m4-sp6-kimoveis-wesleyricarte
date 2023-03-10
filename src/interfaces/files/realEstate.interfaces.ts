import { z } from 'zod'
import { realEstateSchema, createRealEstateSchema, addressSchema } from '../../schemas';

export type iRealEstate = z.infer<typeof realEstateSchema>
export type iRealEstateCreate = z.infer<typeof createRealEstateSchema>
export type iAddress = z.infer<typeof addressSchema>
