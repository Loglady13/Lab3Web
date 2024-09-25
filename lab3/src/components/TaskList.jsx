import SearchBar from "./SearchBar.jsx";

const TaskList = () => {
    return (
      <section className="max-w-md">
        <div className="bg-blue-300">
          <h2 className="text-center">To-Do List</h2>
        </div>
        <SearchBar/>
        <div id="container-task" className="bg-black max-h-14">

        </div>

      </section>
    );
  }
  
  export default TaskList;
  