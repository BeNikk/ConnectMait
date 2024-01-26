import { Request, Response } from "express";
import { UserModel } from "../models/UserSignin";

export default async function getUser(req:Request,res:Response){
    try{
        const user=await UserModel.findById(req.params.id);
        if(!user){
            return res.sendStatus(403);
        }
        else{
            res.json({username:user.username})
        }
    }catch(err){
        res.json({error:err});
    }
}