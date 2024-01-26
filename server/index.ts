import express from 'express';
import cors from 'cors';
import userAuth from './routes/UserAuth';
import createPost from './routes/Post';
const app=express();
const PORT=3000;

app.use(express.json());
app.use(cors());
app.use('/',userAuth);
app.use('/',createPost);

app.listen(PORT,()=>{
    console.log(`server running on port ${[PORT]}`);
})
