import express from 'express';
import { getAllUsers, getUser, createUser, deleteUser, updateUser, loginUser } from '../controllers/userControllers.js';
import { verifyToken } from '../utils/verifyToken.js';

const router = express.Router();

router.get('/auth', verifyToken, (req, res, next) => {
    res.send("Hello user, you are logged in")
});

router.get('/', getAllUsers);
router.get('/:id', getUser);
router.post('/signup', createUser);
router.delete('/:id', deleteUser);
router.patch('/:id', updateUser);
router.post('/login', loginUser);



export default router;