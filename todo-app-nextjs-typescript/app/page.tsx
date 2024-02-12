import { getAllTasks } from "@/api/api";
import AddTask from "./components/AddTask";
import TodoList from "./components/TodoList";

export default async function Home() {
  const tasks = await getAllTasks();
  console.log(tasks)
  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold -mt-32">
        Nextjs Todo App
      </h1>
      <div className="w-full max-w-xl mt-5">
        <div className="w-full px-8 py-6 shadow-md randed-lg">
          <AddTask />
          <TodoList tasks={tasks} />
        </div>
      </div>
    </main>
  )
}
