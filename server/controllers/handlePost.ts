import express, { Request, Response } from 'express';
import { postModel } from '../models/UserPost';
import multer from 'multer';
import { v2 as cloudinary } from 'cloudinary';

const app = express();
app.use(express.json());



cloudinary.config({
  cloud_name: 'dr1vasczt',
  api_key: '536431137576568',
  api_secret: 'V0fDwbALdXWQJ-GyBQC4oilvUJw',
  secure: true,
});
export default async function handlePost(req: Request, res: Response) {
  try {
    const postContent=req.body.postContent;
    const image=req.file;
    console.log(image);
    res.send("hey");
  
    
  }


    


    
  
  catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
