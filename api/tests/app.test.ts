import { expect, describe, it } from 'bun:test';
import app from '../src/app';

describe('GET /hello', () => {
  it('returns greeting', async () => {
    const res = await app.request('/');
    expect(res.status).toBe(200);
    expect(await res.text()).toEqual('Hello Hono!');
  });
});
