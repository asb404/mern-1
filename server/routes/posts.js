import express from 'express';
import {getpost,createPost} from '../controllers/post.js'
const router=express.Router();

router.get('/',getpost);
router.post('/',createPost);
export default router;