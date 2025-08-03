import type { Context } from 'hono';
import type { BlankEnv, BlankInput } from 'hono/types';

export const hello = (c: Context<BlankEnv, '/', BlankInput>): Response => c.text('Hello Hono!');
