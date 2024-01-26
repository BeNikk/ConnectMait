import mongoose,{Schema,Model} from 'mongoose';



mongoose.connect("mongodb+srv://nikhilbhatt:nikhilbhatt@cluster0.a4hdcfb.mongodb.net/MaitConnect").then(()=>{
    console.log("Mongo Db connected successfully");
}).catch((e)=>{console.log("error connecting mongodb",e)});

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        
    },
    email:{
        type:String,
        required:true,
        
    },
    password:{
        type:String,
        required:true
    }
})

export const UserModel=mongoose.model('User',userSchema);