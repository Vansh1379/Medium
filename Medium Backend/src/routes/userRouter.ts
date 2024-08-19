import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { decode, sign, verify } from 'hono/jwt'
import { signupInput } from "../Zod/zod";

export const userRouter = new  Hono<{
    Bindings: {
      DATABASE_URL: string;
      JWT_SECRET: string;
    }
  }>();

userRouter.post('/signup', async (c) => {

    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const body = await c.req.json();

    const {success} = signupInput.safeParse(body);
    if(!success){
        c.status(411);
        return c.json({
            message: "Wrong Inputs Not validated by zod"
        })
    }

    try {
        const user = await prisma.user.create({
            data: {
                username: body.username,
                password: body.password,
                name: body.name
            }
        });

        const jwt = await sign({
            id: user.id
        }, c.env.JWT_SECRET);

        return c.text(`jwt here guys ${jwt}`)
    }
    catch (e) {
        c.status(403);
        return c.text(`This is that fucking error ${e}`)
        console.error(e);
    }
});

userRouter.post("/signin", async (c) => {

    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const SignInBody = await c.req.json();

    try {
        // checking wheather the user exixts or not ....
        const user = await prisma.user.findUnique({
            where: {
                username: SignInBody.username,
                password: SignInBody.password,
            }
        })

        // if the user exists then we will generate the jwt token else chal bsdk
        if (user) {
            const jwt = await sign({
                id: user.id
            }, c.env.JWT_SECRET);
            return c.text(`Hello Guys its my Jwt Token ${jwt}`);
        }
        else {
            c.status(403); // unauthorized credentials
            return c.json({
                message: "Inccorect credentials or jake sign up kar laude"
            })
        }

        return c.text(`jwt here guys`);
    }
    catch (e) {
        c.status(403);
        return c.text(`This is that fucking error ${e}`)
        console.error(e);
    }
});



export default userRouter;