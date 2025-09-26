import Task, { ITaskModel } from "../model/taskModel";
import { ITask } from "../types/tasks";

export async function getAllTasks(): Promise<ITaskModel[]> {
  return await Task.find();
}

export async function getTaskById(id: string): Promise<ITaskModel | null> {
  return await Task.findById(id);
}

export async function createTask(data: ITask): Promise<ITaskModel> {
  const task = new Task(data);
  return await task.save();
}

export async function updateTask(
  id: string,
  data: Partial<ITask>
): Promise<ITaskModel | null> {
  return await Task.findByIdAndUpdate(id, data, { new: true });
}

export async function deleteTask(id: string): Promise<ITaskModel | null> {
  return await Task.findByIdAndDelete(id);
}
