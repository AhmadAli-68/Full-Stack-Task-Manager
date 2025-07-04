import jwt from "jsonwebtoken";
import User from "../models/User.js";

// Middleware to protect routes
export const protect = async (req, res, next) => {
    try {
        let token = req.headers.authorization;

        if (token && token.startsWith("Bearer")) {
            token = token.split(" ")[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = await User.findById(decoded.id).select("-password"); // Exclude password from user object
            next();
        } else {
            res.status(401).json({ message: "Not authorized, no token" })
        }
    } catch (error) {
        res.status(401).json({ message: "Token Failed", error: error.message })
    }
}

// Middleware for admin-only access
export const adminOnly = (req, res, next) => {
    if (req.user && req.user.role === "admin") {
        next();
    } else {
        res.status(403).json({ message: "Access Denied, Admin Only." })
    }
}