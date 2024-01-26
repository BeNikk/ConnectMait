import { Request,Response,NextFunction } from "express";
import jwt from 'jsonwebtoken';
const Secret='mysdcwdfr';



  

export default async function UserAuth(req:Request,res:Response,next:NextFunction){
    
        const token=req.header('Authorization');
    if(!token){
        res.json({message:"access denied"});
    }
    else{
        
            jwt.verify(token,Secret,(err,payload)=>{
                if(err){
                    return res.json({messagehello:err});
                }
                if(!payload){
                    return res.sendStatus(403);
                }
                if(typeof payload==="string"){
                    return res.sendStatus(403)
                }
                req.headers["userId"]=payload.userId;
                next();

            });

            
        
        
        
    }
        
    


    
    

}