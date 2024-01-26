import express from 'express';
import { Request,Response } from "express";
import { postModel } from "../models/UserPost";
const app=express();
app.use(express.json());

export default async function handlePost(req:Request,res:Response){
    

    const postContent=req.body.postContent;
    const userId=req.headers.userId;
    console.log("control was here");
    console.log(postContent);
    console.log(userId);
    if (!postContent || !userId) {
        return res.status(400).json({ message: 'Missing post content or user ID' });
    }
    
    const newPost=new postModel({postContent,userId});
    await newPost.save();
    res.json({message:'post successfully created'});

    

    

}