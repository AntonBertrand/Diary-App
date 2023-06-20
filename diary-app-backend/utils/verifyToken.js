import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
    const token = req.cookies.access_token;
    if(!token) {
        return res.status(400).json({error: "You are not logged in"})
    }

    jwt.verify(token, process.env.JWT, (err, user) => {
        if(err) return res.status(400).json({error: "Token Invalid"})
        req.user = user;
        next()
    });
};