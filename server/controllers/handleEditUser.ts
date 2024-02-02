import { Request, Response } from "express";
import { UserModel } from "../models/UserSignin";

export default async function(req:Request,res:Response){
    try{
        const userId=req.headers.userId;
        const {username,email,about}=req.body;
        await UserModel.findByIdAndUpdate(userId,{username,email,about});
        const updatedUserData = await UserModel.findById(userId);
        res.json(updatedUserData);
    }catch(e){
        res.json({message:"some error occured",e});
    }
    
}