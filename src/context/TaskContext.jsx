import { createContext, useState, useEffect } from "react";
import { tasks as dataTasks } from "../data/tasks";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(dataTasks);
  }, []);

  function createTask(task) {
    //agrega una nueva task a tasks pero sin alterar el arreglo inicial
    setTasks([
      ...tasks,
      {
        id: tasks.length,
        title: task.title,
        description: task.description,
      },
    ]);
  }

  function deleteTask(taskId) {
    //elimina una task pero sin alterar el arreglo inicial
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  return (
    <TaskContext.Provider value={{ tasks, deleteTask, createTask }}>
      {props.children}
    </TaskContext.Provider>
  );
}
