import AddTaskForm from "./AddTaskForm";
import React from 'react';

const AddTaskBackground = ({ addTask, onClose }) => {
    return (
        <div>
            <div className="
                bg-black opacity-60 
                w-full h-screen flex 
                justify-center items-center 
                text-white z-10 fixed 
                top-0 left-0 bottom-0 right-0">
            </div>

            <div className="fixed z-20 inset-0 flex justify-center items-center">
                <AddTaskForm addTask={addTask} onClose={onClose} /> 
            </div>
        </div>
    );
};

export default AddTaskBackground;