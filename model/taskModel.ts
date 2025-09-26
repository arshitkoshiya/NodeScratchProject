import mongoose, { Schema, Document } from "mongoose";
import { ITask } from "../types/tasks";

export interface ITaskModel extends ITask, Document {}

const taskSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    completed: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.model<ITaskModel>("Task", taskSchema);
