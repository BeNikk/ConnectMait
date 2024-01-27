import { Request, Response } from "express";
import express from "express";
import { postModel } from "../models/UserPost";
const app=express();
app.use(express.json());

export default async function handleComment(req:Request,res:Response){
    const userIdofUserPosting=req.headers.userId;
    const {text}=req.body;
    const {postId}=req.params;
    if(!userIdofUserPosting){
        res.json({message:"unauthorized"});
    }
    try{
        const post=await postModel.findById(postId);
        if(!post){
            res.sendStatus(403);
        }
        const comment={comment:text,postedBy:userIdofUserPosting};
        if(post && post.comments){
            post?.comments.push(comment)
            await post.save();
            res.json({comment:comment});

        }
       

    }catch(error){
        res.sendStatus(403);
    }



}