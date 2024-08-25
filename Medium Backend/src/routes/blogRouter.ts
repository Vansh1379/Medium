import { Context, Hono } from "hono"
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { decode, verify } from "hono/jwt";
import { createBlogInput, updateBlogInput } from "@vanshkalra1379/medium-common";

const blogRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string;
        JWT_SECRET: string;
    },
    Variables: {
        userId: string;
    }
}>();

blogRouter.use("/*", async (c: Context, next) => {
    // extracts user id and push down it 
    try {
        const token = c.req.header("authorization") || "Token";
        if (!token) {
            return c.body("Invalid Token", 403);
        }

        const words = token.split(" ")[1];
        const verified = await verify(words, c.env.JWT_SECRET);
        if (!verified) {
            return c.body("Wrong Token", 403);
        }
        c.set("userId", verified.id)
        await next();
    }
    catch (err: any) {
        console.error(err);
        return c.body("error", 403);
    }
})

blogRouter.post('/', async (c) => {

    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const userId = c.get("userId");

    const body = await c.req.json();

    const { success } = createBlogInput.safeParse(body);
    if (!success) {
        return c.body("Zod validation failed", 400);
    }

    const blog = await prisma.blog.create({
        data: {
            title: body.title,
            content: body.content,
            authorId: Number(userId)
        }
    })

    return c.json({
        id: blog.id
    });
});

blogRouter.put('/update', async (c) => {

    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const body = await c.req.json();
    const { success } = updateBlogInput.safeParse(body);
    if (!success) {
        return c.body("Zod validation failed", 400);
    }


    const blog = await prisma.blog.update({
        where: {
            id: body.id
        },
        data: {
            title: body.title,
            content: body.content,
            authorId: 1
        }
    })

    return c.json({
        id: blog.id
    });

});

// add pagination here 
blogRouter.get('/bulk', async (c) => {

    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const list = await prisma.blog.findMany({
        select: {
            content: true,
            title: true,
            id: true,
            author: {
                select: {
                    name: true
                }
            }
        }
    });

    return c.json({
        message: "Blog Updated list",
        list
    })
});

blogRouter.get('/:id', async (c) => {
    let id = await c.req.param('id');


    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    try {
        const blog = await prisma.blog.findFirst({
            where: {
                id: Number(id)
            }
        })

        return c.json({
            blog
        });
    }
    catch (err) {
        c.status(411);
        console.error(err);
        return c.json({
            message: "Error while giving you the blog"
        })
    }
});



export default blogRouter;