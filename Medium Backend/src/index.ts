import { Hono } from 'hono'
import userRouter from './routes/userRouter';
import blogRouter from './routes/blogRouter';
import { cors } from 'hono/cors';

const app = new Hono(); 
app.use('/*', cors());

app.route("/api/v1/user", userRouter);
app.route("/api/v1/blog", blogRouter);

export default app