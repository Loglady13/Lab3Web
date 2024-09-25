import React, { useState } from 'react';
import AddTaskFrom from './AddTaskFrom';
import TaskList from './TaskList';

const TaskManager = () => {
  const [tasks, setTasks] = useState([]); //Array of tasks, empty array is assigned

  const addTask = (newTask) => { //Add a new task
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="task-manager">
      <AddTaskFrom addTask={addTask} />
      <TaskList tasks={tasks} />
    </div>
  );
};

export default TaskManager;
