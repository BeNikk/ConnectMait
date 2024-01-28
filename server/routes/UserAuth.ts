import express from 'express';
import handleSignup from '../controllers/handleSignup';
import handleSignin from '../controllers/handleSignin';
import UserAuth from '../middlewares/userAuth';
import getUser from '../controllers/getUser';

const router=express.Router();


router.post('/signup',handleSignup);
router.post('/signin',handleSignin);
router.post('/uploadfile')
router.get('/user',UserAuth,getUser);

export default router;