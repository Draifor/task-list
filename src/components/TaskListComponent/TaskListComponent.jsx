import TaskComponent from "../TaskComponent/TaskComponent";
import './taskList.css';

function TaskListComponent() {
  const tasks = [
    { description: "Practicar React 1 hora", },
    { description: "Practicar inglés 1 hora", },
    { description: "Hacer ejercicio 1 hora", },
    { description: "Trabajar en el proyecto 1 hora", },
    { description: "Tocar guitarra 30 minutos", }
  ];

  return (
        <div>
          <ul className="task-list">
            {tasks.map(task => {
              return (
                <TaskComponent description={task.description}/>
              );
            })}
          </ul>
        </div>
    );
}

export default TaskListComponent;