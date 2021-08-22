import express from 'express';
import tweetRouter from './router/tweet.js';
import userRouter from './router/user.js';

const app = express();

app.use(express.json()); // REST API json -> Body parsing

app.use('/tweets',tweetRouter);
app.use('/users',userRouter);

app.listen(7070);
