import { z } from 'zod'
import { realEstateSchema } from './realEstate.schemas';
import { returnUserSchema } from './users.schemas';

export const scheduleSchema = z.object({
    id: z.number(),
    date: z.string(),
    hour: z.string(),
    realEstateId: z.number(),
    userId: z.number(),
})

export const createScheduleSchema = scheduleSchema.omit({
    id: true,
    userId: true,
})

export const returnScheduleSchema = z.object({
    date: z.string(),
    hour: z.string(),
    realEstate: realEstateSchema,
    user: returnUserSchema
})

export const arrayScheduleSchema = returnScheduleSchema.array();