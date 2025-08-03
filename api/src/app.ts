import { Hono } from 'hono'
import { addBook, getBooks } from './module/books/books';
import { hello } from './module/hello/hello';
import { sum } from './module/math/sum';

const app = new Hono()

app
  .get('/books', getBooks)
  .post('/books', addBook)

app.get('/', hello)

app.post('/math/sum', sum)

export default app
