import { beforeAll, afterAll, describe, it, expect } from "bun:test";
import app from "../src/app";

let server: Bun.Server;
let baseURL: string;

beforeAll(() => {
  server  = Bun.serve({ fetch: app.fetch, port: 0 });
  baseURL = `http://127.0.0.1:${server.port}`;
});

afterAll(() => server.stop());


describe("E2E - Posts API", () => {
  it("GET / returns 200 & body", async () => {
    const res  = await fetch(`${baseURL}/`);
    const body = await res.text();

    expect(res.status).toBe(200);
    expect(body).toBe("Hello Hono!");
  });
});
