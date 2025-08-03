import { Context } from "hono";
import { BlankEnv, BlankInput } from "hono/types";

export const hello = (c: Context<BlankEnv, "/", BlankInput>) => c.text('Hello Hono!')