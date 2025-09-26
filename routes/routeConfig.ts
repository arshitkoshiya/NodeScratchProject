import express from "express";
import taskRoutes from "./tasks/taskRoutes";
const router = express.Router();

router.use("/task", taskRoutes);

export default router