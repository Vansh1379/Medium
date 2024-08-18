import { Hono } from 'hono'
import { User } from '@prisma/client';
import userRouter from './routes/userRouter';
import blogRouter from './routes/blogRouter';

const app = new Hono();

app.route("/api/v1/user", userRouter);
app.route("/api/v1/blog", blogRouter);



app.post('/api/v1/blog', async (c) => {
  return c.text('Hello from blog post');
});

app.put('/api/v1/blog', async (c) => {
  return c.text('Hello from blog post');
});

app.get('/api/v1/blog/:id', async (c) => {
  const id = c.req.param('id');
  return c.text(`Hello from blog post ${id}`);
});

app.get('/api/v1/blog/bulk', async (c) => {
  return c.text('Hello from blog post bulk');
});

export default app