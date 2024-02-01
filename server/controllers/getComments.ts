import { Request, Response } from "express";
import { postModel } from "../models/UserPost";
import { UserModel } from "../models/UserSignin";

export default async function getComments(req:Request,res:Response){
    try{

    const postId=req.params.postId;
    const post=await postModel.findById(postId).populate("comments.postedBy");
    if(!post){
        res.end("no posts");
    }

    else{
        const commentsWithUser = await Promise.all(
        post.comments.map(async (comment) => {
          const user = await UserModel.findById(comment.postedBy);
          return {
            text: comment.text,
            postedBy: user ? { _id: user._id, username: user.username } : null,
          };
        })
      );
  
      res.json(commentsWithUser);

    }
    


    }catch(e){
        res.sendStatus(401);
    }



}