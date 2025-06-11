import express from 'express';
import { protect, adminOnly } from '../middlewares/authMiddleware.js';
import { getDashboardData, getUserDashboardData, getTasks, getTaskById, createTask, updateTask, deleteTask, updateTaskStatus, updateTaskChecklist } from '../controllers/taskController.js';

const router = express.Router();

// Task Management Routes
router.get('/dashboard-data', protect, getDashboardData); // Get dashboard data
router.get('/user-dashboard-data', protect, getUserDashboardData); // Get user dashboard data
router.get('/', protect, getTasks); // Get all tasks (Admin: all, User: assigned)
router.get('/:id', protect, getTaskById); // Get task by ID
router.post('/', protect, adminOnly, createTask); // Create a task (Admin Only)
router.put('/:id', protect, updateTask); // Update task details
router.delete('/:id', protect, deleteTask); // Delete a task (Admin Only)
router.put('/:id/status', protect, updateTaskStatus); //Update task status
router.put('/:id/todo', protect, updateTaskChecklist); // Update task checklist

export default router;