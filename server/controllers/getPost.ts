import { Request,Response } from "express";
import { postModel } from "../models/UserPost";

export default async function getPost(req:Request,res:Response){
    try{
        const allposts=await postModel.find({}).sort({ createdAt: -1 }).populate('userId', 'username');
    res.json(allposts)

    }catch(error){
        res.json({message:"some error occured"});
    }
    

}
