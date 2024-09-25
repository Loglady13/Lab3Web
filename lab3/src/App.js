import './output.css';
import NavigationBar from './components/NavigationBar';
import TaskList from './components/TaskList';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavigationBar/>
      </header>
      <TaskList/>
    </div>
  );
}

export default App;
