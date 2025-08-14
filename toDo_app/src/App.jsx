import { useState } from "react";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import Todo from "./components/Todo";

function App(props) {
  const [tasks, setTasks] = useState(props.tasks);
  const taskList = tasks?.map((task) => (
    <Todo key={task.id} name={task.name} id={task.id} completed={task.completed} />
  ));
  function addTask(name) {
    const newTask = { id: "id" + Date.now(), name, completed: false };
    setTasks([...tasks, newTask]);
  }
  return (
    <div className="todoapp stack-large">
      <h1>To-Do List</h1>
      <Form addTask={addTask} />
      <div className="filters btn-group stack-exception">
        <FilterButton />
        <FilterButton />
        <FilterButton />
      </div>
      <h2 id="list-heading">3 tasks remaining</h2>
      <ul role="list" className="todo-list stack-large stack-exception" aria-labelledby="list-heading">
        {taskList}
      </ul>
    </div>
  );
}
export default App;