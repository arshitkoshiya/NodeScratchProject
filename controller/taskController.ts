import { Request, Response } from "express";
import * as taskService from "../service/taskService";

async function getTasks(req: Request, res: Response) {
  try {
    const tasks = await taskService.getAllTasks();
    res.json(tasks);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
}

async function getTask(req: Request, res: Response) {
  try {
    const task = await taskService.getTaskById(req.params.id);
    if (!task) return res.status(404).json({ message: "Task not found" });
    res.json(task);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
}

async function createTask(req: Request, res: Response) {
  try {
    const task = await taskService.createTask(req.body);
    res.status(201).json(task);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
}

async function updateTask(req: Request, res: Response) {
  try {
    const task = await taskService.updateTask(req.params.id, req.body);
    if (!task) return res.status(404).json({ message: "Task not found" });
    res.json(task);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
}

async function deleteTask(req: Request, res: Response) {
  try {
    const task = await taskService.deleteTask(req.params.id);
    if (!task) return res.status(404).json({ message: "Task not found" });
    res.json({ message: "Task deleted" });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
}

export default {
  getTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
};
