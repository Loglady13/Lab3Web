import React, { useState } from 'react';

const AddTaskForm = ({ addTask, onClose }) => {
  const [taskTitle, setTaskTitle] = useState(''); // empty by default
  const [taskDetails, setTaskDetails] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      title: taskTitle, // Assigns the value of the form
      details: taskDetails, // Assign
      hasAttachments: false, // No attachments
    };
    
    // Check if the title already exists
    if (addTask(newTask)) { 
      setTaskTitle(''); // Empty the fields
      setTaskDetails(''); // Empty the fields
      onClose(); // Close the form and add the task
    } else {
      alert('A task with this title already exists!'); // The title already exist
    }
  };

  return (
    <div className='bg-white'>
      <form onSubmit={handleSubmit} //Send the form and close the form
             className='m-6'>
        <div className='flex flex-col text-black'>
          <h2 className='font-bold text-xl'>Add task to To-Do list</h2>
          <input
            type="text"
            name="task-title"
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
            required
            placeholder='task title'
            className='
                    border 
                    border-gray-300 
                    rounded-md 
                    shadow 
                    bg-slate-100 
                    p-2 mt-2 mb-2 
                    text-sm' 
          />
          <input //It's optional
            type="text"
            name="task-details"
            value={taskDetails}
            onChange={(e) => setTaskDetails(e.target.value)}
            placeholder='task details'
            className='
                    border 
                    border-gray-300 
                    rounded-md 
                    shadow 
                    bg-slate-100 
                    pt-6 pb-6 pl-2 
                    mt-2 mb-3 
                    text-sm'
          />
        </div>
        <div className='justify-center flex flex-row pt-4 font-bold text-white'>
          <button type='button' 
                  onClick={onClose} // Close the form
                  className='
                          bg-red-600 
                          rounded-md 
                          px-10 m-3 
                          border-red-700 
                          border-2 
                          hover:bg-red-700'>
              Cancel
          </button>
          <button type='submit' 
                  className='
                      bg-blue-500 
                      rounded-lg 
                      px-10 m-3 
                      border-blue-700 
                      border-2 
                      hover:bg-blue-700'>
              Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTaskForm;