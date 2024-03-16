import jwt from 'jsonwebtoken';
import Users from '../models/Users.mjs';
import jwtSecret from '../config/jwt.mjs';

async function verifyToken(req, res, next) {
    try {
        // Extract token from the Authorization header
        const token = req.headers.authorization?.slice(7);

        // If token is missing, respond with 401 Unauthorized
        if (!token) {
            return res.status(401).send({ message: "No access!" });
        }

        // Verify the token and decode its payload
        const decoded = jwt.verify(token, jwtSecret);

        // Check if the token exists in the database
        const tokenExists = await Users.exists({ tokens: token });

        // If token doesn't exist, respond with 401 Unauthorized
        if (!tokenExists) {
            return res.status(401).send({ message: "Invalid token!" });
        }

        // Attach user ID and token to the request object
        req.userId = decoded._id;
        req.tokenToRemove = token;

        // Call the next middleware or route handler
        next();
    } catch (e) {
        // If token verification fails, respond with 401 Unauthorized
        res.status(401).send({ message: "Invalid token!" });
    }
}

export default verifyToken;