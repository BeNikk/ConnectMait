
import express, {Request,Response} from 'express';

import { UserModel } from '../models/UserSignin';
import jwt from 'jsonwebtoken';
const app=express();
app.use(express.json());
const Secret='mysdcwdfr';
export default async function handleSignup(req:Request,res:Response){
    try{

        const {username,email,password}=req.body;
        const user=new UserModel({username,email,password});
        const savedUser=await user.save();
        const payload={userId:savedUser._id};
        const token=jwt.sign(payload,Secret,{expiresIn:'24h'});

        
        res.json({"messsge":"user created","user":savedUser,"token":token});



    }
    catch(error){
        res.json({"some error occured":error});
    }
}

