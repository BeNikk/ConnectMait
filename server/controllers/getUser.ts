import { Request, Response } from "express";
import { UserModel } from "../models/UserSignin";

export default async function getUser(req:Request,res:Response){
    try{
        const user=await UserModel.findById(req.headers.userId);
        if(!user){
            return res.sendStatus(403);
        }
        else{
            res.json(user);
        }
    }catch(err){
        res.json({error:err});
    }
}
