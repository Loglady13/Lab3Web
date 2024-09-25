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
      <div className='flex w-full'>
        <TaskList/>
        <TaskDetail/>
      </div>
      
    </div>
  );
}

export default App;
