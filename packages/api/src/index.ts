import { Hono } from 'hono';

// Create the Hono app
const app = new Hono();

// Default route that returns OK
app.get('/api/v1', (c) => {
  return c.text('OK');
});

// Export the Hono app
export default app;