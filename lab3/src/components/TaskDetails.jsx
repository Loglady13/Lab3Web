import Button from "./Button";

const TaskDetails = ({ task_title, task_description, task_date, deleteTask}) => {
  
  const handleDelete = () => {
    deleteTask(task_title); // Call deleteTask with the task title
  };

  return (
    <div className="w-[70%] border-gray-400 border-y-2">
      <div className="flex items-center justify-between px-4 py-4">
        <h2 className="text-2xl font-roboto">{task_title}</h2>
        <p className="font-bold font-roboto">{task_date}</p>
      </div>
      <div className="px-4 py-4">
        <p className="text-lg font-roboto">{task_description}</p>
        <div className="flex justify-center pt-8">
          <Button text="Delete Task" color="red" onClick={handleDelete} />
        </div>
      </div>
    </div>
  );
};

export default TaskDetails;
