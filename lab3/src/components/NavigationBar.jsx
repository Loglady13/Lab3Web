import React, { useState } from "react";
import AddTaskBackground from "./AddTaskBackground";

const NavigationBar = ({ addTask }) => {
  const [showAddTask, setShowAddTask] = useState(false); // Controla la visibilidad de AddTaskBackground

  function handleClick() {
    setShowAddTask(true);
  }

  function handleClose() {
    setShowAddTask(false);
  }

  return (
    <div className="py-8 px-8 flex justify-between items-center bg-gray-300">
      <h1 className="text-2xl font-bold font-roboto">My To-Do</h1>
      <div>
        <button onClick={handleClick} className="bg-blue-500 text-white px-4 py-2 rounded">
          + Add Task
        </button>

        {/* Renderiza AddTaskBackground solo si showAddTask es true */}
        {showAddTask && <AddTaskBackground addTask={addTask} onClose={handleClose} />} {/* Pasa addTask aquí */}
      </div>
    </div>
  );
};

export default NavigationBar;
