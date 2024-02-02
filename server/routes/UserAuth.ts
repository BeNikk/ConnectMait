import express from 'express';
import handleSignup from '../controllers/handleSignup';
import handleSignin from '../controllers/handleSignin';
import UserAuth from '../middlewares/userAuth';
import getUser from '../controllers/getUser';
import getOtherUser from '../controllers/getOtherUser';
import handleEditUser from '../controllers/handleEditUser';

const router=express.Router();


router.post('/signup',handleSignup);
router.post('/signin',handleSignin);
router.get('/user',UserAuth,getUser);
router.get('/user/:otherUserId',getOtherUser);
router.put('/editprofile',UserAuth,handleEditUser);


export default router;