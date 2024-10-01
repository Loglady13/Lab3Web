import { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import TaskRow from './TaskRow';

const TaskList = ({ onTaskSelect }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Hacer la solicitud a localhost/api/tasks
    fetch('http://127.0.0.1:5000/api/tasks')
      .then((response) => response.json())
      .then((data) => {
        setTasks(data); // Guardar las tareas en el estado
      })
      .catch((error) => {
        console.error('Error fetching tasks:', error);
      });
  }, []);

  return (
    <div className="w-[30%] h-screen border-gray-400 border-2">
      <SearchBar />
      {/* Leer la lista de tareas */}
      {tasks.length > 0 ? (
        tasks.map((task, index) => (
          <TaskRow
            key={index}
            taskDescription={task.title}
            hasAttachments={task.hasAttachments}
            onClick={() => onTaskSelect(task)}
          />
        ))
      ) : (
        <p>No tasks added yet</p>
      )}
    </div>
  );
};

export default TaskList;


