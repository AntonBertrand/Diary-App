
import Post from '../models/Post.js'
import mongoose, {mongo} from 'mongoose';

export const getAllPosts = async (req,res) => {
    //Sorts by createdAt date in descending order
    const posts = await Post.find({}).sort({ createdAt: -1});
    res.status(200).json(posts);
};

export const getUsersPosts = async (req,res) => {
    const posts = await Post.find({createdBy: req.params.id});
    res.status(200).json(posts);
};


export const getPost = async (req,res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'post does not exist'});
    }
    
    try {
        const post = await Post.findById(id); 
        if (!post) return res.status(404).json({ error: 'post does not exist'});
        res.status(200).json(post);
    } catch (err) {
        res.status(400).json({ error: err.message})
    }
};

export const searchPost = async (req, res) => {
    try {
        const { id, query } = req.params;
        const posts = await Post.find({
            //$options 'i' makes the search case insensitive
            "title" : {$regex: query, $options: 'i'},
            "createdBy" : id
        });
        if (!posts) return res.status(404).json({ error: 'No posts found!'});
        res.status(200).json(posts);
    } catch (err) {
        res.status(400).json({ error: err.message})
    }
};


export const createPost = async (req,res) => {
    const {createdBy, date, title, content} = req.body;

    try {
        const post = await Post.create({createdBy, date, title, content});
        res.status(200).json(post);
    } catch (err) {
        res.status(400).json({error: err.message})
    }
};


export const deletePost= async (req,res) => {
    const {id} = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'post does not exist'});
    }

    try {
        const post = await Post.findById(id); 
        if (!post) return res.status(404).json({ error: 'post does not exist'});
        const deletedPost = await Post.findOneAndDelete ( {_id: id} );
        res.status(200).json(deletedPost);
    } catch (err) {
        res.status(400).json({ error: err.message})
    }

};


export const updatePost = async (req,res) => {
    const {id} = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'post does not exist'});
    }

    try {
        const post = await Post.findById(id); 
        if (!post) return res.status(404).json({ error: 'post does not exist'});
        const updatedPost = await Post.findOneAndUpdate ( {_id: id}, {...req.body} );
        res.status(200).json(updatedPost);
    } catch (err) {
        res.status(400).json({ error: err.message})
    }
};
