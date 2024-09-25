import './output.css';
import NavigationBar from "./components/NavigationBar";
import TaskDetail from './components/TaskDetails';
import TaskList from './components/TaskList';
import React, { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null); // Estado para la tarea seleccionada

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (taskTitle) => {
    if (window.confirm(`Are you sure you want to delete the task: "${taskTitle}"?`)) {
      const updatedTasks = tasks.filter(task => task.title !== taskTitle);
      setTasks(updatedTasks);
      setSelectedTask(null); // Limpiar la tarea seleccionada si es eliminada
    }
  };

  return (
    <div className="App">
      <NavigationBar addTask={addTask}/>
      <div className='flex w-full font-roboto'>
        <TaskList tasks={tasks} onTaskSelect={setSelectedTask} /> 
        {selectedTask && ( // Muestra TaskDetail solo si hay una tarea seleccionada
          <TaskDetail 
            task_title={selectedTask.title} 
            task_date={new Date().toISOString().split('T')[0]} 
            task_description={selectedTask.details}
            deleteTask={deleteTask}
          />
          
        )}
        
      </div>

    </div>
  );
}

export default App;
