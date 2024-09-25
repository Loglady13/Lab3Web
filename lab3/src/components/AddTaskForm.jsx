import React, { useState } from 'react';

const AddTaskFrom = () => {
    const [task, setTask] = useState([]); 
    const [taskTitle, setTaskTitle] = useState('');
    const [taskDetails, setTaskDetails] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();

        const newTask = {
            title: taskTitle,
            details: taskDetails
        }

        setTask([...task, newTask]);

        setTaskTitle('');
        setTaskDetails('');
    }

  return(
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="task-title">Task Title</label>
            <input type="text" name='task-title' value={taskTitle} onChange={(e) => setTaskTitle(e.target.value)} 
            required />
            <label htmlFor="task-details"> Task Details</label>
            <input type="text" name='task-details' value={taskDetails} onChange={(e) => setTaskDetails(e.target.value)} 
            required />
            <button type='submit'>Add Task</button>
        </form>
    </div>
  );
}

export default AddTaskFrom;
