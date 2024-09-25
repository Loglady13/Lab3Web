import React, { useState } from 'react';

const AddTaskForm = ({ addTask, onClose }) => {
  const [taskTitle, setTaskTitle] = useState(''); // vacío por defecto
  const [taskDetails, setTaskDetails] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      title: taskTitle, // Asigna el valor del form
      details: taskDetails, // Asigna
      hasAttachments: false, // No tiene attachments
    };
    addTask(newTask); // Llama a addTask desde las props
    setTaskTitle(''); // Vacía los campos
    setTaskDetails(''); // Vacía los campos
    onClose(); // Cierra el formulario después de agregar la tarea
  };

  return (
    <div className='bg-white'>
      <form onSubmit={handleSubmit} className='m-6'>
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
          <input
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
                  onClick={onClose} // Cambiado a onClick
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
