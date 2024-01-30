import mongoose from "mongoose";



const postData = new mongoose.Schema(
    {
      postContent: {
        type: String
        
      },
      
        image: {
          
            type: String,
            
                }      ,
      likes:[{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
      comments: [{
        text: String,
        postedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
      }],
      userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
      },
  
    },

    {
      timestamps: true,
    }
  );

export const postModel=mongoose.model('postModel',postData);