import type { Context } from 'hono';
import type { BlankEnv, BlankInput } from 'hono/types';

export const sum = async (c: Context<BlankEnv, '/math/sum', BlankInput>): Promise<Response> => {
  const { a, b } = await c.req.json<{ a: number; b: number }>();
  return c.json({ result: a + b });
};
