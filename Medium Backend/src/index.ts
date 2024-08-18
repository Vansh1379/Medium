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


// postgres://avnadmin:AVNS_QJo8NJF-Rm0azJdP-mY@pg-619df46-vanshkalra1379-1379.b.aivencloud.com:25758/defaultdb?sslmode=require

// DATABASE_URL="prisma://accelerate.prisma-data.net/?api_key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlfa2V5IjoiNjdhOGQ4N2UtZmU2Ny00YTllLTlkZDYtNmNkYjU4NzcyM2M3IiwidGVuYW50X2lkIjoiNmRiMTI1YjZkMjlkY2I5OTJhYTA4YjJhMTU1MWMyZWE5NDRiZjJiYTg5Zjg2ZjE4MDYxOTY2MmU3ZDIwNGM0NyIsImludGVybmFsX3NlY3JldCI6IjM4YmQ4NGU0LTYyODEtNDhlMC1iNDRjLWMzZWZlY2VkOWQ3MCJ9.9vltmP53f769EWizhsTEpH0rWre9HK3QtaIrFoz1NoI"

