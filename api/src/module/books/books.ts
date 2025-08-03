import type { Context } from 'hono';
import type { BlankEnv, BlankInput } from 'hono/types';

type Book = { id: number; title: string };
const books: Book[] = [
  { id: 1, title: 'The Hobbit' },
  { id: 2, title: '1984' },
];

export const getBooks = (c: Context<BlankEnv, '/books', BlankInput>): Response => c.json(books);

export const addBook = async (c: Context<BlankEnv, '/books', BlankInput>): Promise<Response> => {
  const body = await c.req.json<Book>();
  const id = books.at(-1)?.id ?? 0;
  const newBook = { ...body, id: id + 1 };
  books.push(newBook);
  return c.json(newBook, 201);
};
