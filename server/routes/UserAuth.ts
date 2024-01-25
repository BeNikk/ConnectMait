import express from 'express';
import handleSignup from '../controllers/handleSignup';
import handleSignin from '../controllers/handleSignin';
const router=express.Router();


router.post('/signup',handleSignup);
router.post('/signin',handleSignin);

export default router;