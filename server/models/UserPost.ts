import mongoose from "mongoose";

const postData = new mongoose.Schema(
    {
      postContent: {
        type: String,
        required: true,
      },
      likes:[{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
      comments: [{
        userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        comment: String,
        createdAt: { type: Date, default: Date.now }
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