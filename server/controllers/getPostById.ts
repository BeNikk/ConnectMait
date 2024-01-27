import { Request, Response } from "express";
import { postModel } from "../models/UserPost";

export default async function getPostById(req:Request,res:Response){
    try{
        const postId=req.params.id;
        console.log(postId)

        const post=await postModel.findById(postId);
        if(!post){
            res.json({message:"no post by this id"});

        }
        res.status(201).json(post);

    }catch(error){
        res.json({message:"some error occured"});
    }
    
    
}