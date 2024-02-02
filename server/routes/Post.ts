import  express  from "express";
import UserAuth from "../middlewares/userAuth";
import handlePost from "../controllers/handlePost";
import getPost from "../controllers/getPost";
import getUser from "../controllers/getUser";
import handleComment from "../controllers/handleComment";
import getPostById from "../controllers/getPostById";
import multer from 'multer';
import getComments from "../controllers/getComments";
import getOtherUser from "../controllers/getOtherUser";

import { CloudinaryStorage } from "multer-storage-cloudinary";
import { v2 as cloudinary } from 'cloudinary';



 const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    
      folder: 'maitconnect', // Adjust the format as needed
    } as any,

  
      },
);
const upload = multer({ storage: storage });
const router=express.Router();

router.post('/addPost',UserAuth,upload.single('image'),handlePost);
router.post('/posts/comments/:postId',UserAuth,handleComment);


router.get('/post',getPost);
router.get('/getuser',getUser);
router.get('/post/:id',getPostById);
router.get('/post/comment/:postId',getComments);
router.get('/otherProfile/:otherUserName',getOtherUser);


export default router;