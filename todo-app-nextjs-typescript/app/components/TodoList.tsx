"use client"
import { Task } from "@/task";
import Todo from "./Todo";

interface TasksProps {
  tasks: Task[];
}

const TodoList = ({ tasks }: TasksProps) => {
  return (
    <ul className="space-y-3">
      {tasks.map((task) => (
        <Todo key={task.id} task={task} />
      ))}
    </ul>
  );
}

export default TodoList;