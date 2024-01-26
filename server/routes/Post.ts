import  express  from "express";
import UserAuth from "../middlewares/userAuth";
import handlePost from "../controllers/handlePost";
import getPost from "../controllers/getPost";
import getUser from "../controllers/getUser";
const router=express.Router();

router.post('/addPost',UserAuth,handlePost);

router.get('/post',getPost);
router.get('/getuser',getUser);
export default router;