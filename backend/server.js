import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js'
import userRoutes from './routes/userRoutes.js'
import taskRoutes from './routes/taskRoutes.js'
import reportRoutes from './routes/reportRoutes.js'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Middleware to handle cors
app.use(
    cors({
        origin: process.env.CLIENT_URL || "*",
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: ["Content-Type", "Authorization"]
    })
)

// Connect Database
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/tasks', taskRoutes);
app.use('/api/reports', reportRoutes);

// Serve Uploads folder
app.use("/uploads", express.static(path.join(__dirname, "uploads")))

// Start Server
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})