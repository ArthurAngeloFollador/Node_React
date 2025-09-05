import Tasks from "./Components/Tasks.jsx";
import AddTasks from "./Components/AddTasks.jsx";
import { useState } from "react";
import { v4 } from 'uuid';

function App() {
  //renderiza o "tasks"
  const [tasks, setTasks] = useState([
    //funciona como getters e setters, respectivamente
    {
      id: 1,
      title: "Estudar programação",
      description:
        "Estudar programação para se tornar um desenvolvedor full stack",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Estudar inglês",
      description: "Estudar programação para se tornar fluente",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Estudar matemática",
      description:
        "Estudar matemática para se tornar um desenvolvedor full stack",
      isCompleted: false,
    },
  ]);

  function onTaskClick(tasksId) {
    const newTask = tasks.map((tasks) => {
      // atualiza a tarefa
      if (tasks.id === tasksId) {
        return { ...tasks, isCompleted: !tasks.isCompleted };
      }
      // nao atualiza a tarefa
      return tasks;
    });
    setTasks(newTask);
  }

  function onDeleteTaskClick(tasksId) {
    const newTask = tasks.filter((tasks) => tasks.id != tasksId);
    setTasks(newTask);
  }

  function onAddTaskSubmit(title, description) {
    const newTask = {
      id: v4(),
      title,
      description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de Tarefas
        </h1>
        <AddTasks onAddTaskSubmit={onAddTaskSubmit} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteTaskClick={onDeleteTaskClick}
        />
      </div>
    </div>
  );
}

export default App;
