import { Request, Response } from "express";
import { UserModel } from "../models/UserSignin";

export default async function getOtherUser(req:Request,res:Response){
    const otherUsername=req.params.otherUserName;
    
    try{
        const user=await UserModel.findOne({username:otherUsername});
        if(!user){
            res.json({message:"user not found"});
        }
        else{
            res.json({username:user.username,email:user.email,about:user.about});

        }


    }catch(e){
        res.json({message:"some error",error:e});
    }
}