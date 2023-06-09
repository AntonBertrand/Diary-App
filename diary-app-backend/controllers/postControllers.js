
import Post from '../models/Post.js'

export const getAllPosts = async (req,res) => {
    res.json({ msg: 'get all posts'});
};

export const getPost = async (req,res) => {
    res.json({ msg: 'get specific post'});
};


export const createPost = async (req,res) => {
    const {date, title, content} = req.body;

    try {
        const post = await Post.create({date, title, content});
        res.status(200).json(post);
    } catch (err) {
        res.status(400).json({error: err.message})
    }
};


export const deletePost= async (req,res) => {
    res.json({ msg: 'delete a specific post'});
};


export const updatePost = async (req,res) => {
    res.json({ msg: 'update a specific post'});
};
