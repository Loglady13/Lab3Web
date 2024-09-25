import './output.css';
import NavigationBar from "./components/NavigationBar";
import TaskDetail from './components/TaskDetails';
import TaskList from './components/TaskList';
import React, { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null); // task status

  const addTask = (task) => {
    const taskExists = tasks.some(existingTask => existingTask.title === task.title);
    
    if (taskExists) {
      return false; //the task already exists
    }
  
    //the task doesn't exist
    setTasks([...tasks, task]);
    return true; // Added task
  };
  

  const deleteTask = (taskTitle) => {
    if (window.confirm(`Are you sure you want to delete the task: "${taskTitle}"?`)) {
      const updatedTasks = tasks.filter(task => task.title !== taskTitle);
      setTasks(updatedTasks);
      setSelectedTask(null); // Clear the selected task if it is deleted
    }
  };

  return (
    <div className="App">
      <NavigationBar addTask={addTask}/>
      <div className='flex w-full font-roboto'>
        <TaskList tasks={tasks} onTaskSelect={setSelectedTask} /> 
        {selectedTask && ( // Displays TaskDetail only if a task is selected
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