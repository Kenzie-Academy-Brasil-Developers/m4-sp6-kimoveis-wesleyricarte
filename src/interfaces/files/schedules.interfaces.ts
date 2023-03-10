import { z } from 'zod';
import { scheduleSchema, createScheduleSchema, returnScheduleSchema, arrayScheduleSchema } from '../../schemas';

export type iSchedule = z.infer<typeof scheduleSchema>
export type iScheduleCreate = z.infer<typeof createScheduleSchema>;
export type iScheduleReturn = z.infer<typeof returnScheduleSchema>
export type iScheduleArray = z.infer<typeof arrayScheduleSchema>
