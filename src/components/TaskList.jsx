//Escribir imp (ENTER) y automaticamente pone el formato de importacion, se escribe el path de donde se va a importar y se presiona TAB para pone el nombre del componente que se desea importar
//import { tasks as dataTasks } from "./tasks";

//Escribir clg (ENTER) y se autocompleta para generar automaticamente un console.log
//Si no se autocompleta se presiona CTRL + ESPACIO
// console.log(dataTasks);

import TaskCard from "./TaskCard";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskList() {
  const { tasks } = useContext(TaskContext);

  if (tasks.length === 0) {
    return <h1 className="text-white text-4xl font-bold text-center">No hay tareas aun</h1>;
  }
  return (
    <div className="grid grid-cols-4 gap-2">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;
