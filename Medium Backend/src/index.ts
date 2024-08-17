import { Hono } from 'hono'
import { user } from "@prisma/client"
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
  }
}>()

app.post("/api/v1/user/signup", async (c) => {

  console.log("DATABASE_URL:", c.env.DATABASE_URL);

  const body = await c.req.json();

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())

  try {

    await prisma.user.create({
      data: {
        username: body.username,
        password: body.password,
        name: body.name,
        email: body.email,
      }
    })

    return c.text("Hello from signup");
  }
  catch (e) {
    console.error('Error:', e);
    c.status(411);
    return c.text(`User Already Exist with this username or email id ${e}`)
  }

})
// .........................................................................................................................
app.post("/api/v1/user/signin", (c) => {

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())

  return c.text("heelo from signin");
})

app.post("/api/v1/blog", (c) => {

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())

  return c.text("Hello from blog");
})

app.put("/api/v1/blog", (c) => {

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())

  return c.text("hello from blog put");
})

app.get("api/v1/blog/:id", (c) => {

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())

  return c.text("heelo from blog id");
})

app.get("api/v1/blog/bulk", (c) => {

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())

  return c.text("Gello from blog bulk");
})

export default app
