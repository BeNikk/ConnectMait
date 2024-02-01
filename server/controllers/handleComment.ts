import { Request, Response } from "express";
import { postModel } from "../models/UserPost";

export default async function handleComment(req:Request,res:Response){
    try{
    const userIdofUserPosting=req.headers.userId;
    const text=req.body.text;
    const postId=req.params.postId;
    
        const post=await postModel.findById(postId);
        if(!post){
            res.sendStatus(403);
        }
        
        const comment={text:text,postedBy:userIdofUserPosting};
        if(post && comment){
            post?.comments.push(comment)
            await post.save();
            res.json({comment:comment,userIdofUserPosting});


        }
       

    }catch(error){
        res.sendStatus(403);
    }



}