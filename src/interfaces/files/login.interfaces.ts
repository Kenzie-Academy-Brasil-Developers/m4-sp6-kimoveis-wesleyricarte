import { z } from 'zod';
import { defaultLoginSchema } from '../../schemas';

export type iLoginRequest = z.infer<typeof defaultLoginSchema>;
