import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
  }
}>()

app.post("/api/v1/user/signup", (c) => {

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())

  return c.text("Hello from signup");
})

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
//  "postgresql://postgres:vanshkalra@localhost:5432/postgres"
// DATABASE_URL="prisma://accelerate.prisma-data.net/?api_key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlfa2V5IjoiZjI3ZWRhNjctNGY3My00YTRlLTgwMTEtYzU0MTdiZjBkYWMxIiwidGVuYW50X2lkIjoiMjk0MDc0OTc0ZDEyOGMxYzkyMjgzNzhkYzk2YmRlNjI3NmMwNTE4MDg4MGQxODM5Y2E1YmI5NDFlZGZlYmM0YyIsImludGVybmFsX3NlY3JldCI6Ijk0NWI5MjI5LTIwZjQtNDdjYS1hN2EwLWRkYmViNzhjMGVmMiJ9.qeTlqdAagYs2nN7QajbTMTEWmyxFgTnhVqfnYwi0ONk"