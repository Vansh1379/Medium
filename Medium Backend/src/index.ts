import { Hono } from 'hono'
import { User } from '@prisma/client';
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string
  }
}>();

app.post('/api/v1/user/signup', async (c) => {

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())

  const body = await c.req.json();

  try {
    await prisma.user.create({
      data: {
        username: body.username,
        password: body.password,
        name: body.name
      }
    });

    return c.text('jwt here guys')
  }
  catch (e) {
    c.status(403);
    return c.text(`This is that fucking error ${e}`)
    console.error(e);
  }
});

app.post("/api/v1/user/signin", async (c) => {
  const body = c.req.json();
  return c.text('hello from signin');
});

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