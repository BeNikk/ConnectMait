import { Request, Response } from "express";
import { UserModel } from "../models/UserSignin";

export default async function getOtherUser(req:Request,res:Response){
    try{
        const otherUserId=req.params.userId;
        const user=await UserModel.findOne({_id:otherUserId});
        if(user){
            res.json({user});
        }
        else{
            res.json({message:"user not found"});
        }


    }catch(e){
        res.json({message:"some error",e});
    }
}