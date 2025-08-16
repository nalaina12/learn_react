import { useState } from "react";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import Todo from "./components/Todo";

function App(props) {
  const [tasks, setTasks] = useState(props.tasks);
  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  }
  function deleteTask(id) {
    const remaining = tasks.filter((task) => task.id !== id);
    setTasks(remaining);
  }
  function editTask(id, newName) {
    const editTaskList = tasks.map((task) =>
      task.id === id ? { ...task, name: newName } : task
    );
    setTasks(editTaskList);
  }

  const taskList = tasks?.map((task) => (
    <Todo key={task.id} name={task.name} id={task.id} completed={task.completed} toggleTaskCompleted={toggleTaskCompleted} deleteTask={deleteTask} editTask={editTask} />
  ));
  function addTask(name) {
    const newTask = { id: "id" + Date.now(), name, completed: false };
    setTasks([...tasks, newTask]);
  }
  

  const tasksNoun = tasks.length === 1 ? "task" : "tasks";
  const headingText = `${tasks.length} ${tasksNoun} remaining`;
  return (
    <div className="todoapp stack-large">
      <h1>To-Do List</h1>
      <Form addTask={addTask} />
      <div className="filters btn-group stack-exception">
        <FilterButton />
        <FilterButton />
        <FilterButton />
      </div>
      <h2 id="list-heading">{headingText}</h2>
      <ul role="list" className="todo-list stack-large stack-exception" aria-labelledby="list-heading">
        {taskList}
      </ul>
    </div>
  );
}
export default App;