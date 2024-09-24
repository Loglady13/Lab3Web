
const NavigationBar = () => {
  return (
    <nav className="p-3 bg-gray-300 flex justify-between items-center">
      <h1 className="text-lg font-bold">My To-Do</h1>

      <button className="bg-cyan-500 text-white p-1 px-2 rounded-lg font-semibold hover:bg-cyan-600 ">+ Add task</button>
    </nav>
  );
}

export default NavigationBar;
