import express from 'express';
import { getAllPosts, getPost, createPost, deletePost, updatePost, getUsersPosts, searchPost } from '../controllers/postControllers.js';
import { verifyToken } from '../utils/verifyToken.js';

const router = express.Router();

router.get('/', getAllPosts);
router.get('/:id', getPost);
router.get('/search/:id/:query', searchPost);
router.post('/', verifyToken ,createPost);
router.delete('/:id', verifyToken, deletePost);
router.patch('/:id', updatePost);
router.get('/user/:id', getUsersPosts)

export default router;