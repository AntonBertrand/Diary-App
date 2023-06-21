import express from "express";
import mongoose from "mongoose";
import * as dotenv from 'dotenv';
import postRoutes from './routes/posts.js';
import userRoutes from './routes/users.js';
import cors from 'cors';
import cookieParser from "cookie-parser";

dotenv.config();
const port = process.env.PORT;

const app = express();

//Middlewares
app.use(cookieParser());
app.use(express.json());
app.use(cors({origin: true, credentials: true}));

app.use('/api/posts', postRoutes);
app.use('/api/users', userRoutes);

const connectDB = async () => {
    try {
        mongoose.set('strictQuery', true)
        mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log('MongoDB Connected');
    } catch (error) {
        console.error(err.message);
        process.exit(1);
    }
};


// Connects to MongoDB then starts server

connectDB().then(() => {
    app.listen(port, () => console.log(`Listening on port ${port}`));
}).catch(err => console.log(err));


