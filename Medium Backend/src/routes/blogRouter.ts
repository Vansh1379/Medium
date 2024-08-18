import { Hono } from "hono";

const blogRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string;
        JWT_SECRET: string;
    }
}>();

blogRouter.post('/', async (c) => {
    return c.text('Hello from blog post');
});

blogRouter.put('/', async (c) => {
    return c.text('Hello from blog post');
});

blogRouter.get('/:id', async (c) => {
    const id = c.req.param('id');
    return c.text(`Hello from blog post ${id}`);
});

blogRouter.get('/bulk', async (c) => {
    return c.text('Hello from blog post bulk');
});

export default blogRouter;