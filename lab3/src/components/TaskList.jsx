import TaskRow from './TaskRow';

const TaskList = () => {
  
    return (
      <div className="w-[30%]  h-screen border-gray-400 border-2">
        <TaskRow taskDescription={"Do Homework"}hasAttachments={true}/>
        <TaskRow taskDescription={"AP project"}hasAttachments={false}/>
      </div>
    );
  }
  
  export default TaskList;
  