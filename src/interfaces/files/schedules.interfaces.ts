import { z } from 'zod';
import { createScheduleSchema } from '../../schemas';

export type iScheduleCreate = z.infer<typeof createScheduleSchema>;
