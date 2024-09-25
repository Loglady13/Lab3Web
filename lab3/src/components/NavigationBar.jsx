import React, { useState } from "react";
import AddTaskBackground from "./AddTaskBackground";

const NavigationBar = ({ addTask }) => {
  const [showAddTask, setShowAddTask] = useState(false); // Controls the visibility of the AddTaskBackground

  
  function handleClick() {// Open the form for the new task
    setShowAddTask(true);
  }

  function handleClose() {// Close the form
    setShowAddTask(false);
  }

  return (
    <div className="py-8 px-8 flex justify-between items-center bg-gray-300">
      <h1 className="text-2xl font-bold font-roboto">My To-Do</h1>
      <div>
        <button onClick={handleClick} 
                className="bg-blue-500 text-white px-4 py-2 rounded">
          + Add Task
        </button>

        {/* Renders AddTaskBackground only if showAddTask is true */}
        {showAddTask && <AddTaskBackground addTask={addTask} onClose={handleClose} />}
      </div>
    </div>
  );
};

export default NavigationBar;
