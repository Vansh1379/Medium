import { Hono } from 'hono'

const app = new Hono();

app.post("/api/v1/user/signup", (c) => {
    return c.text("hello");
})


app.post("/api/v1/user/signin", (c) => {
    return c.text("hello");
})


app.post("/api/v1/blog", (c) => {
    return c.text("hello");
})

app.put("/api/v1/blog", (c) => {
    return c.text("Hello 4");
})

app.get("api/v1/blog/:id", (c) => {
    return c.text("id");
})

app.get("api/v1/blog/bulk", (c) => {
    return c.text("bulk");
})

export default app
