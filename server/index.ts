import express from 'express';
import cors from 'cors';
import userAuth from './routes/UserAuth';
const app=express();
const PORT=3000;

app.use(express.json());
app.use(cors());
app.use('/',userAuth);
app.listen(PORT,()=>{
    console.log(`server running on port ${[PORT]}`);
})
