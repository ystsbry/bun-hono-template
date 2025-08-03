import { Context } from "hono";
import { BlankEnv, BlankInput } from "hono/types";

export const sum = async (c: Context<BlankEnv, "/math/sum", BlankInput>) => {
  const { a, b } = await c.req.json<{ a: number; b: number }>()
  return c.json({ result: a + b })
}
