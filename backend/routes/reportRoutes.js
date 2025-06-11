import express from "express"
import { adminOnly, protect } from "../middlewares/authMiddleware.js";
import { exportTasksReport, exportUserReport } from "../controllers/reportController.js";

const router = express.Router()

router.get("/export/tasks", protect, adminOnly, exportTasksReport); // Export all tasks
router.get("/export/users", protect, adminOnly, exportUserReport); // Export user-task

export default router;