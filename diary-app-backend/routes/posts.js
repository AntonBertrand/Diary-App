import express from 'express';
import { getAllPosts, getPost, createPost, deletePost, updatePost } from '../controllers/postControllers.js';
import { verifyToken } from '../utils/verifyToken.js';

const router = express.Router();

router.get('/', getAllPosts);
router.get('/:id', getPost);
router.post('/', verifyToken ,createPost);
router.delete('/:id', deletePost);
router.patch('/:id', updatePost);


export default router;