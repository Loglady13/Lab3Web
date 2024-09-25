
import Button from "./Button";

const TaskDetail = ({ task_title, task_description, task_date, attachment }) => {
    return (
      <div className="w-[70%] border-gray-400 border-y-2">
        <div className="flex items-center justify-between px-4 py-4">
          <h2 className="text-2xl">{task_title}</h2>
          <p className="font-bold">{task_date}</p>
        </div>
        <div className="px-4 py-4">
          <p className="text-lg">{task_description}</p>
          <div className="flex justify-center pt-8">
            <Button text="Delete Task" color="red"/>
          </div>
          
        </div>
        
      </div>
    );
  }
  
  export default TaskDetail;
  