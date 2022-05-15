import { useState, createContext } from 'react';
import TaskComponent from "../../components/TaskComponent/TaskComponent";
import AddTaskComponent from "../AddTaskComponent/AddTaskComponent";
import './taskList.css';

export const TasksContext = createContext([
  [{ id: 0, description: ''}], (task) => task,
]);

function TaskListComponent() {
  let counter = 1;
  const [ tasks, setTasks ] = useState([
    { id: counter++, description: "Practicar React - 1 hora", },
    { id: counter++, description: "Practicar inglés - 1 hora", },
    { id: counter++, description: "Hacer ejercicio - 1 hora", },
    { id: counter++, description: "Trabajar en el proyecto - 1 hora", },
    { id: counter++, description: "Tocar guitarra - 30 minutos", }
  ]);

  return (
        <TasksContext.Provider value={[ tasks, setTasks ]}>
          <ul className="task-list">
            {tasks.map(task => {
              return (
                <TaskComponent key={task.id} description={task.description}/>
              );
            })}
          </ul>
          <AddTaskComponent/>
        </TasksContext.Provider>
    );
}

export default TaskListComponent;