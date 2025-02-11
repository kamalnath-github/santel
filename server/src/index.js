import express from 'express';
import signupRouter from './routes/signup.js';
import loginRouter from './routes/login.js';
import cookieParser from 'cookie-parser';
import verifyToken from './middleware/verifyToken.js';
import postsRouter from './routes/posts.js';
import { connectDb } from './lib/db.js';
import cors from 'cors';
connectDb();
const app = express();
app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
    }));
app.use(express.json());
app.use('/signup', signupRouter);
app.use('/login', loginRouter);
app.use(verifyToken);
app.use('/posts', postsRouter);

app.listen('5000', () => {
    console.log(`Server is running on http://localhost:5000`);
});