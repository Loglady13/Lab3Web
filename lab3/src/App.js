import './output.css';
import NavigationBar from "./components/NavigationBar"
import TaskDetail from './components/TaskDetails';
import TaskList from './components/TaskList';


function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <div className='flex w-full'>
        <TaskList/>
        <TaskDetail task_title={"Example"} task_date={"29/11/2024"} task_description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"}/>
      </div>
    </div>
  );
}

export default App;
