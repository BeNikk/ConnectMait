import {Request,Response} from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
const Secret='mysdcwdfr';

import { UserModel } from '../models/UserSignin';
export default async function handleSignin(req:Request,res:Response){
    const { username, password } = req.body;
    try{
           
        const user = await UserModel.findOne({$and:[{ "username":username },{"password":password}]});
        if (!user) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }

        if(user){
        const payload={"userId":user._id};
        const token=jwt.sign(payload,Secret,{expiresIn:'24h'});
        res.json({"message":"user loggedIn","token":token});
    }


    }catch(error){
        res.json({"message":"some error occured"});
    }
     


}
    

    
    
    

