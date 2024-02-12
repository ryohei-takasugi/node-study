import { Task } from "@/task";

export const getAllTasks = async (): Promise<Task[]> => {
  const res = await fetch(`http://localhost:3001/tasks`, {cache: "no-cache"});
  const tasks = res.json();
  return tasks;
}

export const addTask = async (todo: Task): Promise<Task> => {
  const res = await fetch(`http://localhost:3001/tasks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(todo)
  })
  const newTodo = res.json();

  return newTodo;
}


export const editTask = async (id: String, updateName:String): Promise<Task> => {
  const res = await fetch(`http://localhost:3001/tasks/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({name: updateName})
  })
  const updatedTodo = res.json();

  return updatedTodo;
}


export const deleteTask = async (id: String): Promise<Task> => {
  const res = await fetch(`http://localhost:3001/tasks/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    }
  })
  const deletedTodo = res.json();

  return deletedTodo;
}