import React, { useState } from 'react';
import AddTaskFrom from './AddTaskFrom';
import TaskList from './TaskList';

const TaskManager = () => {
  const [tasks, setTasks] = useState([]); //Array de tareas, se asigna array vacío

  const addTask = (newTask) => { //Se añade a tasks una nueva
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
