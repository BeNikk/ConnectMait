import express, { Request, Response } from 'express';
import { postModel } from '../models/UserPost';
import multer from 'multer';
import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';

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
    const userId=req.headers.userId;
    if(!userId){
      res.json({message:"Unauthorized"});
    }
    if(!image && !postContent){
      res.status(400).send("nothing to add");
    }
    
    if(image && postContent){
      const result = await cloudinary.uploader.upload(image.path, {
        resource_type: 'auto',
      });

    if (!result || !result.secure_url) {
      return res.status(500).json({ error: 'Error uploading image to Cloudinary' });
    }
    const newPost=new postModel({postContent,image:result.secure_url,userId
    });
    await newPost.save();
    fs.unlinkSync(image.path)
    return res.status(201).json({ message: 'Post successfully created' });

    }
    if(!image){
      const newPost=new postModel({postContent,userId});
      await newPost.save();
      res.json({message:"text-only post created successfully"})
    }
    if(!postContent && image){
      const result = await cloudinary.uploader.upload(image.path, {
        resource_type: 'auto',
      });

    if (!result || !result.secure_url) {
      return res.status(500).json({ error: 'Error uploading image to Cloudinary' });
    }
      const newPost=new postModel({image:result.secure_url,userId});
      await newPost.save();
      res.json({message:"image only post created successfully"});
    }
    
    
    




    

    
  }


    


    
  
  catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
