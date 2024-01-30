import  express  from "express";
import UserAuth from "../middlewares/userAuth";
import handlePost from "../controllers/handlePost";
import getPost from "../controllers/getPost";
import getUser from "../controllers/getUser";
import handleComment from "../controllers/handleComment";
import getPostById from "../controllers/getPostById";
import multer from 'multer';


const storage = multer.diskStorage({
    destination:(req,res,cb)=>{
      cb(null,'./temp')
  
    },
    filename: (req, file, callback) => {

      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
      callback(null, file.fieldname + '-' + uniqueSuffix+file.originalname);
    },
  });
const upload = multer({ storage: storage });
const router=express.Router();

router.post('/addPost',UserAuth,upload.single('image'),handlePost);
router.post('/posts/:postId/comments',UserAuth,handleComment);

router.get('/post',getPost);
router.get('/getuser',getUser);
router.get('/post/:id',getPostById);
export default router;