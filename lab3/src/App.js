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
        <TaskDetail/>
      </div>
    </div>
  );
}

export default App;
