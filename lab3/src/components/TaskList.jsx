import TaskRow from './TaskRow';

const TaskList = ({ tasks, onTaskSelect }) => {
  
  return (
    <div className="w-[30%] h-screen border-gray-400 border-2">
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

