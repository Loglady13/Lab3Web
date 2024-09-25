import Button from "./Button";

const NavigationBar = () => {
  return (
    <div className=" py-8 px-8 flex justify-between items-center bg-gray-300">
        <h1 className="text-2xl font-bold font-roboto ">My To-Do</h1>
        <Button text="+ Add Task" color={"blue"}></Button>
    </div>
  );
}

export default NavigationBar;
