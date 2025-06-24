import { Hono } from 'hono';

const app = new Hono();

app.get('/', c => {
  return c.json({ message: 'Hello Hono and Wrangler!' });
});

export default app;
