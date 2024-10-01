import React, { useState } from 'react';

const AddTaskForm = ({ onClose }) => {
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDetails, setTaskDetails] = useState('');
  const [taskAttachment, setTaskAttachment] = useState(null); // Cambiar a null

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newTask = {
      title: taskTitle,
      details: taskDetails,
      hasAttachments: !!taskAttachment,
    };

    const formData = new FormData();
    formData.append('task', JSON.stringify(newTask)); // Agregar datos de la tarea
    if (taskAttachment) {
      formData.append('attachment', taskAttachment); // Agregar archivo adjunto
    }

    fetch('http://localhost:5000/api/tasks', {
      method: 'POST',
      body: formData,
    })
    .then(response => {
      if (response.ok) {
        setTaskTitle('');
        setTaskDetails('');
        setTaskAttachment(null);
        onClose();
      } else {
        alert('Error al agregar la tarea');
      }
    })
    .catch(error => {
      console.error('Error al conectar con el backend:', error);
      alert('Hubo un problema al conectar con el servidor');
    });
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
            className='border border-gray-300 rounded-md shadow bg-slate-100 p-2 mt-2 mb-2 text-sm' 
          />
          <input
            type="text"
            name="task-details"
            value={taskDetails}
            onChange={(e) => setTaskDetails(e.target.value)}
            placeholder='task details'
            className='border border-gray-300 rounded-md shadow bg-slate-100 pt-6 pb-6 pl-2 mt-2 mb-3 text-sm'
          />
          <input 
            type="file" 
            name='task-attachment'
            onChange={(e) => setTaskAttachment(e.target.files[0])} // Cambiar a File
            accept=".jpg, .jpeg, .png, .gif, .pdf" 
            className='border border-gray-300 rounded-md shadow bg-slate-100 pt-6 pb-6 pl-2 mt-2 mb-3 text-sm'
          />
        </div>
        <div className='justify-center flex flex-row pt-4 font-bold text-white'>
          <button type='button' onClick={onClose} className='bg-red-600 rounded-md px-10 m-3 border-red-700 border-2 hover:bg-red-700'>
              Cancel
          </button>
          <button type='submit' className='bg-blue-500 rounded-lg px-10 m-3 border-blue-700 border-2 hover:bg-blue-700'>
              Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTaskForm;
