import mongoose from "mongoose";

const ImageSchema = new mongoose.Schema({
  url: String,
  contentType: String,
});

const postData = new mongoose.Schema(
    {
      postContent: {
        type: String,
        required: true,
      },
      images: [ImageSchema],
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