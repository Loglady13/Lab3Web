import React, { useState } from 'react';

const AddTaskFrom = ({ addTask }) => {
  const [taskTitle, setTaskTitle] = useState(''); //vacio por defecto
  const [taskDetails, setTaskDetails] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      title: taskTitle, //Asigna el valor del form
      details: taskDetails, //Asigna
      hasAttachments: false, //No tiene attachments
    };
    addTask(newTask);
    setTaskTitle(''); //Vacía los campos
    setTaskDetails(''); //Vacía los campos
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="task-title">Task Title</label>
        <input
          type="text"
          name="task-title"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
          required
        />
        <label htmlFor="task-details">Task Details</label>
        <input
          type="text"
          name="task-details"
          value={taskDetails}
          onChange={(e) => setTaskDetails(e.target.value)}
        />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default AddTaskFrom;
