import './output.css';
import NavigationBar from "./components/NavigationBar"
import TaskDetail from './components/TaskDetails';
import TaskList from './components/TaskList';


import AddTaskFrom from './components/AddTaskForm';
import React, { useState } from 'react';
function App() {
  const [tasks, setTasks] = useState([]);

  // Función para añadir la tarea
  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <div className="App">
      <NavigationBar/>
      <div className='flex w-full font-roboto'>
        <TaskList/>
        <TaskDetail task_title={"Example"} task_date={"29/11/2024"} task_description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"}/>
      </div>
      
    </div>
  );
}

export default App;
