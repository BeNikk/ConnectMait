import  express  from "express";
import UserAuth from "../middlewares/userAuth";
import handlePost from "../controllers/handlePost";
import getPost from "../controllers/getPost";
import getUser from "../controllers/getUser";
import handleComment from "../controllers/handleComment";
import getPostById from "../controllers/getPostById";
const router=express.Router();

router.post('/addPost',UserAuth,handlePost);
router.post('/posts/:postId/comments',UserAuth,handleComment);

router.get('/post',getPost);
router.get('/getuser',getUser);
router.get('/post/:id',getPostById);
export default router;