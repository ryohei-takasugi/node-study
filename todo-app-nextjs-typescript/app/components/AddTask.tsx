"use client"

import { addTask } from "@/api/api";
import { ChangeEvent, FormEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const AddTask = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await addTask({ id: uuidv4(), name: taskTitle });
    setTaskTitle("");
  }
  return (
    <form className="mb-4 space-y-3" onSubmit={handleSubmit}>
      <input
        type="text"
        className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:border-blue-400"
        onChange={(e: ChangeEvent<HTMLInputElement>) => setTaskTitle(e.target.value)}
      />
      <button className="w-full px-4 py-2 bg-blue-400 rounded-lg transform hover:bg-blue-300 hover:scale-95">Add Task</button>
    </form>
  );
}

export default AddTask;