
import User from '../models/User.js'
import mongoose, {mongo} from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from "jsonwebtoken";

export const getAllUsers = async (req,res) => {
    //Sorts by createdAt date in descending order
    const users = await User.find({}).sort({ createdAt: -1});
    res.status(200).json(users);
};

export const getUser = async (req,res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'user does not exist'});
    }
    
    try {
        const user = await User.findById(id); 
        if (!user) return res.status(404).json({ error: 'user does not exist'});
        res.status(200).json(user);
    } catch (err) {
        res.status(400).json({ error: err.message})
    }
};


export const createUser = async (req,res) => {

    try {

        var salt = bcrypt.genSaltSync(10);
        var hash = bcrypt.hashSync(req.body.password, salt);

        const newUser = new User({
            username: req.body.username,
            password: hash
        })

        await newUser.save();
        res.status(200).json(newUser);

    } catch (err) {
        res.status(400).json({error: err.message})
    }
};


export const deleteUser = async (req,res) => {
    const {id} = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'user does not exist'});
    }

    try {
        const user = await User.findById(id); 
        if (!user) return res.status(404).json({ error: 'user does not exist'});
        const deletedUser = await User.findOneAndDelete ( {_id: id} );
        res.status(200).json(deletedUser);
    } catch (err) {
        res.status(400).json({ error: err.message})
    }

};


export const updateUser = async (req,res) => {
    const {id} = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'user does not exist'});
    }

    try {
        const user = await User.findById(id); 
        if (!user) return res.status(404).json({ error: 'user does not exist'});
        const updatedUser = await User.findOneAndUpdate ( {_id: id}, {...req.body} );
        res.status(200).json(updatedUser);
    } catch (err) {
        res.status(400).json({ error: err.message})
    }
};

export const loginUser = async (req,res) => {

    try {
        const user = await User.findOne({username: req.body.username })
        if (!user) return res.status(404).json({error: "User not found!"})

        const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password)
        if (!isPasswordCorrect) return res.status(400).json({error: "Password incorrect!"})

        const token = jwt.sign({id:user._id}, process.env.JWT);
        return res.cookie("access_token", token, {
            httpOnly: true,
        }).status(200).json({status: "ok", access_token: token, user_id: user._id, user_name: user.username});

    } catch (err) {
        return res.status(400).json({error: err.message})
    }
};

export const logoutUser = async (req, res) => {

    try {
        res.status(202).clearCookie('access_token').send({message: 'cookie cleared'})
    } catch (err) {
        return res.status(400).json({error: err.message})
    }

}