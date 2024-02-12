import { deleteTask, editTask } from "@/api/api";
import { Task } from "@/task";
import React, { useEffect, useRef, useState } from "react";

interface TaskProps {
  task: Task;
}

const Todo = ({ task }: TaskProps) => {
  const ref = useRef<HTMLInputElement>(null);

  const [isEditing, setIsEditing] = useState(false);
  const handleEdit = async () => {
    setIsEditing(true);
  }
  const handleSave = async () => {
    await editTask(task.id, editedTaskTiltle);
    setIsEditing(false);
  }
  const handleDelete = async () => {
    await deleteTask(task.id);
  }

  const [editedTaskTiltle, setEditedTaskTitle] = useState(task.name);

  useEffect(() => {
    if (isEditing) {
      ref.current?.focus();
    }
  }, [isEditing]);

  return (
    <ul className="space-y-3">
      <li key={task.id} className="flex justify-between p-4 border-l-4 rounded shadow">
        {isEditing ? (
          <input
            ref={ref}
            type="text"
            className="mr-2 py-1 px-2 rounded border-gray-900"
            value={editedTaskTiltle}
            onChange={
              (e: React.ChangeEvent<HTMLInputElement>) => setEditedTaskTitle(e.target.value)
            } />
        ) : (
          <span>{task.name}</span>
        )}
        <div>
          {isEditing ? (
            <button
              className="mr-3"
              onClick={handleSave}>save
            </button>
          ) : (
            <button
              className="mr-3"
              onClick={handleEdit}>edit
            </button>
          )}

          <button onClick={handleDelete}>delete</button>
        </div>
      </li>
    </ul>
  );
}

export default Todo;