import mongoose from "mongoose";

const postData = new mongoose.Schema(
    {
      postContent: {
        type: String,
        required: true,
      },
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